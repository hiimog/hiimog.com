import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button"

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Button >
        <Typography variant="h4" component="h1" gutterBottom>
          Hello World
        </Typography>
        
        </Button>
      </Box>
    </Container>
  );
}