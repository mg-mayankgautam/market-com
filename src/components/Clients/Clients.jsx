import './Clients.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import covendx from '../../assets/covendx.png'
import moheera from '../../assets/moheera.png'
import bhurji from '../../assets/bhurji.png'
import homeproj from '../../assets/homeproj.png'
import ruralhand from '../../assets/ruralhand.png'
import { Link } from 'react-router-dom';

const Clients = () => {

  return (

    <div className='Clients'>

      <div className='clientsHead'>Our Clientelle</div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}s
        modules={[Pagination, Navigation, Mousewheel, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <Link to='https://covendx.com/' target='_blank'>
            <div className='projectCard'>
              <img src={covendx} alt="" />
              <div className='projName'>
                Covendx
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link>
            <div className='projectCard'>
              <img src={moheera} alt="" />
              <div className='projName'>
                Moheera Jewels
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='https://www.bhurjielectronics.com/' target='_blank'>
            <div className='projectCard'>
              <img src={bhurji} alt="" />
              <div className='projName'>
                Bhurji Electronics
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link>
            <div className='projectCard'>
              <img src={homeproj} alt="" />
              <div className='projName'>
                Home Project
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='https://ruralhandmade.com/' target='_blank'>
            <div className='projectCard'>
              <img src={ruralhand} alt="" />
              <div className='projName'>
                Rural Handmade
              </div>
            </div>
          </Link>
        </SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default Clients


{/* aadmiwala
    
    The House Of Esports Website
*/}