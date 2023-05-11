import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromApi';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => { setvideos(data.items) })
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }, overflow: 'auto' }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff', display: { xs: 'none', md: 'inline-block' } }}>
          copyright 2022 gershy media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory}<span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed