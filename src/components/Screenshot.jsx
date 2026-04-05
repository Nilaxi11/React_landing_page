import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function Screenshot() {
  return (
    <section className="ptb_100 text-center bg-light" id='Screenshot'>
      <h2 className="fw-bold mb-2" style={{ fontSize: '40px' }}>Simple & Beautiful Interface</h2>
      <p className='py-3 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati <br /> dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}   // 🔥 reduced from 30 → 10
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img src="https://sapp-react.theme-land.com/img/screenshot_1.jpg" className="img-fluid screenshot-img" alt='screenshot img'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://sapp-react.theme-land.com/img/screenshot_2.jpg" className="img-fluid screenshot-img" alt='screenshot img'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://sapp-react.theme-land.com/img/screenshot_3.jpg" className="img-fluid screenshot-img" alt='screenshot img'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://sapp-react.theme-land.com/img/screenshot_4.jpg" className="img-fluid screenshot-img" alt='screenshot img'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://sapp-react.theme-land.com/img/screenshot_5.jpg" className="img-fluid screenshot-img" alt='screenshot img'/>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Screenshot;