import React from 'react';

import Navbar from './components/Navbar';
import Map from './components/Map';

import { useLoadScript } from "@react-google-maps/api";
import { CssBaseline, Grid, InputBase } from '@mui/material';


function App() {
  const libraries = ['places']

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  
  return (
    
    <div>
      <CssBaseline />
      <Map />

    </div>
  );
}

export default App;
