import { useReducer } from 'react'
import CovidContext from './covidContext'
import covidReducer from './covidReducer'
import {
   SET_COUNTRIES,
   SET_COUNTRIES_STATS,
   SET_COUNTRY,
   SET_COVID_STATS,
   SET_IS_FETCHING_COUNTRIES_STATS,
   SET_IS_FETCHING_COVID_STATS
} from './types'
import covid from '../api'

const initialState = {
   stats: {},
   countries: [],
   countriesStats: [],
   country: null,
   isFetchingCountriesStats: false,
   isFetchingCovidStats: false
}

const CovidState = ({ children }) => {
   const [state, dispatch] = useReducer(covidReducer, initialState)
   const {
      stats,
      countries,
      countriesStats,
      country,
      isFetchingCountriesStats,
      isFetchingCovidStats
   } = state

   const setFetchingCovidStats = bool => dispatch({ type: SET_IS_FETCHING_COVID_STATS, payload: bool })
   const setFetchingCountriesStats = bool => dispatch({ type: SET_IS_FETCHING_COUNTRIES_STATS, payload: bool })

   const fetchCovidStats = async () => {
      setFetchingCovidStats(true)
      const stats = await covid.fetchGeneralStats()
      setFetchingCovidStats(false)
      dispatch({ type: SET_COVID_STATS, payload: stats })
   }

   const fetchCountries = async () => {
      const data = await covid.fetchCountries()
      dispatch({ type: SET_COUNTRIES, payload: data })
   }

   const fetchCountryStats = async country => {
      if (country !== 'all') {
         setFetchingCovidStats(true)

         const stats = await covid.fetchCountryStats(country)
         dispatch({ type: SET_COVID_STATS, payload: stats })

         setFetchingCovidStats(false)
      } else {
         fetchCovidStats()
      }

      dispatch({
         type: SET_COUNTRY,
         payload: country !== 'all' ? country : null
      })
   }

   const fetchCountriesStats = async () => {
      setFetchingCountriesStats(true)

      const res = []

      try {
         if (countries.length > 0) {
            const filteredCountries = countries.filter(country => country.name !== 'Gambia') // this country is not in the database

            for (const country of filteredCountries) {
               const countryStats = await covid.fetchCountryStats(country.name)
               res.push(countryStats)
            }
         }
      } catch (e) {
         console.error('fetchCountriesStats', e)
      } finally {
         setFetchingCountriesStats(false)
         dispatch({ type: SET_COUNTRIES_STATS, payload: res })
      }
   }

   return (
      <CovidContext.Provider value={{
         fetchCovidStats, fetchCountries,
         fetchCountryStats, fetchCountriesStats,
         stats, countries, country, countriesStats,
         isFetchingCountriesStats, isFetchingCovidStats
      }}>
         { children }
      </CovidContext.Provider>
   )
}

export default CovidState