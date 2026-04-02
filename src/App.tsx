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
        <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <span className="text-sm text-gray-500">This is a simple React app using Tailwind CSS.</span>
    </main>
  )
}

export default App
