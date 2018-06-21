import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DetailsService } from '../details.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  myData:any[];
  constructor(private router: Router, private dataService: DetailsService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getMyData();
  }

  getMyData(){
    this.dataService.getMyData().subscribe(resp => {
      console.log("data from ajax call - ", resp);
      this.dataService.myContactData = resp.results;
      this.myData = resp.results;
    });
  }

  seeDetails(idx){
    console.log(idx);
    this.router.navigate(['/viewListDetails',idx]);
  }
}
