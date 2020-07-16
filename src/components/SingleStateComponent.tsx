import React, { Component, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import { IonButton } from '@ionic/react';

const SingleStateComponent: React.FC = () => {
  let { id } = useParams()
  let history = useHistory()

  const goToHome = () => {
    history.push('/home')
  }

  const goToMap= () => {
    history.push('/willhaley')
  }

  useEffect(() => {
    console.log(id)
  })

  return (
    <div>
      <IonButton onClick={goToHome}>Home</IonButton>
      <IonButton onClick={goToMap}>U.S. Map</IonButton>
      <h1>{id} Single State Page</h1>
    </div>
  )
}

export default SingleStateComponent;


////CLASS IMPLEMENTATION

// class SingleStateComponent extends Component{
//   state = { stateID: this.props.match.params.id}
//   //let { idFromParams } = useParams();

//   componentDidMount() {
//     console.log(this.props)
//   }

//   render() { 
//     const {stateID} = this.state
//     console.log(stateID)
//     return ( 
//     <>
//     <h1>{stateID} Single State Page</h1>
//     </>);
//   }
// }

//export default SingleStateComponent;

