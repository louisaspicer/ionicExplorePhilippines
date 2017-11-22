import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-master-list',
  templateUrl: 'master-list.html'
})
export class MasterListPage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, private view: ViewController) {}

  ionViewWillEnter() {
    this.view.showBackButton(false);
  }
}
