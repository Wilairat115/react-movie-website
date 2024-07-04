import {
  Box,
  Card,
  CardMedia,
  Grid,
  Pagination,
  PaginationItem,
  styled
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

function MoviePage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item md={2.4} sx={{ mb: 5 }}>
            <Link to={`/detail`}>
              <Item
                sx={{
                  transition: "transform 0.5s",
                  "&:hover, &:focus": {
                    transform: "scale3d(1.006, 1.006, 1)",
                    cursor: "pointer",
                    boxShadow: "0 0px 20px #363636",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 340,
                  }}
                  image="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg"
                  title="green iguana"
                />
              </Item>
            </Link> 
          </Grid>
          <Grid item md={2.4} sx={{ mb: 5 }}>
            <Link to={`/detail`}>
              <Item
                sx={{
                  transition: "transform 0.5s",
                  "&:hover, &:focus": {
                    transform: "scale3d(1.006, 1.006, 1)",
                    cursor: "pointer",
                    boxShadow: "0 0px 20px #363636",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 300,
                    width: 200
                  }}
                  image="https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg"
                  title="green iguana"
                />
              </Item>
            </Link>
          </Grid>
          <Grid item md={2.4} sx={{ mb: 5 }}>
            <Link to={`/detail`}>
              <Item
                sx={{
                  transition: "transform 0.5s",
                  "&:hover, &:focus": {
                    transform: "scale3d(1.006, 1.006, 1)",
                    cursor: "pointer",
                    boxShadow: "0 0px 20px #363636",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 340,
                  }}
                  image="https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg"
                  title="green iguana"
                />
              </Item>
            </Link>
          </Grid>
          <Grid item md={2.4} sx={{ mb: 5 }}>
            <Link to={`/detail`}>
              <Item
                sx={{
                  transition: "transform 0.5s",
                  "&:hover, &:focus": {
                    transform: "scale3d(1.006, 1.006, 1)",
                    cursor: "pointer",
                    boxShadow: "0 0px 20px #363636",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 340,
                  }}
                  image="https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_.jpg"
                  title="green iguana"
                />
              </Item>
            </Link>
          </Grid>
          <Grid item md={2.4} sx={{ mb: 5 }}>
            <Link to={`/detail`}>
              <Item
                sx={{
                  transition: "transform 0.5s",
                  "&:hover, &:focus": {
                    transform: "scale3d(1.006, 1.006, 1)",
                    cursor: "pointer",
                    boxShadow: "0 0px 20px #363636",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 340,
                  }}
                  image="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
                  title="green iguana"
                />
              </Item>
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item md={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mb: 5,
            }}
          >
            <Pagination
              color="primary"
              page={page}
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  sx={{
                    color: "white",
                    bgcolor: "#1A1A1A",
                    "&:hover": { bgcolor: "#1A1A1A" },
                  }}
                  component={Link}
                  to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default MoviePage;
