import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "../../routes";
import { Stack } from "@mui/material";

const RightBar: React.FC = () => {
  const content = useRoutes(routes);
  return (
    <Stack height={"100vh"} p={8} justifyContent={"center"}>
      {content}
    </Stack>
  );
};

export default RightBar;
