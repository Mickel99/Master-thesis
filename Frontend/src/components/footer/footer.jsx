
import { Box, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "100px",
        bgcolor: "#282c34",
        py: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to right, #282c34, #4d5866)",
      }}
    >
      <Typography
        textAlign="center"
        variant="h4"
        sx={{ fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, mb: 2 }}
      >
        Trello
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <LocationOnIcon sx={{ mr: 1 }} />{" "}
          <strong>Visit us:</strong>{" "}
          <Link href="#" underline="hover">
            123 Market Street, Cityville, Country
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <MailOutlineIcon sx={{ mr: 1 }} />{" "}
          <strong>Contact:</strong>{" "}
          <Link href="mailto:info@trelloemporium.com">
            info@trelloemporium.com
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ mr: 1 }} />{" "}
          <strong>Phone:</strong>{" "}
          <Link href="tel:+15551234567" >
            (555) 123-4567
          </Link>
        </Typography>
      </Box>
</Box>
  );
};

export default Footer;
