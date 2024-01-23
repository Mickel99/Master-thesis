import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Main = () => {
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

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} >
        {["aaa", "bbb", "ccc", ] .map((item) => {
            return (
                <Card key={item} sx={{ maxWidth: 345, mt: 6,  ":hover .MuiCardMedia-root ": {

                    scale: "1.01",
                    transition: "0.1s",
                  }, }}>
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
                  <Button sx={{ textTransform: "capitalize" }} size="large">
                    Add to cart <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />{" "}
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            )

        })}
      </Stack>
    </Container>
  );
};

export default Main;
