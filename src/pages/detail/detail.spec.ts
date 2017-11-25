import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavController, NavParams, ViewController } from "ionic-angular";
import { By } from "@angular/platform-browser";
import { ViewControllerMock, NavControllerMock } from "ionic-mocks";

import { MyApp } from "../../app/app.component";
import { PointOfInterestCard } from "../../models/point-of-interest-card";
import { DetailPage } from "./detail";

describe('Page: Detail', () => {
  let component: DetailPage;
  let fixture: ComponentFixture<DetailPage>;
  let debugCardElement: any;
  let cardElement: any;

  let pointOfInterestCard: PointOfInterestCard = {
    title: "A Place",
    photo: "http://example.com/img.jpg",
    shortDescription: "This is the place",
    longDescription: "This is the place where dreams come true"
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApp, DetailPage ],
      providers: [
        { provide: ViewController, useFactory: () => ViewControllerMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() },
        { provide: NavParams, useClass: NavParamsMock},
      ],
      imports: [ IonicModule.forRoot(MyApp) ]
    }).compileComponents();
  }));

  beforeEach(() => {
    NavParamsMock.setParams(pointOfInterestCard);
    fixture = TestBed.createComponent(DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugCardElement = fixture.debugElement.query(By.css('ion-card'));
    cardElement = debugCardElement.nativeElement;
  });

  it('displays passed in destination containing a title, photo and long description', () => {
    let photoElement = fixture.debugElement.query(By.css('img'));
    let titleElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;

    expect(titleElement.textContent).toContain('Destination');
    expect(cardElement.textContent).toContain(pointOfInterestCard.longDescription);
    expect(photoElement.properties.src).toContain(pointOfInterestCard.photo);
  });

});

export class NavParamsMock {
  static returnParam = null;
  public get(key: any): any {
    if (NavParamsMock.returnParam) {
      return NavParamsMock.returnParam[key];
    }
    return 'default';
  }
  static setParams(value){
    NavParamsMock.returnParam = value;
  }
}
