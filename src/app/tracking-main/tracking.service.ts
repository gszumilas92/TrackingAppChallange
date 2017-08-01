import { Subject } from "rxjs/Subject";
import { HostListener } from '@angular/core';

export class TrackingService {
    
//    eventChanged = new Subject();

    private mouseDown : boolean = false;
    private data = {}

    @HostListener('mouseup')
    onMouseup() {
        this.mouseDown = false;
    }
    
    @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        this.mouseDown = true;
        console.log("mousedown")
    }

    toLocalStorageFromObj = function(obj) {
        let keysArray = Object.keys(obj)
        keysArray.map(el => {
            localStorage.setItem(el, obj[`${el}`])
        })
    }

}