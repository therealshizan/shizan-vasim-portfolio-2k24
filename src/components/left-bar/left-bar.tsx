import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MenuItems from "./menu-items";
import { Instagram, LinkedIn, X } from "@mui/icons-material";

const LeftBar: React.FC = () => {
  return (
    <Stack height={"100vh"} p={8} justifyContent={"space-between"}>
      <Box>
        <Box>
          <Typography variant="h1" fontWeight={700}>
            Shizan Vasim
          </Typography>
          <Typography variant="h2">Frontend Developer</Typography>
          <Typography variant="body1">
            I am a dedicated digital experience designer, with a focus on
            creating pixel-perfect designs that captivate and engage audiences.
          </Typography>
        </Box>

        <Box py={2} />

        <Box>
          <MenuItems />
        </Box>
      </Box>

      <Stack direction={"row"} columnGap={2}>
        <LinkedIn />
        <X />
        <Instagram />
      </Stack>
    </Stack>
  );
};

export default LeftBar;
