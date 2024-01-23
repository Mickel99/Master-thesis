import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Container>
      <Box
        sx={{
          top: 70,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '30px',
          overflow: 'hidden',
          height: '447px',
        }}
      >
        <img src="https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg" alt="Slide 1" style={{ maxWidth: '100%', borderRadius: '10px' }} />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Button
            className="all-product-button"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#999',
              '&:hover': {
                backgroundColor: 'beige',
                color: 'black',
              },
            }}
          >
            <Typography variant="button" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
              Alla produkter
            </Typography>
          </Button>
        </div>
      </Box>
    </Container>
  );
}

export default Hero;
