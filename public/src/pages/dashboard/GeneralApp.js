import React from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/Chat/index";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages.js";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 760px)" : "calc(100vw - 440px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
      {sidebar.open && (() => {
        switch (sidebar.type){
          case "CONTACT":
            return <Contact/>;
          case "STARRED":
            return <StarredMessages/>;
          case "SHARED":
            return<SharedMessages/>;

           default:
            break;

        }
      })
      ()
      }      
    </Stack>
  );
};

export default GeneralApp;
