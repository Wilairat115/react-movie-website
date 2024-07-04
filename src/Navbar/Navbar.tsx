import { AppBar, Box } from "@mui/material";

function NavbarPage(){
    return<>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
          <Box sx={{ color: "#FCCA18" ,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <span style={{fontWeight:'bold',fontSize:'40px'}}>IMDB</span>
          </Box>
        </AppBar>
      </Box>
    </>
}
export default NavbarPage;