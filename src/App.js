import * as React from 'react';

// import base material-ui components
import { Link, Typography } from '@mui/material';

// // import Blog component
import Blog from './components/Blog';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return <Blog />;
}
