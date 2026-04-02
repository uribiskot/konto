import './App.css'

function App() {
  return (
    <main className="home">
      <h1>Hello-Home</h1>
      <img
        src={`${import.meta.env.BASE_URL}house.svg`}
        alt="Simple house"
        className="house-image"
      />
    </main>
  )
}

export default App
