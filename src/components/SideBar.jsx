import React from "react";
import { categories } from "../utils/constants";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Box>
      <Button
        sx={{
          color: "red",
          diplay: "flex",
          width: "100%",
          justifyItems: "center",
        }}
        startIcon={<AddIcon />}
        onClick={()=> console.log("click")}
      >
        Add Category
      </Button>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "82vh" },
          flexDirection: { md: "column" },
        }}
      >
        {categories.map((cat) => (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(cat.name)}
            style={{
              background: cat.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            key={cat.name}
          >
            <span
              style={{
                color: cat.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {cat.icon}
            </span>
            <span
              style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}
            >
              {cat.name}
            </span>
          </button>
        ))}
      </Stack>
    </Box>
  );
};

export default SideBar;
