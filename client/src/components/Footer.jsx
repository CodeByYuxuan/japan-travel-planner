// src/components/Footer.jsx
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "1rem",
        marginTop: "auto",
        bgcolor: "#f0f0f0",
      }}
    >
      <Typography variant="body2">© 2025 Japan Travel Planner</Typography>
    </Box>
  );
}
