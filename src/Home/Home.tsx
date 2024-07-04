// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import { Box, Card, CardMedia, Container, MenuItem, Pagination, Select, TextField, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#3B3B3B', 
          color:'white',
          '&:hover': {
            backgroundColor: '#585858', 
            color:'white',
          },
          '&.Mui-selected': {
            backgroundColor: '#FCCA18', 
            color:'black'
          },
        },
      },
    },
  },
});

function HomePage() {
  const [ListMovie, setListMovie] = useState<any[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [pages, setPages] = useState(1);
  const{
    page,
    setPage,
    searchMovie,
    setSearchMovie,
    options,
    setOptions,
  } = useMovieContext();

  async function SearchByNameMovie(searchText : string,options:number) {
    if(options==1){
      const url = `http://www.omdbapi.com/?apikey=de8c784d&s=${searchText}&page=${page}`;
      const response = await axios.get(url);
      console.log(response);
      return response.data
    }else{
      const url = `http://www.omdbapi.com/?apikey=de8c784d&i=${searchText}`;
      const response = await axios.get(url);
      console.log(response);
      return response.data
    }
  }

  const handleTextFieldChange =(
    event:React.ChangeEvent<HTMLInputElement>
  )=>{
    console.log(event.target.value);
    
    setSearchMovie(event.target.value)
  }

  const clickPage = (page : number)=>{
    setPage(page);
    setListMovie([])
  }

  useEffect(() => {
    if(searchMovie.trim() !==""){
      SearchByNameMovie(searchMovie,options).then((res) => {
        console.log(res)
        setLoading(true)
        if(res.Response === "True"){
          if(options==1){
            setListMovie(res.Search);
          }else{
            setListMovie([res]);
          }
          setPages(Math.ceil(res.totalResults /10))
          setLoading(false)
        }
      }).catch((error)=> console.error("Error fetching movies:",error))
    }else{
      setListMovie([])
    }
  },[searchMovie,page]);


  return (
    <>
      <Box sx={{ bgcolor: "#121212",minHeight:'89vh'}}>
        <Container >
          <Box 
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              mt:5
            }}>
            <TextField
              id="outlined-basic"
              label="Movie Name"
              value={searchMovie}
              size="medium"
              InputLabelProps={{
                style:{color:'#ffffff'}
              }}
              InputProps={{
                style:{color:'#ffffff'},
              }}
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: '#ffffff', 
                },
                '& .MuiInputLabel-outlined': {
                  color: '#ffffff'
                },
                '&.Mui-focused .MuiInputLabel-outlined': {
                  color: '#FCCA18', 
                  borderColor: '#FCCA18',
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FCCA18', 
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FCCA18', 
                },
                '&.Mui-focused .MuiSvgIcon-root': {
                  color: '#FCCA18', 
                  borderColor: '#FCCA18',
                },
              }}
              onChange={handleTextFieldChange}
            />
            <Select
              defaultValue={1}
              size="medium"
              onChange={(e)=>{setOptions(+e.target.value)}}
              inputProps={{
                id: "uncontrolled-native",
              }}
              sx={{
                color: '#ffffff', 
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: '#ffffff', 
                },
                '& .MuiSvgIcon-root': {
                  color: '#ffffff', 
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FCCA18', 
                },
                '&:hover .MuiSvgIcon-root': {
                  color: '#FCCA18', 
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FCCA18', 
                },
                '&.Mui-focused .MuiSvgIcon-root': {
                  color: '#FCCA18', 
                },
              }}
            >
              <MenuItem value={1}>Search By Name</MenuItem>
              <MenuItem value={2}>Search By ID</MenuItem>
            </Select> 
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              mt:5
            }}
          >
            {searchMovie.trim() === "" ?(
                <Box sx={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'50px',fontWeight:'bold',color:'#383838'}}>
                  WELCOME TO IMDB
                </Box>
            ):(loading ?(
              <Box sx={{textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'50px',fontWeight:'bold',color:'#383838'}}>
                  ไม่พบ
                </Box>
                // <Box sx={{textAlign:'center'}}><CircularProgress sx={{ top: "50%", left: "50%" }} /></Box>
            ):(ListMovie?.map((movie: any, i: number) => (
              <Box key={i}>
                <Card
                  sx={{
                    maxWidth: 200,
                    bgcolor: "#212121",
                    transition: "transform 0.5s",
                    "&:hover, &:focus": {
                      transform: "scale3d(1.006, 1.006, 1)",
                      cursor: "pointer",
                      boxShadow: "0 0px 50px #363636",
                    },
                  }}
                  onClick={() => {
                    navigate(`/detail?imdbID=${movie.imdbID}`)
                  }}
                >
                  <CardMedia
                    component="img"
                    height={"300"}
                    width={"200"}
                    image={movie?.Poster}
                    sx={{ aspectRatio: "1/1" }}
                  />
                </Card>
              </Box>
            ))))}
          </Box>
        </Container>
      </Box>
      <Box sx={{bgcolor: "#121212",minHeight:'10vh'}}>
        <Container>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:5,mb:5}}>
              {ListMovie.length >1 ?
                <ThemeProvider theme={theme}>
                  <Pagination
                    color="primary"
                    page={page}
                    count={pages}
                    onChange={(_e, page) => clickPage(page)}
                  />
                </ThemeProvider>
              :
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}></Box>
              }
            </Box>
        </Container>
      </Box>
      
    </>
  );
}
export default HomePage;
