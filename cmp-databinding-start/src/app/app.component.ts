import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [
    { type: 'server', name: 'app1', content: 'just a test' }
    , { type: 'server', name: 'app2', content: 'just a test 222' }
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    console.log('in onChangeFirst');
    this.serverElements[0].name = 'aaaaa';
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called! app');    
  }

}
