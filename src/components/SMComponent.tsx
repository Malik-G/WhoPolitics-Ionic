import React, { Component, useState, useEffect } from 'react';
import './ExploreContainer.css';
import './SM-assets/mapdata.js';
import './SM-assets/usmap.js';

// const SMComponent = () => {
//   //Experiment using hooks
// }

class SMComponent extends Component {
  componentDidMount() {
    //this.addScripts('./SM-assets/mapdata.js', './SM-assets/usmap.js');
  }

  // addScripts = (script1, script2) => {
  //   const scriptOne = document.createElement("script");
  //   const scriptTwo = document.createElement("script");
  //   scriptOne.src = script1;
  //   scriptTwo.src = script2;
  //   scriptOne.async = true;
  //   scriptTwo.async = true;
  //   document.body.appendChild(scriptOne);
  //   document.body.appendChild(scriptTwo);
  // }

  render() {
    return (
      <>
        <h1>SimpleMaps</h1>
        
        <div id="map"></div>
        <p>This map was created and can be edited at <a href="http://simplemaps.com/custom/us/TXYjv2qu">http://simplemaps.com/custom/us/TXYjv2qu</a></p>
        <p>To learn how to install this map on your web page, see the <a href="http://simplemaps.com/docs">Documentation</a>.</p>
        <script src='./SM-assets/usmap.js'></script>
        <script src='./SM-assets/mapdata.js'></script>
      </>
    );
  }
}


export default SMComponent;