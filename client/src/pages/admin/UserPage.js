import { sentenceCase } from "change-case";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
} from "@mui/material";
// components
import { UserListHead } from "../../sections/@dashboard/user";
import Label from "../../components/label";
import Scrollbar from "../../components/scrollbar";
import axios from "axios";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const TABLE_HEAD = [
    { id: "name", label: "Name", alignRight: false },
    { id: "phone", label: "Phone", alignRight: false },
    { id: "email", label: "Email", alignRight: false },
    { id: "address", label: "Address", alignRight: false },
    { id: "is_admin", label: "Is Admin", alignRight: false },
    { id: "" },
  ];

  useEffect(() => {
    axios
      .get("/user/get-all")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
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
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
        </Stack>

        <Card>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead headLabel={TABLE_HEAD} />
              <TableBody>
                {users.map((row) => {
                  const {
                    _id,
                    address,
                    createdAt,
                    email,
                    first_name,
                    is_admin,
                    last_name,
                    phone,
                  } = row;

                  return (
                    <TableRow hover key={_id} tabIndex={-1} role="checkbox">
                      <TableCell padding="checkbox"></TableCell>

                      <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2" noWrap>
                            {first_name + " " + last_name}
                          </Typography>
                        </Stack>
                      </TableCell>

                      <TableCell align="left">{phone}</TableCell>

                      <TableCell align="left">{email}</TableCell>

                      <TableCell>{address}</TableCell>

                      <TableCell align="left">
                        <Label color={(!is_admin && "error") || "success"}>
                          {is_admin ? "Yes" : "No"}
                        </Label>
                      </TableCell>
                      <TableCell align="left">
                        <Label>
                          {new Date(createdAt).toLocaleDateString()}
                        </Label>
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
