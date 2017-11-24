import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule, NavController, ViewController } from "ionic-angular";
import { By } from "@angular/platform-browser";
import { ViewControllerMock, NavControllerMock } from "ionic-mocks";

import { MyApp } from "../../app/app.component";
import { MasterListPage } from "./master-list";
import { CityInfoServiceProvider } from "../../providers/city-info-service/city-info-service";
import { PointOfInterestCard } from "../../models/point-of-interest-card";

describe('Page: Master List', () => {
  let component: MasterListPage;
  let fixture: ComponentFixture<MasterListPage>;
  let firstPointOfInterest: PointOfInterestCard;
  let debugCardElement: any;
  let cardElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyApp, MasterListPage ],
      providers: [
        { provide: CityInfoServiceProvider, useClass: CityInfoServiceMock },
        { provide: ViewController, useFactory: () => ViewControllerMock.instance() },
        { provide: NavController, useFactory: () => NavControllerMock.instance() }
      ],
      imports: [ IonicModule.forRoot(MyApp) ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterListPage);
    component = fixture.componentInstance;

    let cityInfoService = fixture.debugElement.injector.get(CityInfoServiceProvider);
    firstPointOfInterest = cityInfoService.pointOfInterestCards[0];
    component.ionViewDidLoad();
    fixture.detectChanges();

    debugCardElement = fixture.debugElement.query(By.css('ion-card'));
    cardElement = debugCardElement.nativeElement;
  });

  it('displays destinations containing a title, photo and description', () => {
    let photoElement = fixture.debugElement.query(By.css('img');

    expect(cardElement.textContent).toContain(firstPointOfInterest.title);
    expect(cardElement.textContent).toContain(firstPointOfInterest.shortDescription);
    expect(photoElement.properties.src).toContain(firstPointOfInterest.photo);
  });

  //TODO: broken test - doesn't trigger click
  // it('should have a clickable card', async(() => {
  //   spyOn(component, 'openPage');
  //   cardElement.click();
  //   fixture.detectChanges();
  //
  //   fixture.whenStable().then(() => {
  //     expect(component.openPage).toHaveBeenCalledWith(firstPointOfInterest);
  //   });
  // }));

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
