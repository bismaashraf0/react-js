function App() {
  const[count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Project 1</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App
