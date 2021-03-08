import {
   SET_COUNTRIES,
   SET_COVID_STATS,
   SET_COUNTRY,
   SET_COUNTRIES_STATS,
   SET_IS_FETCHING_COVID_STATS,
   SET_IS_FETCHING_COUNTRIES_STATS
} from './types'

const handlers = {
   [SET_COVID_STATS]: (state, { payload }) => ({ ...state, stats: { ...payload } }),
   [SET_COUNTRIES]: (state, { payload }) => ({ ...state, countries: [ ...payload ] }),
   [SET_COUNTRY]: (state, { payload }) => ({ ...state, country: payload }),
   [SET_COUNTRIES_STATS]: (state, { payload }) => ({ ...state, countriesStats: [ ...payload ] }),
   [SET_IS_FETCHING_COVID_STATS]: (state, { payload }) => ({ ...state, isFetchingCovidStats: payload }),
   [SET_IS_FETCHING_COUNTRIES_STATS]: (state, { payload }) => ({ ...state, isFetchingCountriesStats: payload }),
   DEFAULT: state => state
}

const covidReducer = (state, action) => {
   const handler = handlers[action.type] || handlers.DEFAULT
   return handler(state, action)
}

export default covidReducer