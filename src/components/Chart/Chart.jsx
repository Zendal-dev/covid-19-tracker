import { Bar } from '@reactchartjs/react-chart.js'
import { Grid } from '@material-ui/core'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
   return (
      <Grid item xs={12} md={8}>
         <Bar
            type="bar"
            data={ {
               labels: ['Инфецировано', 'Выздоровело', 'Летальные исходы'],
               datasets: [{
                  hoverBackgroundColor: [
                     'rgba(0, 0, 255, .5)',
                     'rgba(0, 255, 0, .5)',
                     'rgba(255, 0, 0, .5)'
                  ],
                  borderWidth: 1,
                  borderColor: [
                     'rgba(0, 0, 255, .5)',
                     'rgba(0, 255, 0, .5)',
                     'rgba(255, 0, 0, .5)'
                  ],
                  backgroundColor: [
                     'rgba(0, 0, 255, .3)',
                     'rgba(0, 255, 0, .3)',
                     'rgba(255, 0, 0, .3)'
                  ],
                  data: [confirmed, recovered, deaths]
               }],
            } }
            options={{
               legend: false,
               title: {
                  display: true,
                  text: `Актуальная статистика ${ country || 'Всем мире' }`
               },
               animation: {
                  duration: 250,
                  easing: 'linear',
               }
            }}
         />
      </Grid>
   )
}

export default Chart