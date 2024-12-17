import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed} from "phosphor-react";
import { ChatList } from "../../data";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFF"
            : theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src=" " />
            </StyledBadge>
          ) : (
            <Avatar src=" " />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};



const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 340,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
           
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          spacing={2}
          direction={"column"}
          sx={{
            flexGrow: 1,
            overflow: "hidden", // Default hidden scrollbar
            height: "100%",
            paddingRight: "10px", // Space between elements and scrollbar
            "&:hover": {
              overflowY: "auto", // Enable scrollbar on hover
            },
            "&::-webkit-scrollbar": {
              width: "6px",
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
                  : theme.palette.background.default,
            },
          }}
        >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: theme.palette.mode === "light" ? "#676767" : "#FFFFFF", }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: theme.palette.mode === "light" ? "#676767" : "#FFFFFF" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};



export default Chats;
