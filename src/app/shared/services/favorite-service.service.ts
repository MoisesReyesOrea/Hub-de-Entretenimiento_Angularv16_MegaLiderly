import { Injectable } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  private favoriteList: Array<ItemModel> = [];

  setSelectedItem(itemFavorite: any) {
    // this.favoriteItem = itemFavorite;
    // this.addFavorite();
    this.favoriteList.push(itemFavorite)
    // console.log(this.favoriteList);
  }

  getSelectedItemList() {
    return this.favoriteList;
  }

  constructor() { }
}

