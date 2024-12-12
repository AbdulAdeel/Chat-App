import React from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/Chat/index";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 440px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.paper,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
