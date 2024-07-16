import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private historyList: Array<ItemModel> = [];

  setSelectedItem(itemhistory: any) {
    // this.historyItem = itemhistory;
    // this.addhistory();
    this.historyList.push(itemhistory)
    // console.log(this.historyList);
  }

  getSelectedItemList() {
    return this.historyList;
  }

  constructor() { }
}
