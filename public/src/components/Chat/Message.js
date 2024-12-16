import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = ({menu}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // image message
                  return <MediaMsg el={el} menu={menu}/>;

                case "doc":
                  return <DocMsg el={el} menu={menu} />;

                case "link":
                  // Link message
                  return <LinkMsg el={el} menu={menu} />;

                case "reply":
                  // Reply message
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  // text message
                  return <TextMsg el={el} menu={menu} />;
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;