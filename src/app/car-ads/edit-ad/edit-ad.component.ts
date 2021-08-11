import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarAdService } from 'src/app/car-ad.service';
import { carAd } from 'src/app/models/car-ad.model';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.scss']
})
export class EditAdComponent implements OnInit {
  
  currentAdId: string | undefined;
  currentAd: carAd | undefined;

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private carAdService: CarAdService ) { }

  ngOnInit(): void {
    this.currentAdId =  this.activatedRoute.parent?.snapshot.params.id;
    this.currentAd = this.carAdService.getCarById(Number(this.currentAdId));
    if(this.currentAd == null){
      this.router.navigate(['browse'])
    }
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.carAdService.editOldAd(
        form.value.imageLink, 
        form.value.brandInput, 
        form.value.modelInput, 
        form.value.yearInput, 
        form.value.mileageInput, 
        form.value.powerInput, 
        form.value.priceInput, 
        form.value.descriptionInput, 
        form.value.locationInput, 
        Number(this.currentAdId)
      );
      this.router.navigate([`details/${this.currentAdId}`])
    }
  }
}
