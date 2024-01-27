
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Dialog, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useGetproductByNameQuery } from "../../Redux/product";
import ProductDetails from "./ProductDetails";
import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Header1 from "../header/header1";
import Header2 from "../header/header2";
import Header3 from "../header/header3";
import Footer from "../footer/footer";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [alignment, setAlignment] = React.useState("left");
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const allProductsAPI = "products?populate=*";
  const casesCategoryAPI = "products?populate=*&filters[Category][$eq]=Cases";
  const chargerCategoryAPI = "products?populate=*&filters[Category][$eq]=Charger";
  const ScreenprotectorCategoryAPI = "products?populate=*&filters[Category][$eq]=Screen%20protector";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchParams] = useSearchParams();
  const searchTermFromUrl = searchParams.get("search");

  React.useEffect(() => {
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchTermFromUrl]);

  const { data, error, isLoading } = useGetproductByNameQuery(
    myDate
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setmyDate(newValue);
  };

  // Filtrera produkter baserat på sökterm
  const filteredProducts = searchTerm
    ? data?.data.filter((product) =>
        product.attributes.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data?.data;

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />

      <Container>
        <Stack alignItems={"center"} marginTop={15}>
          <Box>
            <Typography sx={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", mb: 2, color: theme.palette.primary.main }}>
              🌟 Hot Sales Alert! 🌟
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: "16px", mb: 4, color: theme.palette.text.secondary }}>
              Explore our latest arrivals in an exclusive brand selection.
            </Typography>
          </Box>

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              display: "flex",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`,
              "& .MuiToggleButton-root": {
                flex: "1",
                transition: "0.3s",
                backgroundColor: theme.palette.menucolor.main,
                color: theme.palette.primary.contrastText,
                border: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              },
              "& .Mui-selected": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              },
              "& .MuiToggleButton-label": {
                fontSize: "14px",
              },
            }}
          >
            <ToggleButton value={allProductsAPI} aria-label="left aligned">
            All Products
            </ToggleButton>
            <ToggleButton value={casesCategoryAPI} aria-label="centered">
              Cases
            </ToggleButton>
            <ToggleButton value={chargerCategoryAPI} aria-label="right aligned">
              Charger
            </ToggleButton>
            <ToggleButton value={ScreenprotectorCategoryAPI} aria-label="right aligned">
            Screen protector
            </ToggleButton>
          </ToggleButtonGroup>

        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {filteredProducts?.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 345,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    scale: "1.01",
                    transition: "0.1s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 250 }}
                  image={`${import.meta.env.VITE_BASE_URL}${
                    item.attributes.productImg.data[0].attributes.url
                  }`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productName}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    Add to cart <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />{" "}
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails />
        </Dialog>
      </Container>

      <Footer />
    </>
  );
};

export default ProductPage;
