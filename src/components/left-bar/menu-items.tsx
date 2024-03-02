import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const items = ["About Us", "Experience", "Projects"] as const;

const MenuItems: React.FC = () => {
  const location = useLocation();

  return (
    <Stack rowGap={2}>
      {items &&
        items?.map((item) => {
          let isCurrent =
            item.split(" ").join("-").toLowerCase() ===
            location.pathname.slice(1);
          return <MenuItem isCurrent={isCurrent} item={item} />;
        })}
    </Stack>
  );
};

export default MenuItems;

// -----------------------------------------------------------------------------

const MenuItem: React.FC<{ item: string; isCurrent: boolean }> = ({
  item,
  isCurrent,
}) => {
  let link = item.split(" ").join("-").toLowerCase();

  console.log(isCurrent);

  return (
    <Stack direction={"row"} alignItems={"center"} columnGap={2}>
      <Divider
        sx={{
            transition: '.25s',
          width: isCurrent ? "75px" : "50px",
          border: "1px solid #000",
        }}
      />
      <NavLink
        className={link}
        style={{ color: "unset", textDecoration: "none" }}
        to={link}
      >
        <Typography
          variant="body2"
          fontWeight={700}
          textTransform={"uppercase"}
        >
          {item}
        </Typography>
      </NavLink>
    </Stack>
  );
};
