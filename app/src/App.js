import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React App Demo with Material UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="p" component="h1" sx={{ flexGrow: 1, marginTop:'50px', marginLeft:'20px' }}>This is how you deploy a React App with Material UI to EC2</Typography>
    </Box>
  );
}

export default App; 
