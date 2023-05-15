import { Grid, Button, TextField, Select, InputLabel, MenuItem } from '@mui/material'

const Header = () => {

  const categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]

  return (
    <>
    <Grid container spacing={2} sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <Grid item xl={5} sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
        <Button>Top News</Button>
        <InputLabel id="category-select">Categories</InputLabel>
        <Select
        labelId="category-select"
        id="category-select"
        value="Categories"
        label="categories"
        >
          {categories.map((cat, i) => {
            return <MenuItem key={i}>{cat}</MenuItem>
          })}
        </Select>
        <TextField id="standard-basic" label="Search for a Topic" variant="standard"></TextField>
      </Grid>
      <Grid item xl={4}>
        <h1>Today's Top Headlines</h1>
      </Grid>
      <Grid item sx={{}}>
        <Button>US</Button>
        <Button>UK</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default Header;