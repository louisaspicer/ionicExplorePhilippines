import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, ViewController } from "ionic-angular";
import { By } from "@angular/platform-browser";
import { ViewControllerMock } from "ionic-mocks";

import { MyApp } from "../../app/app.component";
import { MasterListPage } from "./master-list";
import { CityInfoServiceProvider } from "../../providers/city-info-service/city-info-service";
import { PointOfInterestCard } from "../../models/point-of-interest-card";

describe('Page: Master List', () => {
  let component: MasterListPage;
  let fixture: ComponentFixture<MasterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApp, MasterListPage ],
      providers: [
        { provide: CityInfoServiceProvider, useClass: CityInfoServiceMock },
        { provide: ViewController, useFactory: () => ViewControllerMock.instance() }
      ],
      imports: [ IonicModule.forRoot(MyApp) ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterListPage);
    component = fixture.componentInstance;
  });

  it('displays destinations containing a title, photo and description', () => {
    let cityInfoService = fixture.debugElement.injector.get(CityInfoServiceProvider);
    let firstPointOfInterest = cityInfoService.pointOfInterestCards[0];
    component.ionViewDidLoad();
    fixture.detectChanges();

    let cardElement = fixture.debugElement.query(By.css('ion-card')).nativeElement;
    let photoElement = fixture.debugElement.query(By.css('img');

    expect(cardElement.textContent).toContain(firstPointOfInterest.title);
    expect(cardElement.textContent).toContain(firstPointOfInterest.shortDescription);
    expect(photoElement.properties.src).toContain('http://example.com/img.jpg');
  });

});

export class CityInfoServiceMock {

  public pointOfInterestCards: PointOfInterestCard[] = [{
    title: "A Place",
    photo: "http://example.com/img.jpg",
    shortDescription: "This is the place",
    longDescription: "This is the place where dreams come true"
  }];

  public load(): void {};
}
