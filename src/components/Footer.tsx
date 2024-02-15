import { Typography, Grid } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ borderTop: "5px solid #3C493F", marginTop: "2rem" }}
      >
        <Grid item xs={12} md={4}>
          <Logo />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            © useConvertly.com v1.23 All rights reserved
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">Built by e.fkumah</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
