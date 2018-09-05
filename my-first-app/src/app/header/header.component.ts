import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
    //styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    @Output() switchedTab = new EventEmitter<string>();
    
    ngOnInit() {
    }

    // onSwitchTab(clickTabName: string) {        
    //     console.log('clickTabName is ' + clickTabName);
    //     this.switchedTab.emit(clickTabName);
    // }

}