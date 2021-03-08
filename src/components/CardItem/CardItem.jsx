import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cn from 'classnames'

import * as s from './CardItem.module.scss'

const CardItem = ({ name, value, type, lastUpdate, description }) => {
   const currentDate = new Date(lastUpdate).toLocaleDateString()

   return (
      <Grid item>
         <Card>
            <CardContent className={ cn(s.card, s[type]) }>
               <Typography color="textSecondary" gutterBottom>{ name }</Typography>
               <Typography variant="h5">
                  <CountUp
                     start={ 0 }
                     end={ value }
                     duration={ 1 }
                     separator=","
                  />
               </Typography>
               <Typography color="textSecondary">{ currentDate }</Typography>
               <Typography variant="body2">{ description }</Typography>
            </CardContent>
         </Card>
      </Grid>
   )
}

export default CardItem