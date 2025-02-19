import './App.css'
import './index.css'

function App() {
  return (
    <>
      <a>
        <img src="./pom-dark.svg" alt="PoM Logo" className="icon-rim-dark spin"></img>
        <img src="./pom-white.svg" alt="PoM Logo" className="icon-rim-light spin"></img>
        <img src="./pom-green.svg" alt="PoM Logo" className="icon spin"></img>
      </a>
      <div className="wrapper">
        <p className="title text" data-text="Peace of Mind">Peace of Mind</p>
        <p className="title-rim text">Peace of Mind</p>
        <div className="body"></div>
      </div>
      <div className="mind-rim text">Mind</div>
      <div className="mind text">Mind</div>
      <div className="of text">of</div>
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
