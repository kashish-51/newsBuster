import React, { Component } from 'react'
import loading from './loading.gif.gif'

export default class Spineer extends Component {
  render() {
    return (
      <div className='flex items-center justify-center mt-10'>
        <img className='h-[62px] w-[62px] ' src={loading} alt= "loading"/>
      </div>
    )
  }
}
