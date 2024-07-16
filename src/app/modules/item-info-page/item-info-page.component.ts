import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/core/models/item.model';
import { FavoriteServiceService } from 'src/app/shared/services/favorite-service.service';
import { ItemServiceService } from 'src/app/shared/services/item-service.service';

@Component({
  selector: 'app-item-info-page',
  templateUrl: './item-info-page.component.html',
  styleUrls: ['./item-info-page.component.css']
})
export class ItemInfoPageComponent {
  @Input() item: ItemModel = {
    _id: 0,
    name: "",
    seasons: 0,
    episodes: 0,
    tournament: "",
    year: 0,
    date: "",
    director: "",
    genre: "",
    type: "",
    description: "",
    img: "",
    favorite: false,
    viewed:  false,
    hide: false
}

constructor(private favoriteItem: FavoriteServiceService,private itemService: ItemServiceService, private router: Router){}

ngOnInit() {
  this.item = this.itemService.getSelectedItem();
}

goto($event: any): void {
  this.router.navigate (['/','play'])
  console.log("visto");
  
}
hide($event: any): void{
  //Alert
  console.log("ocultado");
  
  
}

addFavorites(){
  console.log(this.item.name);
  this.favoriteItem.setSelectedItem(this.item);
  // console.log(this.favoriteItem);
  
}
}
