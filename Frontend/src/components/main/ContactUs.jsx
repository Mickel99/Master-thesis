import { Container, Typography, TextField, Button, Stack } from "@mui/material";
import Header1 from "../header/header1";
import Header2 from "../header/header2";
import Header3 from "../header/header3";
import Footer from "../footer/footer";

const ContactUs = () => {
  return (

    <>
    <Header1 />
    <Header2 />
    <Header3 />


    <Container sx={{ my: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We would love to hear from you! Please use the form below to get in touch with us.
      </Typography>

      <form>
        <Stack spacing={2}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>

    <Footer />
</>


  );
};

export default ContactUs;
