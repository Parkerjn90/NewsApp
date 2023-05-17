import { useState } from 'react';

import {
  Grid,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = ({ getTopStories, getStoriesByCategory, setCountry, getQuery }) => {

  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology"
  ]
  const [keyword, setKeyword] = useState('');
  const [isClicked, setClicked] = useState({
    US: true,
    UK: false,
    FR: false,
  })

  const theme = useTheme()

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
    console.log('category', e.target.value)
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
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <Grid
          item xl={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "5px"
          }}>
          <Button
            sx={{
              textAlign: "center",
              paddingTop: "18px"
            }}
            onClick={goHome}
          >Top News</Button>
          <FormControl
            sx={{ minWidth: 120 }}
            variant="standard">
            <InputLabel
              id="category-select"
              sx={{
                textAlign: "center",
                transform: "translateX(-50%)",
                left: "50%",
                position: "absolute",
                top: "40%",
                width: "100%",
              }}>Categories</InputLabel>
            <Select
              id="category-select"
              labelId="category-label"
              value=""
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
              onChange={changeCategory}
            >
              {categories.map((cat, i) => {
                return <MenuItem key={i} value={cat.toLowerCase()} >{cat}</MenuItem>
              })}
            </Select>
          </FormControl>
          <TextField
            id="standard-basic"
            label="Search for a Topic"
            variant="standard"
            onChange={saveQuery}
            onKeyPress={queryStories}
            value={keyword}
            sx={{ marginLeft: "5px" }}
          >
          </TextField>
        </Grid>
        <Grid item xl={4}>
          <Typography
            style={{
              fontFamily: `${theme.typography.h1}, sanserif`,
              fontWeight: 500,
              fontSize: 50
            }}>
            Today's Top Headlines
          </Typography>
        </Grid>
        <Grid item sx={{}}>
          <Button
            onClick={changeCountry}
            value="US"
            id="US"
            style={
              isClicked["US"] ?
                { backgroundColor: "#b6b8c280" } :
                { backgroundColor: "white" }}
          >US</Button>
          <Button
            onClick={changeCountry}
            value="GB"
            id="UK"
            style={
              isClicked["UK"] ?
                { backgroundColor: "#b6b8c280" } :
                { backgroundColor: "white" }}
          >UK</Button>
          <Button
            onClick={changeCountry}
            value="FR"
            id="FR"
            style={
              isClicked["FR"] ?
                { backgroundColor: "#b6b8c280" } :
                { backgroundColor: "white" }}
          >FR</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Header;