import PropTypes from "prop-types";
// @mui
import { Box, Card, Link, Typography, Stack, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
import { fCurrency } from "../../../utils/formatNumber";
// components
import Label from "../../../components/label";
import { ColorPreview } from "../../../components/color-utils";
import { useState } from "react";
import ProductEditDialog from "./ProductEditDialog";
import Iconify from "../../../components/iconify/Iconify";

// ----------------------------------------------------------------------

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { title, image, price, label } = product;
  const [edit, setEdit] = useState(false);

  const toggle = () => setEdit((prev) => !prev);

  return (
    <>
      {edit && <ProductEditDialog {...product} toggle={toggle} />}
      <Card>
        <Box sx={{ pt: "100%", position: "relative" }}>
          {label && (
            <Label
              variant="filled"
              color={(label === "sale" && "error") || "info"}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: "absolute",
                textTransform: "uppercase",
              }}
            >
              {label}
            </Label>
          )}
          <Button
            variant="outlined"
            onClick={toggle}
            sx={{
              zIndex: 9,
              top: 16,
              left: 16,
              position: "absolute",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            <Iconify icon="ph:pen" />
          </Button>
          <StyledProductImg
            alt={title}
            src={`${process.env.REACT_APP_API}/public/product/image/${image}`}
          />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link color="inherit" underline="hover">
            <Typography variant="subtitle2" noWrap>
              {title}
            </Typography>
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">{fCurrency(price)}</Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
