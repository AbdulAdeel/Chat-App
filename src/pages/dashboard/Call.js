import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";

import { MagnifyingGlass, Phone } from "phosphor-react";
import React, { useState } from "react";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left Side */}
        <Box
          sx={{
            height: "100hv",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.default,
            width: 340,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Call Log</Typography>
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
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                {" "}
                Start Conversation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={2}
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
                {/* Call Logs*/}
                {CallLogs.map((el) => (
                  <CallLogElement {...el} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Right Side */}
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;
