import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsComponent } from './sports.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsComponent,
        CardComponent
      ]
    });
    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
