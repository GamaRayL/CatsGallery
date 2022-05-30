import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const linkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",
  height: "100%",
  color: "#FFF",
  paddingRight: 15,
  paddingLeft: 15,
};

const AppToolBar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#FF9022", mb: 4 }}>
      <Toolbar sx={{ display: "flex" }}>
        <img style={{ width: 100 }} src="images/catLogo.svg" alt="cat" />
        <Box sx={{ display: "flex", alignSelf: "stretch" }}>
          <NavLink style={linkStyle} to="/">
            <Typography variant="button">Все котики</Typography>
          </NavLink>
          <NavLink style={linkStyle} to="/favouriteCats">
            <Typography variant="button">Любимые котики</Typography>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolBar;
