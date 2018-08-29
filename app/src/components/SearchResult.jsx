import React, { Component } from 'react';
import token from '../../config.js';
import mapboxgl from 'mapbox-gl';

// const URL = `https://api2.terravion.com/users/${token.UserID}/15/5290/20191.png?epochStart=${epochStart}&epochEnd=1456632627&access_token=${token.AccessToken}&product=${token.ProductCode}`;

// const url = `https://www.youtube.com/embed/${videoId}`;

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -121.877271,
      lat: 38.54058,
      zoom: 15
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const { epochStart, epochEnd } = this.props;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });
   
    map.on('load', function() {
      map.addLayer({
        id: 'terravion-layer-key',
        type: 'raster',
        source: {
          type: 'raster',

          tiles: [
            `https://api2.terravion.com/users/${
              token.UserID
            }/15/5290/20191.png?epochStart=${epochStart}&epochEnd=${epochEnd}&access_token=${
              token.AccessToken
            }&product=${token.ProductCode}`,
            `https://api.terravion.com/v1/users/${
              token.UserID
            }/layers/tiles/{z}/{x}/{y}.png?epochStart=${epochStart}&epochEnd=${epochEnd}&product=NC&access_token=${
              token.AccessToken
            }`
          ]
        }
      });
    });

    // map.on('move', () => {
    //   const { lng, lat } = map.getCenter();

    //   this.setState({
    //     lng: lng.toFixed(4),
    //     lat: lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   });
    // });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </div>
    );
  }
}

export default SearchResult;
