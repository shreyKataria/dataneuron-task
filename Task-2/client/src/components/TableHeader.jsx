/* eslint-disable react/prop-types */
import { Box, Card, Typography } from "@mui/material";

function TableHeader({ counts }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 3,
      }}>
      <Card sx={{ padding: "10px", margin: "15px", textAlign: "center" }}>
        <Typography variant="body1" sx={{ fontSize: 26 }}>
          Add Count:{" "}
          <span style={{ fontWeight: "bold" }}>{counts?.addCount ?? 0}</span>
        </Typography>
      </Card>
      <Card sx={{ padding: "10px", margin: "15px", textAlign: "center" }}>
        <Typography variant="body1" sx={{ fontSize: 26 }}>
          Update Count:{" "}
          <span style={{ fontWeight: "bold" }}>{counts?.updateCount ?? 0}</span>
        </Typography>
      </Card>
    </Box>
  );
}

export default TableHeader;
