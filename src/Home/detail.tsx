import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Box, Card, CardMedia, Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function DetailPage() {
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const id = param.get("imdbID");
  const [movie, setMovie] = useState<any>(null);

  async function DetailByIDMovie(imdbID: any) {
    const url = `http://www.omdbapi.com/?apikey=de8c784d&i=${imdbID}`;
    const response = await axios.get(url);
    return response;
  }

  useEffect(() => {
    DetailByIDMovie(id).then((res) => {
      setMovie(res.data);
    });
  });

  function navigateTo() {
    navigate(-1);
  }

  return (
    <>
        <Box sx={{ bgcolor: "#121212", minHeight: "87vh" }}>
        {movie !== null ? (
          <Container fixed sx={{ mt: 4 }}>
            <Grid container sx={{ color: "#FCCA18", height: "70px" }}>
              <Grid item md={0.1} sx={{ mt: 3 }}>
                <ArrowBackIosIcon
                  sx={{ fontWeight: "bold", fontSize: "2rem", mt: 1.5 }}
                />
              </Grid>
              <Link to="/" onClick={navigateTo}>
                <Grid item md={5} sx={{ ml: 1.5 }}>
                  <h2 style={{ fontSize: "32px", color: "#FCCA18" }}>Back</h2>
                </Grid>
              </Link>
            </Grid>

            <Box sx={{ bgcolor: "#1D1F1E", color: "white", mt: 1 }}>
              <Box sx={{ ml: 2, mr: 2,pt: 2 ,pb:2, display: "flex",columnGap:5}}>
                <Box >
                  <Card sx={{maxWidth: 300}}>
                    <CardMedia
                      component="img"
                      height={"300"}
                      width={"200"}
                      image={movie?.Poster}
                      sx={{ aspectRatio: "1/1" }}
                    />
                  </Card>
                </Box>
                <Box >
                  <Box>
                    <span style={{fontSize:'40px',fontWeight:'bold',color:'#FCCA18'}}>{movie.Title}</span>
                  </Box>
                  <Box sx={{fontSize:'17px'}}>
                    <Box sx={{mt:1,mb:1}}>
                      <span style={{fontWeight:'bold'}}>Year:</span><span>{movie.Year}</span>{' '}
                      <span style={{fontWeight:'bold'}}>Rating:</span><span>{movie.Rated}</span>{' '}
                      <span style={{fontWeight:'bold'}}>Released:</span><span>{movie.Released}</span>
                    </Box>
                    <Box sx={{mt:1,mb:1}}>
                      <span style={{fontWeight:'bold'}}>Genre:</span><span>{movie.Genre}</span>{' '}
                    </Box>
                    <Box sx={{mt:1,mb:1}}>
                      <span style={{fontWeight:'bold'}}>Writer:</span><span>{movie.Writer}</span>{' '}
                    </Box>
                    <Box sx={{mt:1,mb:1}}>
                      <span style={{fontWeight:'bold'}}>Actors:</span><span>{movie.Actors}</span>{' '}
                    </Box>
                    <Box sx={{mt:1,mb:1}}>
                      <span style={{fontWeight:'bold'}}>Plot:</span><span>{movie.Plot}</span>{' '}
                    </Box>
                    <Box sx={{mt:1,mb:1,color:'#f2cf52'}}>
                      <span style={{fontWeight:'bold'}}>Language:</span><span>{movie.Language}</span>{' '}
                    </Box>
                    <Box sx={{mt:1,mb:1}}>
                      <MilitaryTechIcon sx={{mt:1,color:'#f2cf52'}}/><span>{movie.Awards}</span>{' '}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
          ) : null}
        </Box>
    </>
  );
}
export default DetailPage;
