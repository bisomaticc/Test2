import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
// contains login and signup button along with title
const Navbar = () => {
  const location = useLocation();

  // List of routes where login and signup buttons should be hidden
  const hideAuthButtonsRoutes = ['/login', '/signup','/InLogin'];

  const shouldHideAuthButtons = hideAuthButtonsRoutes.includes(location.pathname);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          IndiGo
        </Typography>
        {!shouldHideAuthButtons && (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
