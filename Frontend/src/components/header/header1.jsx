import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#A9957B",
        padding: "8px",
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,

      }}
    >
      <Container>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mr: 2,
            p: "4px 10px",
            bgcolor: "#D23F57",
            borderRadius: "15px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="body2"
        >
          Sale
        </Typography>

        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
            
          }}
          variant="body2"
        >
          Free Express Shipping
        </Typography>

        <Box flexGrow={1} />
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined fontSize="small" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
        </div>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </a>
      
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#fff",
          }}
        />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </a>
      </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
