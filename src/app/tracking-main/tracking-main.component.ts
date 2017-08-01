import { Component, OnInit, HostListener } from '@angular/core';
import { TrackingService } from "./tracking.service";

@Component({
  selector: 'app-tracking-main',
  templateUrl: './tracking-main.component.html',
  styleUrls: ['./tracking-main.component.css']
})
export class TrackingMainComponent implements OnInit {

  constructor(private tracking: TrackingService) { }


  private data = {
      clickTimes : 0
  }

  
  private mouseDown : boolean = false;


    // @ViewChild('canvas') 
    // canvas: ElementRef;

    // private scene: Scene;
    // private last: MouseEvent;
    // private el: HTMLElement;



    @HostListener('mouseup')
    onMouseup() {
        this.mouseDown = false;
        this.tracking.eventOccured.next()
    }
    
    @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        this.mouseDown = true;
        this.data.clickTimes+= 1;
        this.tracking.eventOccured.next()
    }

    getDataFromService() {
      this.data = this.tracking.getData()
    }


  ngOnInit() {
    
    this.tracking.allStorageValues()

    this.getDataFromService()
    
    //console.log(this.data.clickTimes)    
    // localStorage.setItem("test","test")



  }



  

}
