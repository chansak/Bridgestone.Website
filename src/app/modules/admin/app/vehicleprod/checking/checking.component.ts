import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import {CheckingService} from '@module/admin/app/vehicleprod/checking/checking.service';
import { SignalrService } from '@core/signalr/signalr.service';
import {uploadFileSteps} from '@core/models/uploadFileSteps';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css'],
})
export class CheckingComponent implements OnInit {
  @ViewChild('horizontalStepper') stepper: MatStepper;

  data:string[]=[];
  id:string;
  connectionId:string;
  refreshTime:number=3000;
  interval:any;
  fileDetail:any;
  showSpinner:boolean;
  constructor(
    private route: ActivatedRoute,
    private checkingService:CheckingService,
    private signalRService: SignalrService, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.checkingService.getData(this.id).subscribe((response)=>{
      this.data = response;
    });
    this.signalRService.startConnection().then((connectionId:string)=>{
      this.connectionId = connectionId;
      console.log(this.connectionId);
      this.interval = setInterval(()=>{
        this.showSpinner=true;
          this.signalRService.getConnection().invoke('UploadFileTracking',this.id, this.connectionId).catch(err => console.error(err));
      }, this.refreshTime);
    }).catch(err => {});
    
    this.signalRService.connection.on('UploadFileTracking', (data: any) => {
      this.fileDetail = data;
      console.log(this.fileDetail);
      let status = parseInt(data.statusId);
      if(status == uploadFileSteps.Done){
        this.signalRService.getConnection().stop();
        clearInterval(this.interval);
        this.showSpinner=false;
      }else{
        this.stepper.reset();
        var btnStep1 = document.getElementById('step1') as HTMLElement;
        var btnStep2 = document.getElementById('step2') as HTMLElement;
        var btnStep3 = document.getElementById('step3') as HTMLElement;
        var btnStep4 = document.getElementById('step4') as HTMLElement;
        var btnStep5 = document.getElementById('step5') as HTMLElement;
        var btnStep6 = document.getElementById('step6') as HTMLElement;
        while(this.stepper.selectedIndex < status)
        {
          switch(data.statusId){
            case 1:{
              btnStep1.click();
              break;
            }
            case 2:{
              btnStep2.click();
              break;
            }
            case 3:{
              btnStep3.click();
              break;
            }
            case 4:{
              btnStep4.click();
              break;
            }
            case 5:{
              btnStep5.click();
              break;
            }
            case 6:{
              break;
            }
          }
        }
    }
    });
  }
}
