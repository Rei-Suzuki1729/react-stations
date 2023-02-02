// DO NOT DELETE

import * as React from 'react'
import './App.css'

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
      .then((res) => res.json())
      .then((data) => { 
        setDogUrl(data.message)
      })
  }
  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の写真載せるアプリです</p>
      <img src={dogUrl}></img>
      <br/>
      <button onClick={fetchDog}>送信</button>
    </div>
  )
}
