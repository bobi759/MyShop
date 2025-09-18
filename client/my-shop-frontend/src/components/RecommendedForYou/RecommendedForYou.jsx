import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const books = [
  { title: "Homie", price: 25.5, image: "/images/homie.png" },
  { title: "Thunder Stunt", price: 16.7, image: "/images/thunder.png" },
  { title: "Heavy Lift", price: 19.25, image: "/images/heavy.png" },
  { title: "Real Life", price: 27.3, image: "/images/real.png" },
  { title: "Terrible", price: 24.89, image: "/images/terrible.png" },
];

export const RecommendedForYou = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "60px 0" }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Recommended For You
        </Typography>
        <Typography
          align="center"
          sx={{ mb: 6, maxWidth: "700px", mx: "auto", color: "text.secondary" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor...
        </Typography>

        {/* Books in one row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {books.map((book, index) => (
            <Card
              key={index}
              style={{
                flex: "1 1 18%", // 👈 ensures 5 cards fit in a row
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                image={book.image}
                alt={book.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography color="primary">
                  ${book.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  sx={{ mt: 2, borderRadius: 2 }}
                >
                  Add To Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};
