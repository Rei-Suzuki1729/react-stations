import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'


export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('hound')
  const [selectedBreedList, setSelectedBreedList] = useState([])

  const handleBreedChange = event => {
    setSelectedBreed(event.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
      })
  }, [])


  const fetchBreedImg = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => {
        setSelectedBreedList(data.message)
      })
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleBreedChange}
      />
      <button onClick={fetchBreedImg}>表示</button>
      {selectedBreedList.map((url) => (
        <img src={url} key={url} />
      ))}
    </div>
  )
}


