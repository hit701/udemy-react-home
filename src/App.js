import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name:"Taro", age:10},
    {name:"Hanako", age:5},
    {name: "Yuto", age:20},
    {name: 1}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi!, I am {props.name}, and, {props.age} years old!</div>
}

User.PropType = {
  name:PropTypes.string,
  age: PropTypes.number
}
//   namer: PropTypes.string
//   //age: PropTypes.number
// }

export default App;
