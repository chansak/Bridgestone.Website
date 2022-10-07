import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import {MatCard} from '@angular/material/card'
import {CheckingService} from '@module/admin/app/vehicleprod/checking/checking.service';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css'],
})
export class CheckingComponent implements OnInit,AfterViewInit {
  data:any;
  id:string;
  constructor(
    private route: ActivatedRoute,
    private checkingService:CheckingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.checkingService.getData(this.id).subscribe((response)=>{
      this.data = response;
    });
  }
  @ViewChild('horizontalStepper') stepper: MatStepper;
  ngAfterViewInit() {
    setTimeout(()=>{
      console.log(this.stepper.selectedIndex);
      let index=0;
      let status =3;
      this.stepper.selectedIndex=0;
      while(this.stepper.selectedIndex <status){
        this.stepper.next();
        index++;
      }
    },0);
  }
}
