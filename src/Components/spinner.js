import React from 'react'
import loading from './Spinner-3.gif'

// Class based component
// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={loading} alt="spinner" />
//       </div>
//     )
//   }
// }
// Functional based component
const Spinner = ()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="spinner" />
      </div>
    )
  }

export default Spinner;
