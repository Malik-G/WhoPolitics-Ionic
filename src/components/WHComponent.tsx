import React, { useState, useEffect, Component } from 'react';
import { states } from './states'
import { useParams, useHistory } from 'react-router';
import { IonButton } from '@ionic/react';
import './WHComponent.css'

const WHComponent: React.FC = () => {
  let history = useHistory()
  let params = useParams()
  let smallStates = [
    "MA", "NH", "VT", "CT", "NJ", "RI", "DE", "DC", "MD"
  ]

  const clickEvent = (id) => {
    return (event) => {
      console.log(id)
      history.push(`/willhaley/${id}`)
    }
  }

  const goToHome = () => {
    history.push(`/home`)
  }

  const mouseOver = (id) => {
    return (event) => {
      switch (event.target.className.baseVal) {
        case 'single-state-sm':
          {
            let matchingElement = document.getElementById(`${id}-square`)
            matchingElement.style.fill = 'red'
            event.target.style.fill = 'red';
            break;
          }
        case 'state-square':
          {
            let matchingElement = document.getElementById(`${id}`)
            matchingElement.style.fill = 'red'
            event.target.style.fill = 'red';
            break;
          }
        case 'state-square-text':
          {
            console.log(id)
            let matchingElementSquare = document.getElementById(`${id}-square`)
            matchingElementSquare.style.fill = 'red'
            let matchingElementState = document.getElementById(`${id}`)
            matchingElementState.style.fill = 'red'
            break;
          }
        case 'state-text':
          {
            console.log(id)
            let matchingElementState = document.getElementById(`${id}`)
            matchingElementState.style.fill = 'red'
            break;
          }
        default:
          event.target.style.fill = 'red';
          break;
      }
    }
  };

  const mouseOut = (id) => {
    return (event) => {
      switch (event.target.className.baseVal) {
        case 'single-state-sm':
          {
            let matchingElement = document.getElementById(`${id}-square`)
            matchingElement.style.fill = 'orange'
            event.target.style.fill = 'orange';
            break;
          }
        case 'state-square':
          {
            let matchingElement = document.getElementById(`${id}`)
            matchingElement.style.fill = 'orange'
            event.target.style.fill = 'orange';
            break;
          }
        case 'state-square-text':
          {
            console.log(id)
            let matchingElementSquare = document.getElementById(`${id}-square`)
            matchingElementSquare.style.fill = 'orange'
            let matchingElementState = document.getElementById(`${id}`)
            matchingElementState.style.fill = 'orange'
            break;
          }
        case 'state-text':
          {
            console.log(id)
            let matchingElementState = document.getElementById(`${id}`)
            matchingElementState.style.fill = 'orange'
            break;
          }
        default:
          event.target.style.fill = 'orange';
          break;
      }
    }
  };

  useEffect(() => {
    let nodelist = document.querySelectorAll('.single-state')
    console.log(nodelist)
    console.log(params)

    if (nodelist.length === 51) {
      console.log(document.getElementById('usasvg'))
    }
  })

  return (
    <>
      <IonButton onClick={goToHome}>Home</IonButton>
      <h1 style={{ color: 'slategrey', marginTop: 30, textAlign: 'center' }}>WhoPolitics</h1>
      <svg id="usasvg" viewBox="0 0 960 600" >
        {states.map((stateData, index) => {
          if (smallStates.includes(stateData.id)) {
            return <>
              <path
                id={stateData.id}
                className={"single-state-sm"}
                style={{ cursor: "pointer", fill: "orange" }}
                key={index}
                stroke="#fff"
                strokeWidth="0.1rem"
                d={stateData.shape}
                onMouseOver={mouseOver(stateData.id)}
                onMouseOut={mouseOut(stateData.id)}
                onClick={clickEvent(stateData.id)}>
              </path>
              <rect
                id={stateData.id + "-square"}
                className="state-square"
                onMouseOver={mouseOver(stateData.id)}
                onMouseOut={mouseOut(stateData.id)}
                fill="orange"
                stroke="white"
                height="25"
                width="38"
                x={parseInt(stateData.x) - 25}
                y={parseInt(stateData.y) - 18}
                onClick={clickEvent(stateData.id)}
              >
              </rect>
              <text
                className="state-square-text"
                onMouseOver={mouseOver(stateData.id)}
                onMouseOut={mouseOut(stateData.id)}
                x={parseInt(stateData.x) - 8}
                y={stateData.y}
                fill="white"
                id={"text" + index}
                textAnchor="middle"
                onClick={clickEvent(stateData.id)}
              >
                {stateData.id}
              </text>
            </>
          }
          else {
            return <>
              <path
                id={stateData.id}
                className={"single-state"}
                style={{ cursor: "pointer", fill: "orange" }}
                key={index}
                stroke="#fff"
                strokeWidth="0.1rem"
                d={stateData.shape}
                onMouseOver={mouseOver(stateData.id)}
                onMouseOut={mouseOut(stateData.id)}
                onClick={clickEvent(stateData.id)}
              >
              </path>
              <text
                className={"state-text"}
                x={parseInt(stateData.x) - 15}
                y={stateData.y}
                fill="white"
                id={"text" + index}
                onClick={clickEvent(stateData.id)}
                onMouseOver={mouseOver(stateData.id)}
                onMouseOut={mouseOut(stateData.id)}
              >
                {stateData.id}
              </text>
            </>
          }
        }
        )}
      </svg >
    </>
  )
}

export default WHComponent;
