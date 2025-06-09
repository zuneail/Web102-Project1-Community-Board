import './App.css';
import Calendar from './components/Calendar';
const App = () => {

  return (
    <div className="App">
      <img src='https://www.getintogaffney.com/wp-content/uploads/2024/01/foodtruck3-1024x304.png' alt="NYC Food Trucks" className="header-image" />
      <h1> Truck Finder </h1>
      <h2> The best food trucks around!</h2>
      <Calendar />
    </div>
  )
}

export default App