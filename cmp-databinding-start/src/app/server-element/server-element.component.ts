import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // �M�w�O�_�n�� angular �b html tag �W�[�W�ߤ@�ѧO attribute
  // �D�n�O���F�Ϲj�b�U�� component �W�� html tag
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
