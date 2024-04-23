import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
  const [car, setCar] = useState({
    license_plate_number: '',
    brand: '',
    model: '',
    daily_cost: null,
    created_at: null,
    updated_at: null,
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(car)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:9900/cars', car)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <p>Add a new car</p>
      <div>
        <label>Licence plate number</label>
        <input
          type="text"
          name="license_plate_number"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Brand</label>
        <input type="text" name="brand" onChange={handleChange} />
      </div>
      <div>
        <label>Model</label>
        <input type="text" name="model" onChange={handleChange} />
      </div>
      <div>
        <label>Daily cost</label>
        <input type="number" name="daily_cost" onChange={handleChange} />
      </div>
      <div>
        <label>Created at</label>
        <input type="number" name="created_at" onChange={handleChange} />
      </div>
      <div>
        <label>Updated at</label>
        <input type="number" name="updated_at" onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
