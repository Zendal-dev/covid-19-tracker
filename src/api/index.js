import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://covid19.mathdro.id/api'
})

const getStats = async url => {
   const { data: { confirmed, recovered, deaths, lastUpdate } } = await instance.get(url)

   return {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate
   }
}

const covid = {
   async fetchGeneralStats() {
      try {
         const { confirmed, recovered, deaths, lastUpdate } = await getStats()

         return { confirmed, recovered, deaths, lastUpdate }
      } catch(e) {
         console.error('fetchGeneralStats', e)
      }
   },

   async fetchCountries() {
      try {
         const { data: { countries } } = await instance.get('countries')

         return countries
      } catch(e) {
         console.error('fetchCountries', e)
      }
   },

   async fetchCountryStats(country) {
      try {
         const { confirmed, recovered, deaths } = await getStats(`countries/${country}`)

         return { confirmed, recovered, deaths }
      } catch(e) {
         console.error('fetchCountryStats', e)
      }
   }
}

export default covid