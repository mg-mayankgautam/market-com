import './Clients.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import covendx from '../../assets/covendx.jpeg'
import moheera from '../../assets/moheera.png'
import bhurji from '../../assets/bhurji.png'
import homeproj from '../../assets/homeproj.png'
import ruralhand from '../../assets/ruralhand.png'
import businesscard from '../../assets/businesscard.png'
import fuelmedia from '../../assets/fuelmedia.png'
import aadmiwala from '../../assets/aadmiwala.png'
import { Link } from 'react-router-dom';


const Clients = () => {

  const [style1, setStyle1] = useState({display:'none'})
  const [style2, setStyle2] = useState({display:'none'})
  const [style3, setStyle3] = useState({display:'none'})
  const [style4, setStyle4] = useState({display:'none'})
  const [style5, setStyle5] = useState({display:'none'})

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
        speed={1000}
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
            <div className='projectCard'
              onMouseEnter={e => { setStyle1({ display: 'flex' }) }}
              onMouseLeave={e => { setStyle1({ display: 'none' }) }}
              >
              <img src={covendx} alt="" loading='lazy' />
              {/* <div className='projName'>
                Covendx
              </div> */}
              <div className='projecthover' style={style1}>
                <div className='hoverbtn'>Read More</div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/project/moheera'>
            <div className='projectCard'
              onMouseEnter={e => { setStyle2({ display: 'flex' }) }}
              onMouseLeave={e => { setStyle2({ display: 'none' }) }}
              >
              <img src={moheera} alt="" loading='lazy' />
              {/* <div className='projName'>
                Moheera Jewels
              </div> */}
              <div className='projecthover' style={style2}>
                <div className='hoverbtn'>Read More</div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/project/bhurjielectronics'>
            <div className='projectCard'
              onMouseEnter={e => { setStyle3({ display: 'flex' }) }}
              onMouseLeave={e => { setStyle3({ display: 'none' }) }}
              >
              <img src={bhurji} alt="" loading='lazy' />
              {/* <div className='projName'>
                Bhurji Electronics
              </div> */}
              <div className='projecthover' style={style3}>
                <div className='hoverbtn'>Read More</div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        {/* <SwiperSlide>
          <Link>
            <div className='projectCard'>
              <img src={businesscard} alt="" style={{ objectPosition: 'center right' }} loading='lazy' />
              {/* <div className='projName'>
                Business Card UI
              </div> 
            </div>
          </Link>
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <Link to='https://www.thefuelmedia.co/' target='_blank'>
            <div className='projectCard'>
              <img src={fuelmedia} alt="" loading='lazy' />
              <div className='projName'>
                The Fuel Media
              </div>
            </div>
          </Link>
        </SwiperSlide> */}

        <SwiperSlide>
          <Link to='/project/aadmiwala'>
            <div className='projectCard'
              onMouseEnter={e => { setStyle4({ display: 'flex' }) }}
              onMouseLeave={e => { setStyle4({ display: 'none' }) }}
              >
              <img src={aadmiwala} alt="" loading='lazy' />
              {/* <div className='projName'>
                Aadmiwala
              </div> */}
              <div className='projecthover' style={style4}>
                <div className='hoverbtn'>Read More</div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/project/homeproject'>
            <div className='projectCard'
              onMouseEnter={e => { setStyle5({ display: 'flex' }) }}
              onMouseLeave={e => { setStyle5({ display: 'none' }) }}
              >
              <img src={homeproj} alt="" loading='lazy' />
              {/* <div className='projName'>
                Home Project
              </div> */}
              <div className='projecthover' style={style5}>
                <div className='hoverbtn'>Read More</div>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link>
            <div className='projectCard'>
              <img src={ruralhand} alt="" loading='lazy' />
              {/* <div className='projName'>
                Rural Handmade
              </div> */}
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