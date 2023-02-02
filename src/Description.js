// DO NOT DELETE

import * as React from 'react'
import { DogImage } from './DogImage'

export const Description = ({ dogUrl, fetchDog }) => {
  return (
    <div className="content">
      <p>犬の写真載せるアプリです</p>
      <DogImage url={dogUrl} />
      <button onClick={fetchDog}>送信</button>
    </div>
  )
}