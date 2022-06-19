import {useState} from "react"
import { Autocomplete } from '@mui/material';
import TextField  from "@mui/material/TextField"
import React from 'react';
import "./App.css"
import Elastic from './service/elastic';

function App() {
  const [options, setOptions]  = useState(["Something"]);
  const elastic = new Elastic();
  
  const handleKeyDown = async (e) => {
    let elasticSearchCallWord = e.target.value
    const result = await elastic.getOptions(elasticSearchCallWord)
    setOptions(result.map(el => el.title))
    
  }
  
  return (
    <div className='App'>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} onKeyDown={handleKeyDown} label="Movie" />}
      />
    </div>
  );
}

export default App;
