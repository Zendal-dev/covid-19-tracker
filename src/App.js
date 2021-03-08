import { useEffect, useContext } from 'react'

import { Box, Container, Grid } from '@material-ui/core'
import { Cards, Chart, CountriesList, CountrySelect } from './components'

import CovidContext from './context/covidContext'

const App = () => {
   const {
      stats,
      countries,
      countriesStats,
      country,
      isFetchingCountriesStats,
      isFetchingCovidStats,
      fetchCovidStats,
      fetchCountries,
      fetchCountryStats,
      fetchCountriesStats
   } = useContext(CovidContext)

   useEffect(() => {
      fetchCovidStats()
      fetchCountries()
      // eslint-disable-next-line
   }, [])

   useEffect(() => {
      fetchCountriesStats()
      // eslint-disable-next-line
   }, [countries])

   return (
      <Container maxWidth="lg">
         <Box
            component="h1"
            fontSize="5rem"
            textAlign="center"
            fontWeight={ 700 }
         >
            Covid-19
         </Box>

         <Cards data={ stats }/>
         <CountrySelect
            isLoading={ isFetchingCovidStats }
            handleCountryChange={ fetchCountryStats }
            countries={ countries }
         />

         <Grid container justify="center" spacing={ 3 }>
            <Chart
               data={ stats }
               country={ country }
            />
            <CountriesList
               isLoading={ isFetchingCountriesStats }
               countriesStats={ countriesStats }
            />
         </Grid>
      </Container>
   )
}

export default App
