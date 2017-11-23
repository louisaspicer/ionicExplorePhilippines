import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CityInfoServiceProvider } from "../../providers/city-info-service/city-info-service";
import { PointOfInterestCard } from "../../models/point-of-interest-card";

@Component({
  selector: 'page-master-list',
  templateUrl: 'master-list.html'
})
export class MasterListPage {
  pages: Array<{title: string, component: any}>;
  pointOfInterestCards: PointOfInterestCard[];

  constructor(private view: ViewController, public cityInfoService: CityInfoServiceProvider) {}

  ionViewDidLoad() {
    this.cityInfoService.load();
    this.pointOfInterestCards = this.cityInfoService.pointOfInterestCards;
  }

  ionViewWillEnter() {
    this.view.showBackButton(false);
  }

}
