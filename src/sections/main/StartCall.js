import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";

import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  const theme = useTheme();
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        sx={{ p: 4 }}
        onClose={handleClose}
      >
        {/* Title */}
        <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
        {/* Content */}
        <DialogContent
          sx={{
            mr: 1,
            overflow: "hidden",
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
                  : theme.palette.background.paper,
            },
          }}
        >
          <Stack spacing={3}>
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
            {/* Call List */}
            {MembersList.map((el) => (
              <CallElement {...el} />
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StartCall;
