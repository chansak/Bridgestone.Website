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
      this.signalRService.connection.invoke("NotifyNewMessage", "test")
        .then(() => { console.log('message sent successfully to hub'); })
        .catch((err) => console.log('error while sending a message to hub: ' + err));
    })
      .catch(err => {
        console.log(err);
      });
      this.signalRService.connection.on('NotifyNewMessage', (result: any) => {
        console.log(result);
      });
  }
}
