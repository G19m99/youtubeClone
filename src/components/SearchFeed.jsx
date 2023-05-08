import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setvideos(data.items) })
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed