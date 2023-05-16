import { useState } from 'react';

import { Grid, Button, TextField, Select, InputLabel, MenuItem } from '@mui/material';

const Header = ({ getTopStories, getStoriesByCategory, setCountry, getQuery }) => {

  const categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
  const [keyword, setKeyword ] = useState('');
  const [isClicked, setClicked] = useState({
    US: true,
    UK: false,
    FR: false,
  })

  const goHome = (e) => {
    e.preventDefault();
    getTopStories();
  }

  const changeCountry = (e) => {
    e.preventDefault();
    getTopStories(e.target.value)
    setCountry(e.target.value)
    changeButton(e.target.id)
  }

  const changeCategory = (e) => {
    e.preventDefault();
    getStoriesByCategory(e.target.value)
  }

  const saveQuery = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setKeyword(e.target.value);
  }

  const queryStories = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(keyword);
      getQuery(e.target.value)
      setKeyword('');
    }
  }

  const changeButton = (value) => {
    for (let key in isClicked) {
      if (key === value) {
        console.log(key)
        console.log(value)
        setClicked((isClicked) => ({
          ...isClicked,
          [key]: true
        }));
      } else {
        setClicked((isClicked) => ({
          ...isClicked,
          [key]: false
        }))
      }
    }
    console.log(isClicked);
  }

  return (
    <>
    <Grid container spacing={2} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <Grid item xl={5} sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Button onClick={goHome}
          sx={{
            "&.Mui-selected, &.Mui-selected:hover": {
              color: "purple",
              backgroundColor: "gray",
            }
          }}
        >Top News</Button>
        <InputLabel id="category-select">Categories</InputLabel>
        <Select
        labelId="category-select"
        id="category-select"
        value=""
        label="categories"
        onChange={changeCategory}
        >
          {categories.map((cat, i) => {
            return <MenuItem key={i} value={cat.toLowerCase()} >{cat}</MenuItem>
          })}
        </Select>
        <TextField id="standard-basic" label="Search for a Topic" variant="standard" onChange={saveQuery} onKeyPress={queryStories} value={keyword}></TextField>
      </Grid>
      <Grid item xl={4}>
        <h1>Today's Top Headlines</h1>
      </Grid>
      <Grid item sx={{}}>
        <Button
        onClick={changeCountry}
        value="US"
        id="US"
        style={isClicked["US"] ? {backgroundColor: "#b6b8c280"} : {backgroundColor: "white"}}
        >US</Button>
        <Button
        onClick={changeCountry}
        value="GB"
        id="UK"
        style={isClicked["UK"] ? {backgroundColor: "#b6b8c280"} : {backgroundColor: "white"}}
        >UK</Button>
        <Button
        onClick={changeCountry}
        value="FR"
        id="FR"
        style={isClicked["FR"] ? {backgroundColor: "#b6b8c280"} : {backgroundColor: "white"}}
        >FR</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default Header;