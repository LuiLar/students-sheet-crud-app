import {type ReactElement, useEffect, useState} from 'react'
import './App.css'

interface Student {
  _id: string
  first_name: string
  last_name: string
  age: number
}

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const data = await fetch('http://localhost:3000/students')
        const result = await data.json()

        setStudents(result)
      } catch (e) {
        console.error(e)
      }
    }

    fetchAllStudents()
  }, [])

  return (
    <div>
    {
      students.map(({ _id, first_name, last_name, age }: Student): ReactElement => (
        <div key={_id}>
          <p>{first_name}</p>
          <p>{last_name}</p>
          <p>{age}</p>
        </div>
      ))
    }
    </div>
  )
}

export default App
