import { Injectable } from '@angular/core';
import { ThaiTeaData } from './thaiteadata';  // Should I keep the interface?
import { Dexie, Table } from "dexie";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  private _counter = new BehaviorSubject(0);
  public counter$ = this._counter.asObservable();

  constructor() {
    super('ThaiTeaDB');

    this.version(1).stores({
      counter: 'id, count',
      history: '++id, date, time, price, place'
    });

    this.open()
      .then(() => console.log('Database opened successfully'))
      .catch(err => console.log(err.message));
    this.initializeCounter();
  }

  async initializeCounter(): Promise<void> {
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

  updateCounter(newCount: number) {
    this._counter.next(newCount);
  }
}