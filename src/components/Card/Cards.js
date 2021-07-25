import React from 'react'
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'; 

const Cards = ({data: {TotalCases, NewCases, TotalRecovered, NewRecovered, TotalDeaths, NewDeaths, ActiveCases, Recovery_Proporation, Case_Fatality_Rate}}) => {
    if(!TotalCases) {
        return 'Fethcing Data'
    }
    return (
        <div className={styles.container}>
           <Grid container spacing={2} justifyContent="center"> 
               <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.totalCases)}>
                   <CardContent>
                       <Typography  gutterBottom>Total Confirmed Cases</Typography>
                       <Typography variant="h5">
                          <CountUp 
                          start={0}
                          end={TotalCases}
                          separator={","}
                          />
                       </Typography>
                       <Typography >Real Date</Typography>
                       <Typography>Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>

               <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.totalRecovered)}>
                   <CardContent>
                       <Typography gutterBottom>Total Recovered Cases</Typography>
                       <Typography variant="h5"> 
                       <CountUp 
                          start={0}
                          end={TotalRecovered}
                          separator={","}
                          /></Typography>
                       <Typography >Real Date</Typography>
                       <Typography> People Recovered from COVID-19</Typography>
                   </CardContent>
               </Grid>

                <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.totalDeaths)}>
                   <CardContent>
                       <Typography  gutterBottom>Total Deaths</Typography>
                       <Typography variant="h5">
                        <CountUp 
                          start={0}
                          end={TotalDeaths}
                          separator={","}
                          />
                          </Typography>
                       <Typography >Real Date</Typography>
                       <Typography >Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>

                <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.newCases)}>
                   <CardContent>
                       <Typography  gutterBottom>New Cases</Typography>
                       <Typography variant="h5">
                       <CountUp 
                          start={0}
                          end={NewCases}
                          separator={","}
                          />
                       </Typography>
                       <Typography >Real Date</Typography>
                       <Typography >Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>

               <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.newRecovered)}>
                   <CardContent>
                       <Typography gutterBottom>New Recovered Cases</Typography>
                       <Typography variant="h5">
                       <CountUp 
                          start={0}
                          end={NewRecovered}
                          separator={","}
                          />
                       </Typography>
                       <Typography >Real Date</Typography>
                       <Typography >Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.newDeaths)}>
                   <CardContent>
                       <Typography  gutterBottom>New Deaths Cases</Typography>
                       <Typography variant="h5">
                       <CountUp 
                          start={0}
                          end={NewDeaths}
                          separator={","}
                          />
                       </Typography>
                       <Typography >Real Date</Typography>
                       <Typography>Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.activeCases)}>
                   <CardContent>
                       <Typography  gutterBottom>Active Cases</Typography>
                       <Typography variant="h5">
                       <CountUp 
                          start={0}
                          end={ActiveCases}
                          separator={","}
                          />
                       </Typography>
                       <Typography >Real Date</Typography>
                       <Typography >Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.caseFertility)}>
                   <CardContent>
                       <Typography gutterBottom>Case Fertility Rate</Typography>
                       <Typography variant="h5">
                       <CountUp 
                          start={0}
                          end={Case_Fatality_Rate}
                          separator={","}
                          />
                       </Typography>
                       <Typography >Real Date</Typography>
                       <Typography >Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recoveryProporation)}>
                   <CardContent>
                       <Typography  gutterBottom>Recovery Proporation</Typography>
                       <Typography variant="h5">
                       <CountUp 
                          start={0}
                          end={Recovery_Proporation}
                          separator={","}
                          />
                       </Typography>
                       <Typography >Real Date</Typography>
                       <Typography >Number of Total Covid-19 Cases</Typography>
                   </CardContent>
               </Grid>
           </Grid>
        </div>
    )
}

export default Cards
