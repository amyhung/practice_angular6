import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {

  labelText = '';
  currentTab: string;
  onTest() {
    this.labelText = 'This is a test aaa.';
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
