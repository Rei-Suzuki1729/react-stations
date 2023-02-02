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
  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の写真載せるアプリです</p>
      <img src={dogUrl}></img>
    </div>
  )
}
