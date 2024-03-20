/* eslint-disable react/prop-types */
import { useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, TextField } from "@mui/material";

const TableContent = ({
  data,
  item,
  setItem,
  handleAddBtn,
  handleUpdateBtn,
  id,
  setId,
}) => {
  const inputRef = useRef(null);

  const handleBtn = (e) => {
    if (id) {
      handleUpdateBtn(e);
    } else {
      handleAddBtn(e);
    }
  };

  const handleClickEditBtn = (_id, value) => {
    inputRef.current.focus();
    console.log(_id);
    setId(_id);
    setItem(value);
  };
  console.log(data);
  return (
    <>
      <Box>
        <Box>
          <form>
            <TextField
              ref={inputRef}
              autoFocus
              placeholder="Add item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <IconButton type="submit" onClick={(e) => handleBtn(e)}>
              <AddIcon />
            </IconButton>
          </form>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell> Items </TableCell>
                  <TableCell align="right">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map(({ value, _id }) => (
                  <TableRow
                    key={_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {value}
                    </TableCell>

                    <TableCell align="right">
                      <IconButton
                        color="error"
                        onClick={() => handleClickEditBtn(_id, value)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default TableContent;
