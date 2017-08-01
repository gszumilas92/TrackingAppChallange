import { Component, OnInit } from '@angular/core';
import { TrackingService } from "./tracking.service";

@Component({
  selector: 'app-tracking-main',
  templateUrl: './tracking-main.component.html',
  styleUrls: ['./tracking-main.component.css']
})
export class TrackingMainComponent implements OnInit {

  constructor(private tracking: TrackingService) { }

  private clickTimes : number = 5;
  


    // @ViewChild('canvas') 
    // canvas: ElementRef;

    // private scene: Scene;
    // private last: MouseEvent;
    // private el: HTMLElement;




    // @HostListener('mousemove', ['$event'])
    // onMousemove(event: MouseEvent) {
    //     if(this.mouseDown) {
    //        this.scene.rotate(
    //           event.clientX - this.last.clientX,
    //           event.clientY - this.last.clientY
    //        );
    //        this.last = event;
    //     }
    // }



    // constructor(elementRef: ElementRef, scene: Scene) {
    //     this.el = elementRef.nativeElement;
    //     this.scene = scene;
    // }

  ngOnInit() {
    
    
    
  }



  

}
