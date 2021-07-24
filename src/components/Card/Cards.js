import React from 'react'
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import styles from './Card.module.css'

const Cards = ({data: {TotalCases, NewCases, TotalRecovered, NewRecovered, TotalDeaths, NewDeaths, ActiveCases, Recovery_Proporation, Case_Fatality_Rate}}) => {
    if(!TotalCases) {
        return 'Fethcing Data'
    }
    return (
        <div className={styles.container}>
           <Grid> 
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>Total Cases</Typography>
                       <Typography variant="h5">{TotalCases}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>Total Recovered</Typography>
                       <Typography variant="h5">{TotalRecovered}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>Total Deaths</Typography>
                       <Typography variant="h5">{TotalDeaths}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>New Cases</Typography>
                       <Typography variant="h5">{NewCases}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>New Recovered</Typography>
                       <Typography variant="h5">{NewRecovered}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>NewDeaths</Typography>
                       <Typography variant="h5">{NewDeaths}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>ActiveCases</Typography>
                       <Typography variant="h5">{ActiveCases}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>Recovery_Proporation</Typography>
                       <Typography variant="h5">{Recovery_Proporation}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card}>
                   <CardContent>
                       <Typography>Case_Fatality_Rate</Typography>
                       <Typography variant="h5">{Case_Fatality_Rate}</Typography>
                       <Typography color="textSecondary">Real Date</Typography>
                       <Typography color="textSecondary">Current covid cases</Typography>
                   </CardContent>
               </Grid>
           </Grid>
        </div>
    )
}

export default Cards
