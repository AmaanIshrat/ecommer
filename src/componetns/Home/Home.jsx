import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <>
      {/* Promotional Swiper Section */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/assets/Images/sl0.jpg')] bg-cover bg-center h-full">
            <div className="mx-auto w-full max-w-7xl">
              <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h4 className="text-4xl font-serif font-bold sm:text-5xl leading-tight sm:leading-snug text-purple-800 tracking-wider">
                      Click here to Know more
                      <span className="hidden sm:block text-4xl">Shopping</span>
                    </h4>

                    <Link
                      className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
                      to="/"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('/assets/Images/sl6.jpg')] bg-cover bg-center h-full">
            <div className="mx-auto w-full max-w-7xl">
              <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h4 className="text-4xl font-serif font-bold sm:text-5xl leading-tight sm:leading-snug text-purple-800 tracking-wider">
                      Discover Our Latest Collection!
                    </h4>
                    <Link
                      className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
                      to="/"
                    >
                      Click Here
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('/assets/Images/sl7.jpg')] bg-cover bg-center h-full">
            <div className="mx-auto w-full max-w-7xl">
              <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h4 className="text-4xl font-serif font-bold sm:text-5xl leading-tight sm:leading-snug text-purple-800 tracking-wider">
                      Seasonal Discounts Available!
                    </h4>
                    <Link
                      className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
                      to="/"
                    >
                      Click Here
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Category Swiper Section */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-12"
      >
        {/* Men's Collection Slide */}
        <SwiperSlide>
          <Link to="/men" className="category-card">
            <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden mx-auto border-2 border-purple-500 transform hover:scale-105 transition-all duration-300">
              <img
                className="w-full h-64 object-cover"
                src="/assets/Images/Men.jpg"
                alt="Men"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Men's Collection</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        {/* Women's Collection Slide */}
        <SwiperSlide>
          <Link to="/women" className="category-card">
            <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden mx-auto border-2 border-purple-500 transform hover:scale-105 transition-all duration-300">
              <img
                className="w-full h-64 object-cover"
                src="/assets/Images/Women.jpg"
                alt="Women"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Women's Collection</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        {/* Kids' Collection Slide */}
        <SwiperSlide>
          <Link to="/kids" className="category-card">
            <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden mx-auto border-2 border-purple-500 transform hover:scale-105 transition-all duration-300">
              <img
                className="w-full h-64 object-cover"
                src="/assets/Images/Kids.jpg"
                alt="Kids"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Kids' Collection</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      {/* Gap between last div and footer */}
      <div className="mb-12"></div>
    </>
  );
}
