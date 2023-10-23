import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI, initialFeed } from "../utils/fetchFromApi";
import { Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      if (selectedCategory === "New") {
        const data = await initialFeed();
        setVideos(data);
      } else {
        const data = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      }
    };
    //we need a timeout to make sure the api is not requested again and exeed the 5 per second limit
    const delayAPIRequest = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fetchData();
      }, 1000);
    };

    delayAPIRequest();

    return () => clearTimeout(timer);
  }, [selectedCategory]);
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: "row" }, overflow: "none" }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Box
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Typography color="white" marginTop={1}>Social:</Typography>
          <Link
            href="https://linkedin.com/in/gershon-menzer-8a93a5231"
            className="copyright"
            variant="body2"
            sx={{
              mt: 1.5,
              color: "#fff",
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/G19m99"
            className="copyright"
            variant="body2"
            sx={{
              mt: 1.5,
              color: "#fff",
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <GitHubIcon />
          </Link>
        </Box>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
