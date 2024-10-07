import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVybmFuZGFudW5lemUiLCJhIjoiY20xejRsaWc3MDMyNjJpcHp2cmtxMnhmOSJ9.3b8KzYZVozkq0gaJPjKJJw';

if(!navigator.geolocation){
  alert('Tu navegador no tiene la opción de Geolocation')
  throw new Error('Tu navegador no tiene la opción de Geolocation')
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>
);

