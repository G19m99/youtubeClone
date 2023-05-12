import React from 'react';
import Stack from '@mui/material/Stack';
import { logo } from '../utils/constants.js';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between', zIndex: 5 }}
    >
      <Link to="/" style={{isplay: 'flex', alignItems: 'center'}}>
        <img src={logo} alt='logo' height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar