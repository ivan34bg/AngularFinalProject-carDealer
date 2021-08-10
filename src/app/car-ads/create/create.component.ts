import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarAdService } from 'src/app/car-ad.service';
import { carAd } from 'src/app/models/car-ad.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private carAdService: CarAdService) { }

  onSubmit(form: NgForm){
    if(form.valid){
      let isNew: boolean
      if(form.value.isNew === 'yes'){
        isNew = true;
      }
      else{
        isNew = false;
      }
      this.carAdService.submitNewAd(form.value.imageLink, form.value.brandInput, form.value.modelInput, form.value.yearInput, form.value.mileageInput, form.value.powerInput, form.value.priceInput, isNew, form.value.locationInput, form.value.descriptionInput);
    }
  }
}
