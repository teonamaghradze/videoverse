import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        justifyContent: "space-between",
        top: 0,
      }}
    >
      {/* <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={SlowMotionVideoIcon} alt="logo" height={45} />
      </Link> */}

      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <SlowMotionVideoIcon style={{ fontSize: 45, color: "white" }} />
      </Link>

      <SearchBar />
    </Stack>
  );
}

export default Navbar;
