import React from 'react'
import { AppBar, Toolbar, Typography,Button,makestyles
} from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Signup</Button>
        </Typography>
      </Toolbar>
    </AppBar>
    
  )
}

export default Navbar;