import { Component } from '@angular/core';
import { MenuController, NavController, ViewController } from 'ionic-angular';
import { CityInfoServiceProvider } from "../../providers/city-info-service/city-info-service";
import { PointOfInterestCard } from "../../models/point-of-interest-card";
import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-master-list',
  templateUrl: 'master-list.html'
})
export class MasterListPage {
  pointOfInterestCards: PointOfInterestCard[];

  constructor(
    public view: ViewController,
    public navController: NavController,
    public cityInfoService: CityInfoServiceProvider,
    private menu: MenuController
  ) {}

  ionViewDidLoad() {
    this.pointOfInterestCards = this.cityInfoService.pointOfInterestCards;
  }

  ionViewWillEnter() {
    this.view.showBackButton(false);
    this.menu.swipeEnable(true);
  }

  openPage(pointOfInterest: PointOfInterestCard) {
    this.navController.push(DetailPage, pointOfInterest)
  }

}
