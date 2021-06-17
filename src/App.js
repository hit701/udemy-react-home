import React from 'react';

// class App extends Component {
//   render() {
    
//     return <input type="text" onClick={()=>{console.log("This was chlicked")}} />;
//   }
// }

const App = () => {
  return (
    <div>
        <Cat />
        <Cat />
        <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
