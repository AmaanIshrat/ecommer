import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Countdown Component
function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="text-4xl font-bold">
      {`${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}
    </div>
  );
}

// Home Component
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
          <div className="bg-[url('/assets/Images/sl0.jpg')] bg-cover bg-center">
            <div className="mx-auto w-full max-w-7xl">
              <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h4 className="text-4xl font-serif font-bold sm:text-5xl leading-tight sm:leading-snug text-purple-800 tracking-wider">
                      Click here to Know more
                      <span className="hidden sm:block text-4xl">Shopping</span>
                    </h4>

                    <Link
                      className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-400 hover:text-white transition"
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
          <div className="bg-[url('/assets/Images/Mn.jpg')] bg-center bg-no-repeat bg-cover h-screen">
            <div className="mx-auto w-full max-w-7xl">
              <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h4 className="text-4xl font-serif font-bold sm:text-5xl leading-tight sm:leading-snug text-purple-800 tracking-wider">
                      Discover Our Latest Collection for Men!
                    </h4>
                    <Link
                      className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-400 hover:text-white transition"
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
          <div className="bg-[url('/assets/Images/Wom.jpg')] bg-cover bg-center">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
              <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                  <h4 className="text-4xl font-serif font-bold sm:text-5xl leading-tight sm:leading-snug text-purple-800 tracking-wider">
                    Seasonal Discounts Available for Women Collections!
                  </h4>
                  <Link
                    className="inline-flex items-center px-6 py-3 font-medium text-purple-500 border border-purple-500 rounded-lg hover:bg-gradient-to-r from-purple-500 to-pink-400 hover:text-white transition"
                    to="/Women"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Promotional Countdown Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Limited Time Offer!</h2>
          <p className="text-lg mb-6">Get 20% off all orders placed before the countdown ends.</p>
          <Countdown targetDate="2024-11-30T23:59:59" /> {/* Set your target date here */}
        </div>
      </section>



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

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

            {/* Free Delivery */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/assets/Images/FreeDelLogo.png" // Update path to your logo
                alt="Free Delivery"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Free Delivery</h3>
              <p className="text-gray-600 mt-2">
                Enjoy free shipping on all orders.
              </p>
            </div>

            {/* Return & Refund */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/assets/Images/return log.jpg" // Update path to your logo
                alt="Return and Refund"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Return & Refund</h3>
              <p className="text-gray-600 mt-2">
                Hassle-free returns and full refunds.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/assets/Images/Support logo.png" // Update path to your logo
                alt="24/7 Support"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 mt-2">
                We’re here to help anytime you need.
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* Customer Testimonials Carousel */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            What Our Customers Say
          </h2>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true, // adds a dynamic style to pagination bullets
            }}
            effect="fade"
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-lg font-medium text-gray-700">
                  "Amazing quality and I have seen the best products ever."
                </p>
                <p className="mt-4 text-sm font-semibold text-purple-600">- Amaan, Mumbai</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-lg font-medium text-gray-700">
                  "Loved the fast delivery and quality of the product."
                </p>
                <p className="mt-4 text-sm font-semibold text-purple-600">- Sana, Delhi</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-lg font-medium text-gray-700">
                  "Best products. Highly recommended!"
                </p>
                <p className="mt-4 text-sm font-semibold text-purple-600">- Rohan, Bangalore</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>





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
              <div className="absolute inset-0 bg-purple-300 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-gray-700 hidden group-hover:block">
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
              <div className="absolute inset-0 bg-gradient-to bg-purple-300 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-gray-700 hidden group-hover:block">
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
              <div className="absolute inset-0 bg-purple-300 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-gray-700 hidden group-hover:block">
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-md">Rs-1000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to Shopping – where style meets soul. Our story started with a vision to create clothing that empowers individuals to express their true selves. From humble beginnings, we set out to craft pieces that are not just beautiful but meaningful, bringing together quality, comfort, and timeless design.
            <br />

            Each collection at Shopping is inspired by our passion for style and sustainability. We believe fashion should make you feel confident and comfortable while being kind to the world around us. Our team is dedicated to sourcing high-quality materials and crafting pieces that stand the test of time, becoming cherished parts of your wardrobe.
          </p>
        </div>
      </section>


      <div className="mb-12"></div>
    </>
  );
}
