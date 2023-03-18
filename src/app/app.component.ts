import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  mapa!: Mapboxgl.Map;

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: [79.3547598, 13.6278095], // starting position
      zoom: 9, // starting zoom

      pitch: 45,
      bearing: -17.6,
      antialias: true,
    });
    this.createMarker(79.3547598, 13.6278095);
  }

  createMarker(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    marker.on('drag', () => {
      console.log(marker.getLngLat());
    });
  }
}
