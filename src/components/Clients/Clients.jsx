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
import businesscard from '../../assets/businesscard.png'
import fuelmedia from '../../assets/fuelmedia.png'
import aadmiwala from '../../assets/aadmiwala.png'
import { Link } from 'react-router-dom';


const Clients = () => {

  return (

    <div className='Clients'>

      <div className='clientsHead'>Our Clientelle</div>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        // mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1800}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation, Mousewheel, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <Link to='/project/covendx'>
            <div className='projectCard'>
              <img src={covendx} alt="" />
              <div className='projName'>
                Covendx
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/project/moheera'>
            <div className='projectCard'>
              <img src={moheera} alt="" />
              <div className='projName'>
                Moheera Jewels
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/project/bhurjielectronics'>
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
              <img src={businesscard} alt="" style={{objectPosition:'center right'}}/>
              <div className='projName'>
                Business Card UI
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='https://www.thefuelmedia.co/' target='_blank'>
            <div className='projectCard'>
              <img src={fuelmedia} alt="" />
              <div className='projName'>
                The Fuel Media
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/project/aadmiwala'>
            <div className='projectCard'>
              <img src={aadmiwala} alt="" />
              <div className='projName'>
                Aadmiwala
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/project/homeproject'>
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


// const projects = [
//   {
//     id: 1,
//     link: '',
//     imgSrc: covendx,
//     name: 'Covendx',
//     style: {}
//   },
//   {
//     id: 2,
//     link: '',
//     imgSrc: moheera,
//     name: 'Moheera Jewels',
//     style: {}
//   },
//   {
//     id: 3,
//     link: '',
//     imgSrc: bhurji,
//     name: 'Bhurji Electronics',
//     style: {}
//   },
//   {
//     id: 4,
//     link: '',
//     imgSrc: businesscard,
//     name: 'Business Card UI',
//     style: { objectPosition: 'center right' }
//   },
//   {
//     id: 5,
//     link: 'https://www.thefuelmedia.co/',
//     imgSrc: fuelmedia,
//     name: 'The Fuel Media',
//     style: {}
//   },
//   {
//     id: 6,
//     link: '',
//     imgSrc: aadmiwala,
//     name: 'Aadmiwala',
//     style: {}
//   },
//   {
//     id: 7,
//     link: '',
//     imgSrc: homeproj,
//     name: 'Home Project',
//     style: {}
//   },
//   {
//     id: 8,
//     link: '',
//     imgSrc: ruralhand,
//     name: 'Rural Handmade',
//     style: {}
//   }
// ];