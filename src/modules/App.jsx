import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Header from './header.jsx';
import FeatureContainer from './featureContainer.jsx';
import ArticleContainer from './articleContainer.jsx';
import DetailPage from './detailPage.jsx';

const App = () => {

  const [total, setTotal] = useState(0);
  const [topStories, setTopStories] = useState([]);
  const [feature, setFeature] = useState({});
  const [currentCountry, setCountry] = useState("US");
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Oswald',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  });

  const stripHTML = (string) => {
    let newString = new DOMParser().parseFromString(string, "text/html")
    return newString.body.textContent || "";
  }

  const getTopStories = (country = currentCountry) => {
    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=3df0162e66714d528e79e3935312c7d7&country=${country}`)
      .then(results => {
        setTopStories(results.data.articles);
        setTotal(results.data.totalResults);
        setFeature(results.data.articles[0]);
        setSelectedStory(results.data.articles[0])
      })
      .catch(err => console.log('App.jsx error, getTopStories', err));
  };

  const getStoriesByCategory = (category) => {
    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=3df0162e66714d528e79e3935312c7d7&country=${currentCountry}&category=${category}$&language=en`)
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

  const getMoreDetails = (index = 0) => {
    console.log(index, 'index');
    setSelectedStory(topStories[index]);
    setShowDetails(!showDetails);
  }

  useEffect(() => { getTopStories() }, []);


  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100%",
          width: "100%"
        }}>
        <Box
          component="div"
          sx={{
            marginTop: "5px",
            marginBottom: "5px",
            zIndex: 1
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
            padding: "20px",
            zIndex: 1,
          }}
        >
          <FeatureContainer
            feature={feature}
            total={total}
            getMoreDetails={getMoreDetails}
            stripHTML={stripHTML}></FeatureContainer>
        </Box>
        <Box
          component="div"
          sx={{
            margin: "5px",
            paddingTop: "20px",
            zIndex: 1
          }}
        >
          <ArticleContainer
            stories={topStories}
            getMoreDetails={getMoreDetails}
            stripHTML={stripHTML}></ArticleContainer>
        </Box>
        {showDetails
          && <Box
            sx={{
              backgroundColor: "#b6b8c280",
              zIndex: 10,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "99%",
              // height: "99%",
              padding: "10px",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            <DetailPage
              selectedStory={selectedStory}
              getMoreDetails={getMoreDetails}
            ></DetailPage>
          </Box>}
      </div>
    </ThemeProvider>
  );
}

export default App;
