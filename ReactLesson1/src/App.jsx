import Child1 from "./Child1"
import Child2 from "./child2"

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <Child1 />
      <Child2 />
      <AnotherComponent />
    </>
  )
}

function AnotherComponent(){
  return (
    <>
      <h2>Another Component!!</h2>
    </>
  )
}

export default App
