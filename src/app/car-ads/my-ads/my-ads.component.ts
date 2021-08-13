import { Component, OnInit } from '@angular/core';
import { CarAdService } from 'src/app/car-ad.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent{

  constructor(private carAdService: CarAdService) { }

  arrOfMyAds = this.carAdService.arrOfMyAds();

}
