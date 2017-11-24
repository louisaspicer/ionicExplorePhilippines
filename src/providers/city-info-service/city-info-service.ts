import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

import { API_KEY } from "../../../api-key";
import { PointOfInterestCard } from "../../models/point-of-interest-card";

@Injectable()
export class CityInfoServiceProvider {
  public pointOfInterestCards: PointOfInterestCard[] = [];
  private api_key: string = API_KEY;
  private START_POINT_NUMBER = 3;
  private pointsOfInterestApiUrl = 'https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-circle?apikey=' +
  `${this.api_key}&latitude=14.5547&longitude=121.0244&radius=10000&number_of_images=4&number_of_results=20`;

  constructor(public http: Http) {}

  load(): void {
    if (this.pointOfInterestCards.length != 0) {
      return;
    }

    this.http
      .get(this.pointsOfInterestApiUrl)
      .map(res => res.json())
      .subscribe(data => {
        let places = data.points_of_interest.slice(this.START_POINT_NUMBER);

        for(let i = 0; i < places.length; i++) {
          let place = places[i];
          this.addPointsOfInterestsAsCards(place);
        }}, error => { console.log(error) }
      );
  };

  private addPointsOfInterestsAsCards(place): void {
    this.pointOfInterestCards.push(
      {
        title: place.title,
        photo: place.main_image,
        shortDescription: place.details.short_description,
        longDescription: place.details.description
      }
    );
  }
}
