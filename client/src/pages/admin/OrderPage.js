import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Label from "../../components/label";
import Iconify from "../../components/iconify";
import Scrollbar from "../../components/scrollbar";
// sections
import { UserListHead } from "../../sections/@dashboard/user";
// mock
import USERLIST from "../../_mock/user";
import axios from "axios";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Product Names", alignRight: false },
  { id: "company", label: "Amount Paid", alignRight: false },
  { id: "tran-id", label: "Tran ID", alignRight: false },
  { id: "upi-name", label: "UPI Name", alignRight: false },
  { id: "role", label: "Email", alignRight: false },
  { id: "isVerified", label: "Phone", alignRight: false },
  { id: "status", label: "Address", alignRight: false },
  { id: "date", label: "Created At", alignRight: false },
  { id: "" },
];

export default function OrderPage() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios.get("/user/order-all").then((res) => setOrder(res.data));
  }, []);
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Order
          </Typography>
        </Stack>

        <Card>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead headLabel={TABLE_HEAD} />
              <TableBody>
                {order.map((row) => {
                  const {
                    _id,
                    product,
                    amount,
                    user,
                    upi_name,
                    transection_id,
                    createdAt,
                  } = row;

                  return (
                    <TableRow hover key={_id} tabIndex={-1} role="checkbox">
                      <TableCell padding="checkbox"></TableCell>

                      <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2" noWrap>
                            {product.map((obj) => (
                              <p>{obj.title}</p>
                            ))}
                          </Typography>
                        </Stack>
                      </TableCell>

                      <TableCell align="left">{amount}</TableCell>

                      <TableCell align="left">{transection_id}</TableCell>
                      <TableCell align="left">{upi_name}</TableCell>

                      <TableCell align="left">{user?.email}</TableCell>

                      <TableCell align="left">{user?.phone}</TableCell>

                      <TableCell align="right">{user?.address}</TableCell>
                      <TableCell align="right">
                        {new Date(createdAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </>
  );
}
