import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [car, setCar] = useState({
    brand: '',
    model: '',
    engine: null,
    torque: null,
    price: null,
  })

  const navigate = useNavigate()
  const location = useLocation()

  const carId = location.pathname.split('/')[2]

  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(car)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.put('http://localhost:9900/cars/' + carId, car)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <p>Update the car</p>
      <div>
        <label>Brand</label>
        <input type="text" name="brand" onChange={handleChange} />
      </div>
      <div>
        <label>Model</label>
        <input type="text" name="model" onChange={handleChange} />
      </div>
      <div>
        <label>Engine</label>
        <input type="number" name="engine" onChange={handleChange} />
      </div>
      <div>
        <label>Torque</label>
        <input type="number" name="torque" onChange={handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input type="number" name="price" onChange={handleChange} />
      </div>
      <br />
      <br />
      <button onClick={handleClick}>Update</button>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  )
}

export default Update
