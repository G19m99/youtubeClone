import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({
  videos,
  direction,
  observerRef = null,
  size = { xs: "100%", sm: "48%", md: "31%", xl: "23%" },
}) => {
  if (!videos && !videos?.length) return "Loading...";
  return (
    <Stack
      sx={{ overflowY: "auto", width: "100%" }}
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index} width={size}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {index === videos.length - 1 && <div ref={observerRef} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
