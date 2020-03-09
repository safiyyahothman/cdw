import { AfterContentInit, Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { analytics } from 'firebase';
declare var google;

@Component({
  selector: 'app-recyclingcentre',
  templateUrl: './recyclingcentre.page.html',
  styleUrls: ['./recyclingcentre.page.scss'],
})
export class RecyclingcentrePage implements OnInit /*, AfterViewInit */{
  latitude: any;
  longitude: any;
  @ViewChild('mapElement',{static: false}) mapNativeElement: ElementRef;

  constructor(private recyclingcentre: RecyclingcentrePage) { }

  ngOnInit() {
  }
/** 
  ngAfterViewInit(): void {
    this.recyclingcentre.getCurrentPosition().then( onfulfilled,(resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement,{
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
      });
      const infoWindow = new google.maps.infoWindow;
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found');
      infoWindow.open(map);
      map.setCenter(pos);
  }).catch( onrejected, (error) => {
    console.log('Error getting location', error);
  });
}
  getCurrentPosition() {
    throw new Error("Method not implemented.");
  }
}**/

}