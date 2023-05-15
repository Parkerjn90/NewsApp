import { React, useState, useEffect } from 'react';
import axios from 'axios';

import Header from './header.jsx'

const App = () => {

  const [total, setTotal] = useState(0);
  const [topStories, setTopStories] = useState([]);

  const getTopStories = (country = "US", page = 1) => {
    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=3df0162e66714d528e79e3935312c7d7&country=${country}&page=${page}`)
    .then(results =>{
      setTopStories(results.articles);
      setTotal(results.totalResutls);
    })
    .catch(err => console.log('App.jsx error, getTopStories', err));
  }

  useEffect(() => {getTopStories()}, []);


  return (
    <>
    <Header></Header>
    </>
  );
}

export default App;
