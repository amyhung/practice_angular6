import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // 決定是否要讓 angular 在 html tag 上加上唯一識別 attribute
  // 主要是為了區隔在各個 component 上的 html tag
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragrpah: ElementRef;

  constructor() {
    console.log('constructor is called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called.');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit is called.');
    console.log('element-content:' + this.element.content);
    console.log('Text Content:' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called! server-element, text context:' + this.paragrpah.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is called.');
    console.log('Text Content:' + this.header.nativeElement.textContent);
  }

}
