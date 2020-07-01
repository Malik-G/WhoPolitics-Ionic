import React, { useState, useEffect } from 'react';
//import './ExploreContainer.css';

const USMap = (props) => {
  const { statesData } = props;

  const getCoords = (ele) => {
    if (ele !== null) {
      console.log(ele)
      //if (!document.getElementById('text')) {
      let stateText = document.createElement('text')
      stateText.setAttribute('id', 'text')
      stateText.setAttribute('x', ele.getBoundingClientRect().x)
      stateText.setAttribute('y', ele.getBoundingClientRect().y)
      stateText.setAttribute('fill', 'white')
      stateText.textContent = 'mn'
      ele.insertAdjacentElement('afterend', stateText)
      //}
      // console.log(ele.getBoundingClientRect())
      // console.log(ele.getBBox())
    }
  }

  const mouseOver = (id) => {
    // return (event) => {
    //   console.log(event.target)
    //   if (!document.getElementById('text' + id)) {
    //     let stateText = document.createElement('text')
    //     stateText.setAttribute('id', 'text' + id)
    //     stateText.setAttribute('x', event.target.getBoundingClientRect().x)
    //     stateText.setAttribute('y', event.target.getBoundingClientRect().y)
    //     stateText.setAttribute('fill', 'white')
    //     stateText.textContent = id
    //     event.target.insertAdjacentElement('afterend', stateText)
    //   }
    //   //console.log(event.target.getBoundingClientRect())
    //   event.target.style.fill = 'red';
    //   //event.preventDefault();
    // }
  };

  const mouseOut = (event) => {
    event.target.style.fill = 'orange';
    event.preventDefault();
  };

  useEffect(() => {
    let nodelist = document.querySelectorAll('.single-state')

    if (nodelist.length === 51) {
      console.log(document.getElementById('usasvg'))//.getBoundingClientRect())
      // document.querySelector('#text1').setAttribute('x', '500')
      // document.getElementById('text1').setAttribute('x', '500')
      //let ele = document.querySelector('#id1').getBBox()
      // console.log(Array.from(document.getElementById('usasvg').children))
      // console.log(nodelist[5].getBoundingClientRect())
    }
  })

  return (
    <>
      <svg id="usasvg" viewBox="0 0 960 600">
        {statesData.map((stateData, index) =>
          <>
            <path
              id={"path" + index}
              className={"single-state"}
              style={{ cursor: "pointer", fill: "orange" }}
              key={index}
              stroke="#fff"
              strokeWidth="0.2rem"
              d={stateData.shape}
              ref={getCoords}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
            </path>
            {/* <text x={index + 10} y={index + 10} fill='white' id={"text" + index} style={{ zIndex: 5 }}>{stateData.id}</text> */}
          </>
        )}

      </svg>
    </>
  )
}

//------------------------------

const WHComponent = () => {
  const [statesData, setStatesData] = useState(['']);

  // This should only run once due to the [] arg for the dependencies.
  useEffect(() => {
    (async () => {
      const res = await fetch('https://willhaley.com/assets/united-states-map-react/states.json');
      const statesData = await res.json();
      console.log(statesData);
      setStatesData(statesData);
    })();
  }, []);

  // show a loading prompt if there is no data
  if (!statesData) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <USMap statesData={statesData} />
  );
}

export default WHComponent;


// <svg viewBox="0 0 960 600">
//   {statesData.map((stateData, index) =>
//     <path
//       className="someCSSClass"
//       style={{ cursor: "pointer", fill: "orange" }}
//       key={index}
//       stroke="#fff"
//       strokeWidth="6px"
//       d={stateData.shape}
//       onMouseOver={(event) => {
//         event.target.style.fill = 'red';
//       }}
//       onMouseOut={(event) => {
//         event.target.style.fill = 'orange';
//       }}
//     >
//     </path>
//   )}
// </svg>