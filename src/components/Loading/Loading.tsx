import React from 'react'
import loadingImage from '../../assets/images/loading.jpeg'

 const Loading = () => {
  return (
    <img src={loadingImage}
      alt='Please, Wait'
      className='w-screen h-screen'>
    </img>
  )
}

export default Loading
