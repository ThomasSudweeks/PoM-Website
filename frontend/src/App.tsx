import './App.css'

function App() {
  return (
    <>
      <img src="./pom-dark.svg" alt="PoM Logo" className="icon-rim-dark"></img>
      <img src="./pom-white.svg" alt="PoM Logo" className="icon-rim-light"></img>
      <img src="./pom-green.svg" alt="PoM Logo" className="icon"></img>
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
