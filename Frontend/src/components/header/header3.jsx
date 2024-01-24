import {  Stack, useMediaQuery } from "@mui/material";
import Links from "./Links";

const Header3 = () => {
    return (
        <div>

{useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}


        </div>
    );
}

export default Header3;
