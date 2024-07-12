import { Component } from '@angular/core';
import * as dataRaw from "./../../data/movies.json" // Importar archivos Json
import { ItemModel } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movieList: Array<ItemModel> = [];

  constructor(){}

  ngOnInit(){
    const {data}: any = (dataRaw as any).default;
    this.movieList = data;
  }
}
