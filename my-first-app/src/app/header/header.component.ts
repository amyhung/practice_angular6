import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
    //styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    @Output() switchedTab = new EventEmitter<string>();

    constructor(private dataStorageService: DataStorageService) {

    }

    ngOnInit() {
    }

    onSaveData() {
        console.log('save data to backend');
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    // onSwitchTab(clickTabName: string) {        
    //     console.log('clickTabName is ' + clickTabName);
    //     this.switchedTab.emit(clickTabName);
    // }

}