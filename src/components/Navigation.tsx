import { useState } from "react";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const pages = [
  {
    id: 1,
    menu: "Convert files",
    to: "convert",
  },
  {
    id: 2,
    menu: "Transfer files",
    to: "transfer",
  },
  {
    id: 3,
    menu: "Sign Files",
    to: "sign",
  },
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menus"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    fontFamily: "Open Sans",
                    fontWeight: "800",
                  }}
                >
                  FileBox
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", width: "100%" },
                }}
              >
                {pages.map((item) => (
                  <Link
                    to={item.to}
                    key={item.id}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem
                      sx={{
                        width: "90vw",
                        backgroundColor: "#e6e8e6",
                      }}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{item.menu}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((item) => (
                <Link
                  to={item.to}
                  key={item.id}
                  style={{ textDecoration: "none" }}
                >
                  <Button>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#fff",
                        textTransform: "capitalize",
                        "&:hover": {
                          color: "#15616D",
                        },
                      }}
                    >
                      {item.menu}
                    </Typography>
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
