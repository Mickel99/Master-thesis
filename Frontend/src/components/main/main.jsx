import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Stack alignItems={"center"} marginTop={15}>
        <Box>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            Hot sales
          </Typography>
          <Typography>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {["aaa", "bbb", "ccc"].map((item) => {
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
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    122
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    122$
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
            onClick={ handleClose }
          >
            <Close />
          </IconButton>
    

          < ProductDetails />

      </Dialog>
    </Container>
  );
};

export default Main;
