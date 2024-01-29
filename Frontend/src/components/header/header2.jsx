import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IconButton,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  InputBase,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SecurityUpdateGoodOutlined";
import SearchIcon from "@mui/icons-material/Search";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const LogoLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: theme.palette.text.primary,
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const CenteredSearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.5),
  backgroundColor: theme.palette.mode === "light" ? theme.palette.background.paper : theme.palette.secondary.dark,
  color: theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.common.white,

}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.primary,
  fontSize: "1rem",
  padding: theme.spacing(1),
  backgroundColor: theme.palette.mode === "light" ? theme.palette.background.paper : theme.palette.secondary.dark,
  "&::placeholder": {
    color: theme.palette.text.secondary,
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
}));

const CartIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.secondary.dark,
  },
}));

const Header2 = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {

      const result = await fetch(
        `http://localhost:1337/api/products?populate=*&filters[productName][$regex]=${searchTerm}`
      );

      if (!result.ok) {
        console.error("Bad Request:", result.statusText);
        return;
      }

      const data = await result.json();

      // Kontrollera om data är null eller undefined innan du använder filter
      if (data && data.data) {
        // Implementera logik för att filtrera resultaten baserat på söktermen
        const filteredProducts = data.data.filter((product) =>
          product.attributes.productName
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

        console.log("Filtered Products:", filteredProducts);

        // Kolla om filtrerade produkter finns
        if (filteredProducts.length > 0) {

          navigate(`/products?search=${searchTerm}`);
        } else {
          console.log("Inga resultat hittades.");
        }
      } else {
        console.error("No data received from the API.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack>
        <LogoLink to="/" sx={{ marginRight: isSmallScreen ? 2 : 0 }}>
          <SecurityUpdateGoodOutlinedIcon sx={{ marginLeft: 0.7, fontSize: "1.5rem" }} />
          <Typography variant="body2" sx={{ fontSize: "1.2rem" }}> Trello</Typography>
        </LogoLink>
      </Stack>
      <CenteredSearchContainer>
        <SearchContainer>
          <SearchInput
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SearchButton variant="contained" onClick={handleSearch}>
            <SearchIcon />
          </SearchButton>
        </SearchContainer>
      </CenteredSearchContainer>
      <Stack direction={"row"} alignItems={"center"}>
        <CartIconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </CartIconButton>
      </Stack>
    </Container>
  );
};

export default Header2;