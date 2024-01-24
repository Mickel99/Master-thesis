import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={360}
          src="https://nudient.centracdn.net/client/dynamic/images/1182_c4706820c1-00-000-0086-0000-1-full.jpg"
          alt=""
        />
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">asfasfsa</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          afsfasf
        </Typography>
        <Typography variant="body1">safsafsaf</Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {[
            "https://nudient.centracdn.net/client/dynamic/images/1182_b1781172b6-00-000-0086-0002-1-full.jpg",
            "https://nudient.centracdn.net/client/dynamic/images/1182_06a4450324-00-000-0086-0004-1-full.jpg",
          ].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                width={90}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
