import React from 'react'
import { gallery } from './data'

function Gallery({gallery}) {

    const{id,title,description,price,link,images}= gallery;
  return (
    <div className='gallery'>
        <div>
            <img src={images} width={230} height={200}/>

            <h4 className='gallery-title'>{title}🤩</h4>
            <h5 className='gallery-desc'>{description}</h5>
            <h3 className='gallery-price'>{price}💲  </h3>
            <div className='gallery-link'><a href={link} style={{textDecoration:'none', color:'black'}}>BENCE TIKLA</a> </div>
        </div>

    </div>
  )
}

export default Gallery