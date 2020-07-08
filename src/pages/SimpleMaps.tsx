
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import SMComponent from '../components/SMComponent';

const SimpleMaps: React.FC = () => {
  const [loaded, setLoaded] = useState(null)
  useEffect(() => {
    const scriptOne = document.createElement("script");
    const scriptTwo = document.createElement("script");
    scriptOne.src = './assets/mapdata.js';
    scriptTwo.src = './assets/usmap.js';
    scriptOne.async = true;
    scriptTwo.async = true;
    document.head.appendChild(scriptOne);
    document.head.appendChild(scriptTwo);

    // if (document.getElementById('map').getElementsByTagName('svg')[1]) {
    //   document.getElementById('map').getElementsByTagName('svg')[1].viewBox.baseVal.x = 0
    //   //document.getElementById('map').getElementsByTagName('svg')[1].viewBox.animVal.x = 0
    // }

    setTimeout(() => {
      // if (document.getElementById('map').getElementsByTagName('svg')[1].viewBox == undefined ||
      //   isNaN(document.getElementById('map').getElementsByTagName('svg')[1].viewBox.baseVal.x) ) {
      //   console.log('NaN')
      // }
      //checkExist()
      addOnClick()
    }, 2000)
  })


  const addOnClick = () => {
    let wholeMap = document.getElementById('map').getElementsByTagName('svg')[1].childNodes


    for (let d of wholeMap) {
      if (d.nodeName === 'path' || d.nodeName === 'sm_label_DC') {
        console.log(d)
        d.addEventListener('click', () => { console.log(d) })
      }
    };
    console.log(wholeMap)
  }

  // const checkExist = () => {
  // 
  //}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <SMComponent /> */}
        <h1 style={{ textAlign: 'center' }}>WhoPolitics</h1>
        <div id="map" ></div>
      </IonContent>
    </IonPage>
  );
};

export default SimpleMaps;