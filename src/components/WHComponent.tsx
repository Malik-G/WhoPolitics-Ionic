import React, { useState, useEffect, Component } from 'react';
import { states } from './states'

const WHComponent = () => {

  const clickEvent = (id) => {
    return (event) => {
      console.log(id)
    }
  }

  const mouseOver = (event) => {
    console.log(event.target)
    event.target.style.fill = 'red';
  };

  const mouseOut = (event) => {
    event.target.style.fill = 'orange';
    event.preventDefault();
  };

  useEffect(() => {
    let nodelist = document.querySelectorAll('.single-state')
    console.log(nodelist)

    if (nodelist.length === 51) {
      console.log(document.getElementById('usasvg'))
    }
  })

  return (
    <svg id="usasvg" viewBox="0 0 960 600">
      {states.map((stateData, index) =>
        <>
          <path
            id={stateData.id}
            className={"single-state"}
            style={{ cursor: "pointer", fill: "orange" }}
            key={index}
            stroke="#fff"
            strokeWidth="0.1rem"
            d={stateData.shape}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            onClick={clickEvent(stateData.id)}
          >
          </path>
          <text x={parseInt(stateData.x) - 15} y={stateData.y} fill='white' id={"text" + index}>{stateData.id}</text>
        </>
      )}
    </svg >
  )
}

export default WHComponent;
