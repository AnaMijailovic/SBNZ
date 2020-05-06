import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {

  const sayHello = () => {
    alert('Hello!');
  }

  const buttons = [{'name': 'Say Hello'}, {'name':'Say Hello Again'}]

  return (
    <div className="App">
     <h1>Hello Beautiful World!</h1>
     {buttons.map(x =>
         <div>
           <Button className="button" variant="contained" color="primary" onClick={sayHello}>{x.name}</Button>
           <br/>
           <br/>
         </div>)}
    </div>
  );
}

export default App;
