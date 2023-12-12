import React from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Banner (props) {
    const {data,images} = props;

  return (
    <div style={{height:'25vh', width:'100%'}}>
    <Carousel className='w-100' interval={'1500'} >
        {data && data.map((picture,index) =>{
             
return (
        <Carousel.Item key={picture.id} className='w-100'>
            <div className='image-wreapper w-100 h-50'>
            <img className="d-block" style={{ objectFit: 'cover', height: '50%' }} src={images[index]}/>
            </div>
            <Carousel.Caption>
                <h3>{picture.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
                
            )
        })}
       
    </Carousel>
    </div>
    )
}

export default Banner
