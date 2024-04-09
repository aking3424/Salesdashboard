import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import './App.css';


const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.dashboardHeader}>
            <Typography variant="h4">The King's Restaurant Dashboard</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Sales Figures</Typography>
            <Typography variant="body1">Total Sales: $10000</Typography>
            <Typography variant="body1">Growth Rate: 15%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">New Client Numbers</Typography>
            <Typography variant="body1">New Clients: 50</Typography>
            <Typography variant="body1">Conversion Rate: 10%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Traffic Received</Typography>
            <Typography variant="body1">Visitors: 1000</Typography>
            <Typography variant="body1">Bounce Rate: 20%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Revenue Generated</Typography>
            <Typography variant="body1">Total Revenue: $20000</Typography>
            <Typography variant="body1">Profit Margin: 25%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Recent Transactions</Typography>
            <ul>
              <li>Date: 2024-04-15, Amount: $150</li>
              <li>Date: 2024-04-14, Amount: $200</li>
              <li>Date: 2024-04-13, Amount: $100</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Traffic Sign 1</Typography>
            {/* Add traffic sign 1 */}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Traffic Sign 2</Typography>
            {/* Add traffic sign 2 */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;