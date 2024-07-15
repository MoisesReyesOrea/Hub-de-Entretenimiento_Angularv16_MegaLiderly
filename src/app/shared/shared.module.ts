import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

import { MatIconModule } from '@angular/material/icon';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselHeaderComponent } from './components/carousel-header/carousel-header.component';
import { CardMediumComponent } from './components/card-medium/card-medium.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SectionGenericComponent,
    CarouselComponent,
    CarouselHeaderComponent,
    CardMediumComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    SectionGenericComponent,
    CarouselComponent,
    CarouselHeaderComponent,
    CardMediumComponent,
  ]
})
export class SharedModule { }
