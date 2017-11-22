import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { MenuComponent } from "./menu.component";

describe('Menu Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        IonicModule.forRoot(MenuComponent)
      ],
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(2);
  });

});
