import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  isActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(){
    if(!this.isActive){
      console.log('added')
    }
    if(this.isActive){
      console.log('removed')
    }
    this.isActive = !this.isActive
  }
}
