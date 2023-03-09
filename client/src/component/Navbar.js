import React from 'react'
import { AppBar, Toolbar, Typography,Button,makestyles
} from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          <Button>Home</Button>
          <Button>Application</Button>
          <Button>Profile</Button>
          <Button>Logout</Button>
        </Typography>
      </Toolbar>
    </AppBar>
    
  )
}

export default Navbar