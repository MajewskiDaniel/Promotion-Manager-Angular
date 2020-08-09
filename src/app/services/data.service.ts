import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}

  saveData(step: string, data: any) {
    window.localStorage.setItem(step, JSON.stringify(data));
  }
  loadData(step: string) {
    return JSON.parse(window.localStorage.getItem(step));
  }
}
