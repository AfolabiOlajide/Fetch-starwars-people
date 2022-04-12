import React, { useState } from 'react'

import classes from './Body.module.css'
import Person from './Person'

const URI = `https://swapi.dev/api/people/`

const Body = () => {
    const [people, setPeople] = useState([]);
    const fetchData = async () => {
        try {
            // const response = await fetch(`https://swapi.dev/api/people/`)
            // const data = () => {response.json()} 
            // const results = data.results
            // // const peoples = results.map(people => {
            // //     return setPeople(prev =>  {
            // //         return [...prev, {name : people.name}]
            // //     })
            // // })
            fetch(URI).then(response => {
                return response.json();
            }).then(data => {
                const peopleInfo = data.results.map(info => {
                    return {
                        id: info.name + info.mass,
                        name: info.name,
                        height: info.height,
                        gender: info.gender
                    }
                })
                setPeople(peopleInfo);
            })

            // console.log(results);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={classes.body}>
        <button onClick={fetchData}>Fetch Starwars People</button>
        { people.length < 1 && <div className={classes.error}>No available Data</div> }
        { people &&  people.map(person => <Person key={person.id} name={person.name} height={person.height} gender={person.gender} />)}
    </div>
  )
}

export default Body