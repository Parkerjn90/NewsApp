import { React, useState, useEffect } from 'react';
import axios from 'axios';

import Header from './header.jsx';
import FeatureContainer from './featureContainer.jsx';
import ArticleContainer from './articleContainer.jsx';

const App = () => {

  const [total, setTotal] = useState(0);
  const [topStories, setTopStories] = useState([]);
  const [feature, setFeature] = useState({});

  const getTopStories = (country = "US") => {
    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=3df0162e66714d528e79e3935312c7d7&country=${country}`)
    .then(results =>{
      setTopStories(results.data.articles);
      setTotal(results.data.totalResults);
      setFeature(results.data.articles[0])
    })
    .catch(err => console.log('App.jsx error, getTopStories', err));
  }

  useEffect(() => {getTopStories()}, []);


  return (
    <>
    <Header></Header>
    <FeatureContainer feature={feature} total={total}></FeatureContainer>
    <ArticleContainer></ArticleContainer>
    </>
  );
}

export default App;
