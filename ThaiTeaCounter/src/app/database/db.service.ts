import { Injectable } from '@angular/core';
import { ThaiTeaData } from './thaiteadata';  // Should I keep the interface?
import { Dexie, Table } from "dexie";
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  private _counter = new BehaviorSubject(0);
  public counter$ = this._counter.asObservable();
  private _history = new Subject<ThaiTeaData>;
  public history$ = this._history.asObservable();
  private historyCount: number = 0;

  constructor() {
    super('ThaiTeaDB');

    this.version(1).stores({
      counter: 'id, count',
      history: 'id, date, price, place'
    });

    this.open()
      .then(() => console.log('Database opened successfully'))
      .catch(err => console.log(err.message));
    this.initializeCounterTable();
    this.initializeHistoryCount();
  }

  // #################
  // Counter Functions
  // #################

  async initializeCounterTable(): Promise<void> {
    if(await this.table("counter").count() <= 0) {
      console.log("Counter Table not initialized\nCreating new entry for counter");
      this.table("counter").add({id: 0, count: 0});
    }
    console.log("Initialized counter table in Database");

    this.updateCounter(await this.getCount(0));
  }

  async getCount(id: number): Promise<number> {
    try {
      const count = await this.table("counter").get(id);
      console.log(`Retrieving counter (id=${id}) from counter table...`);
      console.log(`Got counter (id=${id}) == ${count.count}`);
      return count !== undefined ? count.count : -1;
    }
    catch (error) {
      console.log(`Counter (id=${id}) not found in counter table`);
      return -1;
    }
  }

  async setCount(id: number, value: number): Promise<void> {
    if(await this.table("counter").update(id, {count: value})) {
      console.log(`Updating counter (id=${id}) in counter table...`);
      console.log(`Successfully updated counter (id=${id})`);
    }
    else
      console.log(`Counter (id=${id}) could not be found/updated`);

    this.updateCounter(value);
  }

  // #################
  // History Functions
  // #################

  async initializeHistoryCount(): Promise<void> {
    this.historyCount = await this.table("history").count();
  }

  async repopulateHistoryView() {
    this._history = new Subject<ThaiTeaData>;
    this.history$ = this._history.asObservable();
    const history: ThaiTeaData[] = await this.table("history").toArray();
    history.forEach((item) => {
      this.updateHistory(item);
    })
  }

  async addData(d: Date, pr: number, pl: string): Promise<void> {
    await this.table("history").add({
      id: ++this.historyCount,
      date: d,
      price: pr,
      place: pl
    })
    this.updateHistory({
      id: this.historyCount,
      date: d,
      price: pr,
      place: pl
    })
    await this.setCount(0, await this.getCount(0) + 1);
  }

  async removeLastData(): Promise<void> {
    if(this.historyCount) {
      await this.table("history").delete(this.historyCount--);
      await this.setCount(0, await this.getCount(0) - 1);
    }
  }

  async modifyData(id: number, d: Date, pr: number, pl: string): Promise<void> {
    await this.table("history").update(id, {
      date: d,
      price: pr,
      place: pl
    })
  }

  // Observables Functions
  updateCounter(newCount: number): void { this._counter.next(newCount); }
  updateHistory(data: ThaiTeaData): void { this._history.next(data); }
}