import Body from "./components/Body"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <div className="flex flex-col justify-center align-center m-[1vw] pl-[1vw] pr-[1vw] ">
        <div>
          <NavBar />
          <div>
            <Body />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
