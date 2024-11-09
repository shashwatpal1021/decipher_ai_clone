import Body from "./components/Body"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <div className="flex flex-col justify-center align-center m-5 p-2  w-[90%]">
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
