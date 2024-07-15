import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemModel } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-card-medium',
  templateUrl: './card-medium.component.html',
  styleUrls: ['./card-medium.component.css']
})
export class CardMediumComponent {
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
  this.router.navigate (['/','info'])
}
hide($event: any): void{
  //Alert
  alert("ocultar")
}
}