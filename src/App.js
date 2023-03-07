import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Modal from "./Modal";
import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Typography,
  Container,
  Toolbar,
  Link,
  CssBaseline,
  SvgIcon,
} from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        NFT Marketplace Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const cards = [
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
  { title: "Wolf", price: Math.random().toFixed(3), url: "images/NFT.jpg" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(0);
  const [data, setData] = useState({});
  const theme = useTheme();

  useEffect(() => {
    setData(cards[selectedArt]);
  }, [selectedArt]);

  const handleClickOpen = (param) => {
    setOpen(true);
    setSelectedArt(param);
  };

  const modalClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon sx={{ fontSize: 30 }} />
          <Typography variant="h6" color="inherit" noWrap>
            NFT Marketplace
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Start Header */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              NFT List
            </Typography>
          </Container>
        </Box>
        {/* End Header */}
        <Container sx={{ py: 2 }} maxWidth="xl">
          {/* Start Card List */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={4}
                md={3}
                onClick={() => handleClickOpen(index)}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: "8px 8px 0 0",
                    }}
                    image={card.url}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title} {"#"}
                      {index + 1}
                    </Typography>
                    <Typography variant="h6">
                      {card.price}
                      {" ETH"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End Card List */}
        </Container>
      </main>
      {/* Modal */}
      <Modal
        data={data}
        selectedArt={selectedArt}
        open={open}
        modalClose={modalClose}
      />
      {/* Start footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We can enjoy our NFT!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
