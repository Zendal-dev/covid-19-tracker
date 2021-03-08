import { Box, NativeSelect } from '@material-ui/core'
import * as s from './CountrySelect.module.scss'
import { Loader } from '../index'

const CountrySelect = ({ countries, isLoading, handleCountryChange }) => {
   return (
      <Box display="flex" alignItems="flex-end" justifyContent="center" marginTop={7} marginBottom={7}>
         { isLoading && <Loader small fast /> }
         <NativeSelect className={s.select} onChange={ e => handleCountryChange(e.currentTarget.value) }>
            <option value="all">Весь мир</option>

            { countries.map(item => (
               <option
                  key={item.name}
                  value={item.name}
               >
                  { item.name }
               </option>
            )) }
         </NativeSelect>
      </Box>
   )
}

export default CountrySelect