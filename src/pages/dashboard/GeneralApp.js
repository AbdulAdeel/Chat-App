import React from "react";
import Chats from "./Chats";
import { Stack, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Conversation from "../../components/Chat/index";
import NoChatSVG from "../../assets/Illustration/NoChat";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages.js";
import { Link } from "react-router-dom";

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar, room_id, chat_type } = useSelector((state) => state.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chats */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sideBar.open ? "calc(100vw - 760px)" : "calc(100vw - 440px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {room_id !== null && chat_type === "individual" ? (
          <Conversation />
        ) : (
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
          >
            <NoChatSVG />
            <Typography variant="subtitle2">
              Select a conversation or start a{" "}
              <Link
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
                to="/"
              >
                new one
              </Link>
            </Typography>
          </Stack>
        )}
      </Box>
      {sideBar.open &&
        (() => {
          switch (sideBar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
            case "SHARED":
              return <SharedMessages />;

            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
