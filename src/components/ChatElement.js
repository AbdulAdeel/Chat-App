import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledBadge from "./StyledBadge";
import { useDispatch } from "react-redux";
import { SelectConversation } from "../redux/slices/app";




const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  const dispatch = useDispatch();


  return (
    <Box
    onClick = {() => {
      dispatch (SelectConversation({room_id: id}));
    }}
  
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

export default ChatElement;