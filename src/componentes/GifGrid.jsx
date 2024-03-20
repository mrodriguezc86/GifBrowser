import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getGifs';
import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs( category )
   

  return (
    <div>
      <h3>{category}</h3>

      {isLoading && (<h2>Loading...</h2>)}

      <div className='card-grid'>
        {images.map((image)=>{
          return <GifItem key={image.id} {...image}></GifItem>
        })}

      </div>
      
    
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

