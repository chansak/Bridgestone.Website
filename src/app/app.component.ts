import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalrService } from 'src/app/core/services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private signalRService: SignalrService, private http: HttpClient) {

  }
  ngOnInit(): void {
    this.signalRService.startConnection().then(result => {
      //do somethings when the connection has been started.
    })
      .catch(err => {
        console.log(err);
      });
      //add listener
      this.signalRService.connection.on('PushMessage', (result: any) => {
        console.log(result);
      });
  }
}
