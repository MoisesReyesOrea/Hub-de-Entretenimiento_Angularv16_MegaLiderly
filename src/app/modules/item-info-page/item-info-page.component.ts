import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/core/models/item.model';

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
    viewed:  false
}

constructor(private router: Router){}
goto($event: any): void {
  this.router.navigate (['/','play'])
}
hide($event: any): void{
  //Alert
}

}
