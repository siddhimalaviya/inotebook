import React, { Component } from 'react'
import loading from './/loading.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
         <img src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner
// style={{left: "50%",position: "absolute", textAlign: "center", top: "50%"}}