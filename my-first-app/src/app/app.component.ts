import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit {

  labelText = '';
  currentTab: string;

  onTest() {
    this.labelText = 'This is a test aaa.';
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC5x0SQPfJhzTLFQRFXqeA73PMYsAR3-es",
      authDomain: "practiceangular6.firebaseapp.com"
    });
  }

  constructor(private loggingService: LoggingService) {
    this.loggingService.log('app.component constructor');
    this.currentTab = 'recipe';
  }

  switchTab(tabName: string) {
    this.loggingService.log('app.switchTab - ' + tabName);
    this.currentTab = tabName;
  }

}
