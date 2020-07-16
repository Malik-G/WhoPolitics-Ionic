import React, { Component, useState, useEffect, Suspense, lazy } from 'react';
import './SM-assets/mapdata.js';
import './SM-assets/usmap.js';

// const SMComponent = () => {
//  useEffect( () =>{
//setTimeout(() => { }, 3000)
// const scriptOne = document.createElement("script");
// const scriptTwo = document.createElement("script");
// scriptOne.src = './assets/mapdata.js';
// scriptTwo.src = './assets/usmap.js';
// scriptOne.async = true;
// scriptTwo.async = true;

// document.head.appendChild(scriptOne);

// document.head.appendChild(scriptTwo);

//   //setTimeout(addOnClick, 1000)
// })

// //addScripts = (script1, script2) => {
//   // const scriptOne = document.createElement("script");
//   // const scriptTwo = document.createElement("script");
//   // scriptOne.src = script1;
//   // scriptTwo.src = script2;
//   // scriptOne.async = true;
//   // scriptTwo.async = true;
//   // document.head.appendChild(scriptOne);
//   // document.head.appendChild(scriptTwo);
//   // this.addOnClick()

// //}

// const addOnClick = () => {
//   let minnesota = document.getElementsByClassName('sm_state_MN')
//   let minnesota2 = document.querySelector('.sm_state_MN')
//   // addEventListener('click', () => { alert('MN') })
//   //console.log(minnesota[0])
//   //minnesota[0].outerHTML = '<h1>malik</h1>'
//   // minnesota[0].outerHTML = `<path fill="#88a4bc" stroke="#ffffff" d="M581.78,82.1L578.28,81.90899999999999L577.1139999999999,82.68799999999999L576.0239999999999,82.067L574.3109999999999,80.00699999999999L572.911,79.92999999999999L567.661,80.907L563.733,80.833L563.031,78.267L561.631,78.19L559.454,79.475L556.656,81.85L554.362,82.708L552.262,82.593L550.3549999999999,81.506L549.3419999999999,79.486L546.4249999999998,78.905L545.2949999999998,76.456L543.6219999999998,76.224L541.3279999999999,77.08200000000001L541.5239999999999,78.638L540.2409999999999,78.989L537.8259999999999,74.363L535.2979999999999,74.365L536.1129999999999,72.303L532.651,71.41199999999999L531.289,70.63499999999999L527.361,70.56099999999999L524.367,71.38L523.746,72.47L520.052,73.251L518.222,70.76400000000001L513.049,70.34100000000001L511.72499999999997,68.864L509.31399999999996,69.29400000000001L507.79699999999997,68.79L505.929,67.003L505.77099999999996,64.747L504.24899999999997,59.187L504.12999999999994,56.230999999999995L501.95099999999996,54.98799999999999L499.306,54.56199999999999L499.43,62.57199999999999L499.119,63.11699999999999L489.435,63.00899999999999L469.365,62.75399999999999L469.327,63.45399999999999L471.2,70.297L470.347,73.059L470.777,75.47L470.471,81.071L472.57800000000003,88.77L473.67,91.919L474.56800000000004,96.041L474.30000000000007,100.942L474.4580000000001,103.198L474.5390000000001,106.854L475.0860000000001,109.693L475.09000000000015,114.749L475.5960000000001,115.759L476.10500000000013,119.298L477.9350000000001,121.785L478.5220000000001,126.451L478.6030000000001,130.107L477.1280000000001,133.959L473.9020000000001,136.451L473.7080000000001,137.423L476.2790000000001,141.77700000000002L478.2240000000001,142.16400000000002L479.9370000000001,144.22400000000002L479.79500000000013,159.66400000000002L479.84200000000016,169.07600000000002L479.4660000000002,183.66100000000003L490.0060000000002,183.53500000000003L505.1740000000002,183.52200000000002L520.7690000000002,183.39200000000002L536.2470000000002,182.83400000000003L551.7250000000001,182.27600000000004L561.9920000000002,181.99500000000003L561.7540000000001,176.08400000000003L560.8180000000001,172.66200000000003L558.6770000000001,170.71900000000002L556.7700000000001,169.63200000000003L554.9420000000001,169.67200000000003L551.9840000000002,167.26300000000003L550.1920000000001,164.07500000000005L547.7790000000001,161.97700000000003L544.8620000000001,161.39600000000004L542.8770000000001,159.18100000000004L539.96,158.60000000000005L536.34,155.45300000000006L536.9590000000001,151.83600000000007L536.2950000000001,148.57000000000008L537.0330000000001,147.90800000000007L536.7200000000001,145.92500000000007L536.9900000000001,143.55200000000008L538.1540000000001,140.2450000000001L536.5960000000001,137.9130000000001L534.6510000000001,137.5260000000001L534.532,134.5700000000001L536.009,133.2460000000001L537.173,129.9390000000001L542.223,127.40700000000011L543.2719999999999,126.20000000000012L542.9889999999999,113.40500000000011L544.2719999999999,113.05400000000012L545.515,110.87500000000011L545.553,110.17500000000011L549.945,106.90400000000011L554.1030000000001,102.7780000000001L561.1730000000001,94.1770000000001L564.5540000000001,91.41300000000011L568.0520000000001,89.0760000000001L574.5060000000001,86.6200000000001L581.7750000000001,82.1020000000001Z" class="sm_state_MN" opacity="1" stroke-opacity="1" stroke-width="0.625" stroke-linejoin="round" transform="matrix(1.064,0,0,1.064,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1; cursor: pointer; stroke-opacity: 1; stroke-linejoin: round; fill-opacity: 1;" fill-opacity="1"></path>`
//   console.log(minnesota)
//   console.log(minnesota2)
//   //minnesota.addEventListener('click', this.clickEvent)
// }

//   return (
//   <>
//     <h1>SimpleMaps</h1>

//     <div id="map"></div>
//     <p>This map was created and can be edited at <a href="http://simplemaps.com/custom/us/TXYjv2qu">http://simplemaps.com/custom/us/TXYjv2qu</a></p>
//     <p>To learn how to install this map on your web page, see the <a href="http://simplemaps.com/docs">Documentation</a>.</p>
//   </>
// );
// }

class SMComponent extends Component {

  state = {
    loaded: null
  }

  componentDidMount() {
    if (!document.getElementById('map')) {
      this.forceUpdate()
    }
    else {
      //console.log(document.getElementById('map').getElementsByTagName('svg')[1])
      if (!document.getElementById('map').getElementsByTagName('svg')[1]) {
        console.log('something went wrong')
        //this.forceUpdate()
      }
      else {
        // if (document.getElementById('map').getElementsByTagName('svg')[1].viewBox.baseVal.x === 0) {
        //   this.forceUpdate()
        // }
        // else {
        console.log(document.getElementById('map').getElementsByTagName('svg')[1].viewBox.baseVal.x)
        this.setState({ loaded: true })
        //}
      }
    }
    //console.log(document.getElementById('map').getElementsByTagName('svg')[1])
    // console.log(this.state.loaded)
    //if (document.getElementById('map').getElementsByTagName('svg')[1] === undefined) {
    // let minnesota2 = document.getElementById('map').getElementsByTagName('svg')[1].viewBox.baseVal.x
    // console.log(minnesota)
    // if (minnesota === 0 || minnesota === null || minnesota === undefined) {
    // if (minnesota === null || minnesota === undefined) {
    //     console.log(document.getElementById('map').getElementsByTagName('svg')[1].viewBox.animVal.x)
    //this.setState({ loaded: false })
    //console.log('force')
    //this.forceUpdate()
    //}
    // else {

    // this.setState({ loaded: true })
    // }

    // setTimeout(() => {

    // }, 3000)

    //let minnesota = document.getElementById('map').getElementsByTagName('svg')[1].viewBox.animVal.x
    // 
  }

  clickMessage = () => {
    console.log('success')
  }

  addOnClick = () => {
    let minnesota = document.getElementsByClassName('sm_state_MN')
    let minnesota2 = document.querySelector('.sm_state_MN')
    // addEventListener('click', () => { alert('MN') })
    //console.log(minnesota[0])
  
    console.log(minnesota)
    console.log(minnesota2)
    //minnesota.addEventListener('click', this.clickEvent)
  }

  clickEvent = (event) => {
    console.log('THE EVENT: ' + event)
  }

  // getRef = (ele) => {
  //   console.log(ele)
  // }

  render() {
    // if (document.getElementById('map')){
    //   return (
    //     <>
    //       <h1 style={{ textAlign: 'center' }}>Welcome to WhoPolitics</h1>
    //       <div id="map"></div>
    //     </>
    //   );
    // }
    // else{
    //   return(<h1>not ready</h1>)
    // }
    //console.log(document.getElementById('map'))
    console.log(this.state.loaded)
    if (this.state.loaded) {
      return (
        <>
          <h1 style={{ textAlign: 'center' }}>Welcome to WhoPolitics</h1>
          <div id="map" ></div>
        </>
      );
    }
    else {
      return (
        <>
          <h1>Loading</h1>
          <div id="map" ></div>
        </>
      );
    }
  }
}


export default SMComponent;