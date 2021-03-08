import CardItem from '../CardItem/CardItem'
import { Grid } from '@material-ui/core'

const statNames = {
   confirmed: {
      name: 'Инфецировано',
      text: 'Число заболевших'
   },
   recovered: {
      name: 'Выздоровело',
      text: 'Число вылечившихся'
   },
   deaths: {
      name: 'Летальные исходы',
      text: 'Число умерших'
   }
}

const Cards = ({ data }) => {
   const { lastUpdate, ...mappedData } = data

   return (
      <Grid spacing={ 3 } justify="center" container>
         { Object.keys(mappedData).map(key => (
            <CardItem
               key={ key }
               name={ statNames[key].name }
               description={ statNames[key].text }
               value={ data[key] }
               type={ key }
               lastUpdate={ lastUpdate }
            />
         )) }
      </Grid>
   )
}

export default Cards