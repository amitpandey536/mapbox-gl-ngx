import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MapboxGeoJSONFeature, MapLayerMouseEvent, AnyLayout} from 'mapbox-gl';
import Geojson from '../earthquakes.geo.json'


@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.css']
})
export class DisplayMapComponent {
  @ViewChild('marker',{static:true}) marker :ElementRef ;
 
 
  isShowDivIf = false;
  isShowClusterDivIf = false;
 
 
 
  earthquakes:GeoJSON.FeatureCollection<GeoJSON.Point> | any;        //interface to select the geojson points
  
  // selectedPoint: MapboxGeoJSONFeature | null;
  selectedPoint : { geometry: GeoJSON.Point; properties: any };
  // cursorStyle: any;
  
  
  // layouts: { [key: string]: AnyLayout } = {
  //   clusters: {
  //     visibility: 'visible'
  //   }
  // };
  
  
  selectedcluster: { geometry: any; properties: any; };
   

constructor(){
  
  this.earthquakes = Geojson
  
}
// onClick(evt: MapLayerMouseEvent) {
//   this.selectedPoint = evt.features[0];
// }

onClick(event: MouseEvent, feature: any) {
  // event.stopPropagation(); // This is needed, otherwise the popup will close immediately
  // Change the ref, to trigger mgl-popup onChanges (when the user click on the same cluster)
  this.selectedPoint  = { geometry: feature.geometry, properties: feature.properties };
}
onClickCluster(event: MouseEvent, feature: any) {
  event.stopPropagation(); // This is needed, otherwise the popup will close immediately
  // Change the ref, to trigger mgl-popup onChanges (when the user click on the same cluster)
  this.selectedcluster  = { geometry: feature.geometry, properties: feature.properties };
}
onRemove() {
;
  this.isShowDivIf = !this.isShowDivIf;
  this.selectedPoint
  console.log('point removed');
  

}

onRemoveCluster() {
 
  this.isShowClusterDivIf =!this.isShowClusterDivIf;
console.log('layer removed')
}




}