import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalrService } from '@core/signalr/signalr.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
// export class AppComponent
// {
//     /**
//      * Constructor
//      */
//     constructor()
//     {
//     }
// }

export class AppComponent implements OnInit {
    constructor(private signalRService: SignalrService, private http: HttpClient) {
  
    }
    ngOnInit(): void {
      // this.signalRService.startConnection()
      //   .then(result => {
      //       //do somethings after connect started
      //   })
      //   .catch(err => {
      //       console.log(err);
      //   });
        
        // this.signalRService.connection.on('PushMessage', (result: any) => {
        //   console.log(result);
        // });
    }
  }
