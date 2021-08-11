import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdService } from 'src/app/car-ad.service';
import { LocalStorage } from 'src/app/core/injection-tokens';
import { carAd } from 'src/app/models/car-ad.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  carAdId: string | undefined;
  currentCarAd: carAd | undefined;
  adPosterPhoneNum: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private carAdService: CarAdService,
    private userService: UserService,
    @Inject(LocalStorage) private localStorage: Window['localStorage']
    ) { }

  loggedInUserId: number = Number(this.localStorage.getItem('userId'));

  get isUserLogged(){
    return this.userService.isUserLogged();
  }

  get currentIdOfUser(){
    return this.loggedInUserId;
  }

  ngOnInit(): void {
    this.carAdId = this.activatedRoute.snapshot.params.id;
    this.currentCarAd = this.carAdService.getCarById(Number(this.carAdId));
    if(this.currentCarAd == null){
      this.router.navigate(['/browse'])
    }
    else{
      this.adPosterPhoneNum = this.userService.findPhoneNumById(this.currentCarAd!.getPosterId());
    }
  }

  deleteAnAd(){
    this.carAdService.deleteAnAd(Number(this.carAdId));
    this.router.navigate(['browse'])
  }

}
