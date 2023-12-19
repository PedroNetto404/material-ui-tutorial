import { Stack, Box } from "@mui/material";
import Feed from "./components/Feed/index.jsx";
import Rightbar from "./components/Rightbar/index.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar/index.jsx";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
