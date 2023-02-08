// DO NOT DELETE

import * as React from 'react';

export const BreedsSelect = ({ breeds, onChange, selectedBreed }) => {
  return (
    <select value={selectedBreed} onChange={onChange}>
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}
