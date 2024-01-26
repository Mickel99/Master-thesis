import { Link } from 'react-router-dom';
import { Stack, Typography, IconButton, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.mode === "light" ? "#F8F8F8" : "#333",
  borderRadius: 8,
  transition: "background-color 0.3s ease-in-out",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",

  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#E0E0E0" : "#444",
  },

  "& svg": {
    fontSize: 24,
  },

  "& > :last-child": {
    marginLeft: theme.spacing(1),
  },
}));

const Header3 = () => {
  return (
    <Container>
      <Stack direction={"row"} alignItems={"center"} spacing={2} justifyContent={"flex-end"}>
        <Link to="/">
          <StyledIconButton>
            <HomeIcon />
            <Typography variant="body2">Home</Typography>
          </StyledIconButton>
        </Link>

        <Link to="/products">
          <StyledIconButton>
            <AllInclusiveIcon />
            <Typography variant="body2">All Products</Typography>
          </StyledIconButton>
        </Link>

        <Link to="/contactus">
          <StyledIconButton>
            <ContactMailIcon />
            <Typography variant="body2">Contact us</Typography>
          </StyledIconButton>
        </Link>

      </Stack>
    </Container>
  );
}

export default Header3;
