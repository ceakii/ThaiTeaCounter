import { Injectable } from '@angular/core';
import { ThaiTeaData } from './thaiteadata';
import { Dexie, Table } from "dexie";

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  history!: Table<ThaiTeaData, number>;

  constructor() {
    super('ThaiTeaDB');

    this.version(1).stores({
      counter: '++id, value',
      history: '++id, date, time, price, place'
    });

    this.open()
      .then(data => console.log('Database opened successfully', data))
      .catch(err => console.log(err.message));
  }
}