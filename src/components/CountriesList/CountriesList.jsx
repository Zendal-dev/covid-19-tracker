import React from 'react'
import { Box, Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core'

import { Loader } from '../index'

import * as s from './CountriesList.module.scss'

const CountriesList = ({ countriesStats, countries, isLoading }) => {
   const countriesList = countriesStats.length > 0
      ? countriesStats
         .filter(item => item)
         .map((item, index) => (
            <TableRow key={ index }>
               <TableCell className={ s.cell } padding="none">{ countries[index].name }</TableCell>
               <TableCell className={ s.cell } padding="none">{ item.confirmed }</TableCell>
            </TableRow>
         ))
      : [];

   return (
      <Grid item xs={ 8 } md={ 4 }>
         <Box marginTop={ 5 }>
            <Box fontSize="1.1rem" fontWeight={ 500 } marginBottom={ 1 } component="p">Подтвержденные случаи по
               странам</Box>
            <div className={ s.tableWrapper }>
               {
                  isLoading || countriesList.length === 0
                  ? <Loader center />
                  : (<Table>
                        <TableBody>
                           { countriesList }
                        </TableBody>
                     </Table>)
               }
            </div>
         </Box>
      </Grid>
   )
}

export default React.memo(CountriesList)