import { Component, Input } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() item: ItemModel = {
    _id: 0,
    name: "string",
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
}
}
