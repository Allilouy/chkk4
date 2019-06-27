import React from 'react';
import Title from './title.js';
import Photo from './photo.js';
import Wrapper from './wrapper.js'
import './App.css';
import photo from "./imageInSrc.jpg";


function App() {
  return (
    <div className="App">
      <Wrapper>


<Title style={{

  color:"red"

}}>gomycode</Title>

<Title style={{fontSize: "10px"}}>Job</Title>

<Photo src={photo} />

</Wrapper>


    </div>
  );
}

export default App;
