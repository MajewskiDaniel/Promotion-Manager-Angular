import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private localStorage: any;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string) {
    try {
      return JSON.parse(this.localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  }

  set(key: string, value) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }
}
