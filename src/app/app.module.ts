import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayMapComponent } from './display-map/display-map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMapComponent,
 
    
  ],
  imports: [
 
    BrowserModule,
    BrowserAnimationsModule,
    

    NgxMapboxGLModule.withConfig({
      accessToken:'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

