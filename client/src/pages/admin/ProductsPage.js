import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
// @mui
import { Button, Container, Stack, Typography } from "@mui/material";
import Iconify from "../../components/iconify/Iconify";
// components
import { ProductList } from "../../sections/@dashboard/products";
import { ProductAddDialog } from "../../sections/@dashboard/products";
import axios from "axios";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [products, setProduct] = useState([]);

  const fetchProduct = () => {
    axios
      .get("/product")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" sx={{ mb: 5 }}>
            Products
          </Typography>
          <Button
            variant="contained"
            id="product-refresh"
            onClick={fetchProduct}
            startIcon={<Iconify icon="material-symbols:refresh" />}
            sx={{ marginLeft: "auto", marginRight: "20px" }}
          >
            Refresh
          </Button>
          <ProductAddDialog />
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        ></Stack>

        <ProductList products={products} />
      </Container>
    </>
  );
}
