import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import {CheckingService} from '@module/admin/app/vehicleprod/checking/checking.service';
import { SignalrService } from '@core/signalr/signalr.service';
import {uploadFileSteps} from '@core/models/uploadFileSteps';
import {SharedService} from '@core/shared/shared.service';

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
  showFileDetail:boolean;
  showSpinner:boolean;
  showLoading:boolean;
  constructor(
    private route: ActivatedRoute,
    private checkingService:CheckingService,
    private signalRService: SignalrService, 
    private sharedServices: SharedService,
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
      try
      {
        let status = parseInt(data.statusId);
        this.stepper.reset();
        if(status == uploadFileSteps.Done){
          this.signalRService.getConnection().stop();
          clearInterval(this.interval);
          this.showSpinner=false;
          this.showLoading=false;
        }else{
          this.showLoading = true;
          this.showSpinner = true;
          if((status == uploadFileSteps.HeaderValidation ||status == uploadFileSteps.DataValidation) && this.data.length>0)
          {
            this.showSpinner=false;
            this.showLoading=false;
          }
        }
        for(var step=0;step<status;step++){
          this.stepper.next();
        }
      }catch{}finally{
        this.fileDetail = data;
      }
    });
  }
}
