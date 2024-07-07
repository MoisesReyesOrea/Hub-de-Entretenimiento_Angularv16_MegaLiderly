import { Component } from '@angular/core';
import { itemList } from './item.mock';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // titulo: string = "Interestelar";
  // descripcion: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt provident consequuntur optio sed ipsa nobis minus autem aut ipsum quas veritatis commodi fugit ducimus ad accusamus asperiores, architecto a facilis";
  itemList = itemList;
}
