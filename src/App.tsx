import './App.css';
import Button from '@mui/material/Button';
import '@fontsource/roboto/400.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
     <Button variant="contained"> 
       <Typography variant='h6' component='h4'> Go </Typography>
     </Button>
    </div>
  );
}

export default App;
