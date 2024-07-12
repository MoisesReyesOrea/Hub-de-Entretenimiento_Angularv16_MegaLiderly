import { Component, Input } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';

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
}
}
