import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  title: string;
  photo: string;
  description: string;

  constructor(
    public navParams: NavParams
  ) {
    this.title = this.navParams.get('title');
    this.photo = this.navParams.get('photo');
    this.description = this.navParams.get('longDescription');
  }

}
