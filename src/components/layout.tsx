import React from "react";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";
import { Stack } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <Stack display={'grid'} gridTemplateColumns={'50% 50%'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <LeftBar />
      <RightBar />
    </Stack>
  );
};

export default Layout;
