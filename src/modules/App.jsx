import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [topStories, setTopStories] = useState([]);

  const getTopStories = (country = "US", page = 1) => {
    axios.get(`/all?country=${country}&page=${page}`)
    .then(results => console.log(results.data))
    .catch(err => console.log('App.jsx error, getTopStories', err));
  }

  useEffect(() => {getTopStories("US", 1)}, []);


  return (
    <>This is my react app</>
  );
}

export default App;
