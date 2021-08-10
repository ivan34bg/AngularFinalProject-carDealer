import { Component, OnInit } from '@angular/core';
import { CarAdService } from 'src/app/car-ad.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent{

  constructor(private carAdService: CarAdService) { }
  carAds = this.carAdService.localCarAds;
}
