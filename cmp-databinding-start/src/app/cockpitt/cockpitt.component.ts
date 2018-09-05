import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpitt',
  templateUrl: './cockpitt.component.html',
  styleUrls: ['./cockpitt.component.css']
})
export class CockpittComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() buleprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('contentInput') contentInput: ElementRef;

  //newServerName = '';
  //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverInput: HTMLInputElement) {    
    console.log(this.contentInput.nativeElement.value);
    this.serverCreated.emit({ serverName: serverInput.value, serverContent: this.contentInput.nativeElement.value });
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.buleprintCreated.emit({ serverName: serverInput.value, serverContent: this.contentInput.nativeElement.value });
  }

}
