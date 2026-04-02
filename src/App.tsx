import './App.css'
import AppButton from './components/button/app-button'
import AppInput from './components/input/app-input'

function App() {
  return (
    <main className="home">
      <h1>Hello-Home</h1>
      <img
        src={`${import.meta.env.BASE_URL}house.svg`}
        alt="Simple house"
        className="house-image"
      />
      <AppButton emoji='🔑' text='Login' />
      <AppInput placeholder='hola caracola' />
    </main>
  )
}

export default App
