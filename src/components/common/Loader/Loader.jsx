import cn from 'classnames'
import * as s from './Loader.module.scss'

const Loader = ({ small, center, fast }) => (
   <div className={ cn({ [s.center]: center }) }>
      <svg className={ cn(s.spinner, { [s.small]: small, [s.fast]: fast }) } viewBox="0 0 50 50">
         <circle className={ s.path } cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
   </div>
)

export default Loader