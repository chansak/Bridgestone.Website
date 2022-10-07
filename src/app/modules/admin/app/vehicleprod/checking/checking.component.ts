import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CheckingService} from '@module/admin/app/vehicleprod/checking/checking.service';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html'
})
export class CheckingComponent implements OnInit {
  data:any;
  id:string;
  constructor(private route: ActivatedRoute,private checkingService:CheckingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.checkingService.getData(this.id).subscribe((response)=>{
      this.data = response;
    });
  }
}
