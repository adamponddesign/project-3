import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ImageCarousel = ( { data }) => {
  return (


    <Carousel
      autoPlay
      infiniteLoop={true}
    >
      {
        data.images.map((url, index) => (
          <img key={index} src={url} />
        ))
      }

    </Carousel>
  )
}

export default ImageCarousel
