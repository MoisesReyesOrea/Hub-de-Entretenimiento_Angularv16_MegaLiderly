import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private selectedItem: any;

  setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  getSelectedItem() {
    return this.selectedItem;
  }

  constructor() { }
}
