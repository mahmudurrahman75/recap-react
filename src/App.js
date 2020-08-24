import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [friendName, setFriends] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setFriends(data))
  }, [])

  // const friendName=[{name:'mostafiz', age:27},{name:'lamia', age:16},{name:'miazanur',age:16},{name:'mahmud',age:24}];
  return (
    <div className="App">
      <Country></Country>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MovieCounter></MovieCounter>

        {/* <Friends name={friendName[1]} age='16'></Friends>
        <Friends name={friendName[0]}></Friends>
        <Friends name={friendName[2]}></Friends>
        <Friends name={friendName[3]}></Friends> */}

        {/* {
          friendName.map(friend => <li>{friend.name}</li>)
        } */}
        {
          friendName.map(friend => <Friends name={friend.name} key={friend.id} age={friend.age}></Friends>)
        }
      </header>
    </div>
    
  );
}


function MovieCounter(){
  const [count, setCount] = useState(0);
  const handleClick = () =>setCount(count + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>numbers of movies:{count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count+10}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count+5}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(porps){
  return <h3>Movies i have seen: {porps.movies} </h3>
}


function Country(){
    
  return (
    <div style={{border: '2px solid gray',
    color: 'cyan',backgroundColor:'green',padding: '10px'}}>
      <h1>bangladesh</h1>
      <h3>usa</h3>
      <p>lot of country in the world.</p>

    </div>
  )
}

function Friends(porps){
  const friendStyle={
    border:'2px solid cyan',
    borderRadius: '10px',
    backgroundColor: 'gray',
    color: 'cyan',
    margin: '10px',
    padding: '10px',
  }
  return (
    <div style={friendStyle}>
      <h2>Friends-{porps.name}</h2>
      <h3>age-{porps.age || 20}</h3>
      <p>we have a lot of friends with lot of curing and loving</p>
    </div>
  )
}

export default App;
