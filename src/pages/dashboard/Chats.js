import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArchiveBox, CircleDashed, MagnifyingGlass, Users } from "phosphor-react";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import Friends from "../../sections/main/Friends";
import { socket } from "../../socket";
import { FetchDirectConversations } from "../../redux/slices/conversation";
import { useDispatch, useSelector } from "react-redux";

const user_id = window.localStorage.getItem("user_id");

const Chats = () => {
 const [openDialog, setOpenDialog] = useState(false);

 const handleCloseDialog = () => {
   setOpenDialog(false);
 };
 const handleOpenDialog = () => {
   setOpenDialog(true);
 };
 const dispatch = useDispatch();
  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );


  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      console.log(data); // this data is the list of conversations
      // dispatch action

      dispatch(FetchDirectConversations({ conversations: data }));
    });
  }, []);

  const theme = useTheme();
  return (
    <>
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
            <Stack direction={"row"} alignItems="center" spacing={1}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
                sx={{ width: "max-content" }}
              >
                <Users />
              </IconButton>
              <IconButton sx={{ width: "max-content" }}>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
              {/* <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.mode === "light" ? "#676767" : "#FFFFFF",
                }}
              >
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })} */}
            </Stack>
            <Stack spacing={2.4}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.mode === "light" ? "#676767" : "#FFFFFF",
                }}
              >
                All Chats
              </Typography>
              {conversations.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
