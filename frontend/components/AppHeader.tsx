import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";

function AppHeader() {
  return (
    <AppBar
      style={{ backgroundColor: "rgba(17,17,17,255)" }}
      position="absolute"
    >
      <CssBaseline />
      <Toolbar>
        <Image src="/reserve.svg" alt="Reserve Logo" width={200} height={100} />
        <Typography variant="h5" style={{ fontFamily: "Helvetica" }}>
          RToken Backtester
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default AppHeader;
