import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DetailsService } from '../details.service';

@Component({
  selector: 'app-view-list-details',
  templateUrl: './view-list-details.component.html',
  styleUrls: ['./view-list-details.component.css']
})
export class ViewListDetailsComponent implements OnInit {

  showData = true;
  listDetailsData:any;
  constructor(private _route: ActivatedRoute, private dataService: DetailsService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get("id");
    console.log("index is - ", id);
    if(id != null && id != undefined){
      this.getContactData(id);
    }else{
      this.showData = false;
    }
  }

  getContactData(id){
    let contactData = this.dataService.getContact(id);
    if(contactData){
      this.listDetailsData = contactData;
      console.log("list data - ", this.listDetailsData);
    }else{
      this.showData = false;
    }
  }
}
