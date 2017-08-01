import { Subject } from "rxjs/Subject";

export class TrackingService {
    
    eventOccured = new Subject();

    private data = {
        clickTimes: 0
    }

    allStorageValues() {
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        console.log(values)
        return values;
    }
    
    pullFromLocalStorage(obj) {
        // this.data = JSON.parse(localStorage.getItem())
        
    }

    toLocalStorageFromObj = function(obj) {
        let keysArray = Object.keys(obj)
        keysArray.map(el => {
            localStorage.setItem(el, obj[`${el}`])
        })
    }

    getData() {
        return this.data;
    }

    
}