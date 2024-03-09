import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Autoplay } from 'swiper/modules';


const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div className='grid'>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          we are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Discover a revolutionary approach to shopping with us, where
          convenience meets innovation. Experience a seamless journey as we
          redefine the way you browse, select, and purchase your favorite
          products. Join us as we transform the shopping experience, one click
          at a time
        </p>
        <div className='mt-10'>
          <Link className='btn btn-primary rounded-md' to='/products'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='swiper-container flex justify-center p-[6px] bg-gray-400 rounded-md shadow-md'>
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className='swiper h-[500px] max-sm:h-[300px]  object-cover rounded-md cursor-pointer'
        >
          <div className='swiper-wrapper'>
            {carouselImages.map((image) => {
              return (
                <SwiperSlide key={image} className='swiper-slide w-full h-full'>
                  <img
                    className=' max-h-full w-full h-full object-cover'
                    src={image}
                    alt={image}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Hero;
