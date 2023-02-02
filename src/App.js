// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
/**
 * 
 * @type {React.FC}
 */


export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/springer-english/n02102040_3640.jpg',
  )

  const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <div>
      <Header />
      <Description dogUrl={dogUrl} fetchDog={fetchDog} />
    </div>
  )
}
