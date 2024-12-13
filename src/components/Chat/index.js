import React from "react";
import { Stack, Box, useTheme } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />
      {/* Msgs */}
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor:
              theme.palette.mode === "light"
                ? "#c4c4c4" // Light mode scrollbar color
                : "#616161", // Dark mode scrollbar color
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor:
              theme.palette.mode === "light" ? "#a3a3a3" : "#828282",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f0f0f0"
                : theme.palette.background.paper,
          },
        }}
      >
        <Message />
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
