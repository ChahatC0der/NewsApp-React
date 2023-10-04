// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { useState } from 'react'

// Class based component
// export default class App extends Component {
//   apiKey=process.env.REACT_APP_NEWS_API
//   pageSize=10; 
//   country='in';
//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
//     this.setState({progress:progress})
//   }
//   render() {

//     return (
//       <div>
//         <Router>
//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         height={4}
//         />
//         <Navbar />
//         <Routes>
//         <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country={country} category="general" />}></Route>
//           <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country={country} category="business" />}></Route>
//           <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country={country} category="entertainment" />}></Route>
//           <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country={country} category="general" />}></Route>
//           <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country={country} category="health" />}></Route>
//           <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country={country} category="science" />}></Route>
//           <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country={country} category="sports" />}></Route>
//           <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country={country} category="technology" />}></Route>
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

// Functional based component
const App = ()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const pageSize=10; 
  const country='in';
  // state={
  //   progress:0
  // }
  const [progress,setProgress]=useState(0);
  // const setProgress=(progress)=>{
  //   this.setState({progress:progress})
  // }
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        />
        <Navbar />
        <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country={country} category="general" />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country={country} category="business" />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country={country} category="entertainment" />}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country={country} category="general" />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country={country} category="health" />}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country={country} category="science" />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country={country} category="sports" />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country={country} category="technology" />}></Route>
        </Routes>
        </Router>
      </div>
    )
  }

export default App;  
