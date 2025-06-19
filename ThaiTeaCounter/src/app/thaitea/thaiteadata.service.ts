import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ThaiTeaData } from './thaiteadata';

@Injectable({
  providedIn: 'root'
})
export class ThaiTeaDataService {
  history: ThaiTeaData[] = [];
  test: string = "06_09_25-12_00-6.50-Tapioca_Express+"
              + "06_11_25-14_30-8.75-Vanitea+";

  constructor(private cookieService: CookieService) {
    // Check if cookie exists, if not create one
    if(!this.cookieService.check("thaiTeaHistory")) {
      this.cookieService.set("thaiTeaHistory", this.test);
    }

    // Reload cookie history val into class history val
    this.history = this.toThaiTeaData(this.cookieService.get("thaiTeaHistory"));
  }

  // Convert cookie string to ThaiTeaData array
  toThaiTeaData(cookieString: string): ThaiTeaData[] {
    const data: ThaiTeaData[] = [];
    if (cookieString) {
      const entries = cookieString.split('+');
      for (const entry of entries) {
        const [date, time, price, place] = entry.split('-');
        if (date && time && price && place) {
          data.push({
            date: date.trim(),
            time: time.trim(),
            price: parseFloat(price.trim()),
            place: place.trim()
          });
        }
      }
    }
    return data;
  }

  // Convert ThaiTeaData array to cookie string
  toString(data: ThaiTeaData[]): string {
    return data.map(item => `${item.date}-${item.time}-${item.price}-${item.place}`).join('+') + '+';
  }
}
