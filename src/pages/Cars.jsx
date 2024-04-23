import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../pages/Car.css'

const Cars = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:9900/cars')
        setCars(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCars()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9900/cars/${id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {cars.map((car) => (
        <div className="card" key={car.id}>
          <p>{car.license_plate_number}</p>
          <p>{car.brand}</p>
          <p>{car.model}</p>
          <p>{car.daily_cost} €/day</p>
          <p>{car.created_at}</p>
          <p>{car.updated_at}</p>
          <button onClick={() => handleDelete(car.id)}>Delete</button>
          <button>
            <Link to={`/update/${car.id}`}>Update</Link>
          </button>
        </div>
      ))}
      <br />
      <br />
      <Link className="button_link" to="/add">
        Add a new car
      </Link>
    </div>
  )
}

export default Cars
