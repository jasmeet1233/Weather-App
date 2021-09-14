import React, { useState } from 'react'
import { useGlobalState } from './context'
import './index.css'

const Form = () => {
    const {searchHandler} = useGlobalState()
    const [city, setCity] = useState('')
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchHandler(city);
        }}
      >
        <div className="form">
          <input
            type="text"
            placeholder="add place"
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    );
}

export default Form
