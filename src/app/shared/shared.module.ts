import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ]
})
export class SharedModule { }
