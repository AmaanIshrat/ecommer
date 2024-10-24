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
                      to="/knowme"
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
                      Discover Our Latest Collection for Men!
                    </h4>
                    <Link
                      className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
                      to="/men"
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
                      Seasonal Discounts Available for Women Collections!
                    </h4>
                    <Link
                      className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
                      to="/Women"
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
          <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden mx-auto border-2 border-purple-500 transform hover:scale-105 transition-all duration-300">
            <Link to="/men" className="category-card">
              <img
                className="w-full h-64 object-cover"
                src="/assets/Images/Men.jpg"
                alt="Men"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Men's Collection</h3>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        {/* Women's Collection Slide */}
        <SwiperSlide>
          <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden mx-auto border-2 border-purple-500 transform hover:scale-105 transition-all duration-300">
            <Link to="/women" className="category-card">
              <img
                className="w-full h-64 object-cover"
                src="/assets/Images/Women.jpg"
                alt="Women"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Women's Collection</h3>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        {/* Kids' Collection Slide */}
        <SwiperSlide>
          <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden mx-auto border-2 border-purple-500 transform hover:scale-105 transition-all duration-300">
            <Link to="/kids" className="category-card">
              <img
                className="w-full h-64 object-cover"
                src="/assets/Images/Kids.jpg"
                alt="Kids"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">Kids' Collection</h3>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="relative group">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/assets/Images/M3.jpg"
                alt="Product 1"
              />
              <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white hidden group-hover:block">
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-md">Rs-1200</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="relative group">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/assets/Images/K2.jpg"
                alt="Product 2"
              />
              <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white hidden group-hover:block">
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-md">Rs-1150</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="relative group">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src="/assets/Images/W2.jpg"
                alt="Product 3"
              />
              <div className="absolute inset-0 bg-purple-600 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white hidden group-hover:block">
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-md">Rs-1000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-purple-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Subscribe!
          </h2>
          <p className="text-lg text-purple-200 mt-2">
            Subscribe to get latest update and offers!
          </p>
          <div className="mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md w-2/3 sm:w-1/3 focus:outline-none"
            />
            <button className="px-6 py-2 bg-white text-purple-700 font-semibold rounded-r-md hover:bg-purple-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <div className="mb-12"></div>
    </>
  );
}
