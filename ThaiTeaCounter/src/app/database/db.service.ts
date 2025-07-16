import { Injectable } from '@angular/core';
import { ThaiTeaData } from './thaiteadata';  // Should I keep the interface?
import { Dexie } from "dexie";
import { BehaviorSubject, Observable, defer, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  private _counter = new BehaviorSubject(0);
  public counter$ = this._counter.asObservable();
  private _history = new BehaviorSubject<ThaiTeaData[]>([]);
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
    this.getHistoryCount();
    this.updateHistory();
  }

  // #################
  // Counter Functions
  // #################

  // Sets up counter table if no entry exists already
  async initializeCounterTable(): Promise<void> {
    if(await this.table("counter").count() <= 0) {
      console.log("Counter Table not initialized\nCreating new entry for counter");
      this.table("counter").add({id: 0, count: 0});
    }
    console.log("Initialized counter table in Database");

    this.updateCounter(await this.getCount(0));
  }

  // Emit current counter count to subscribers
  updateCounter(newCount: number): void { this._counter.next(newCount); }

  // Counter getter
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

  // Counter setter
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

  // Initializes historyCount var by counting number of data items in history DB
  async getHistoryCount(): Promise<number> {
    this.historyCount = await this.table("history").count();
    return this.historyCount;
  }

  // Returns an observable of the current history store
  getHistory$() {
    this.updateHistory();
    return from(this._history);
  }

  // Emits current history to subscribers
  async updateHistory(): Promise<void> {
    this._history.next(await this.table("history").toArray());
  }

  // Adds data to history store in DB, emits new history to subscribers, and increments counter
  async addData(d: Date, pr: number, pl: string): Promise<void> {
    await this.table("history").add({
      id: ++this.historyCount,
      date: d,
      price: pr,
      place: pl
    })
    this.updateHistory();
    await this.setCount(0, await this.getCount(0) + 1);
  }

  // Removes last data (highest id), emits new history to subscribers, and decrements counter
  async removeLastData(): Promise<void> {
    if(this.historyCount) {
      await this.table("history").delete(this.historyCount--);
      this.updateHistory();
      await this.setCount(0, await this.getCount(0) - 1);
    }
  }

  // Locates and modifies data by ID in DB, then emits new history to subscribers
  async modifyData(id: number, d: Date, pr: number, pl: string): Promise<void> {
    await this.table("history").update(id, {
      date: d,
      price: pr,
      place: pl
    })
    this.updateHistory();
  }
}

export const db = new DbService();