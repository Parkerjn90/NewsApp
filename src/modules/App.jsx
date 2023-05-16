import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { Box } from '@mui/material';

import Header from './header.jsx';
import FeatureContainer from './featureContainer.jsx';
import ArticleContainer from './articleContainer.jsx';

const App = () => {

  const [total, setTotal] = useState(0);
  const [topStories, setTopStories] = useState([]);
  const [feature, setFeature] = useState({});
  const [currentCountry, setCountry]= useState("US");

  const getTopStories = (country = currentCountry) => {
    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=3df0162e66714d528e79e3935312c7d7&country=${country}`)
      .then(results => {
        setTopStories(results.data.articles);
        setTotal(results.data.totalResults);
        setFeature(results.data.articles[0]);
      })
      .catch(err => console.log('App.jsx error, getTopStories', err));
  };

  const getStoriesByCategory = (category) => {
    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=3df0162e66714d528e79e3935312c7d7&country=${currentCountry}&category=${category}&language=en`)
    .then(results => {
      setTopStories(results.data.articles);
      setTotal(results.data.totalResults);
      setFeature(results.data.articles[0]);
    })
    .catch(err => console.log('App.jsx error, getStoriesByCategory', err));
  };

  const getQuery = (query) => {
    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=3df0162e66714d528e79e3935312c7d7&country=${currentCountry}&q=${query}&language=en`)
    .then(results => {
      setTopStories(results.data.articles);
      setTotal(results.data.totalResults);
      setFeature(results.data.articles[0]);
    })
    .catch(err => console.log('App.jsx error, getQuery', err));
  };

  useEffect(() => { getTopStories() }, []);


  return (
    <>
      <Box
        component="div"
        sx={{
          marginTop: "5px",
          marginBottom: "5px",
        }}
      >
        <Header
        getTopStories={getTopStories}
        getStoriesByCategory={getStoriesByCategory}
        setCountry={setCountry}
        getQuery={getQuery}></Header>
      </Box>
      <Box
        component="div"
        sx={{
          marginTop: "5px",
          marginBottom: "5px",
          backgroundColor: "#b6b8c280",
        }}
      >
        <FeatureContainer feature={feature} total={total}></FeatureContainer>
      </Box>
      <Box
        component="div"
        sx={{
          margin: "5px",
          paddingTop: "20px"
        }}
      >
        <ArticleContainer stories={topStories}></ArticleContainer>
      </Box>
    </>
  );
}

export default App;
