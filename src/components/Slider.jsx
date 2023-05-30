import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import RulesCard from './RulesCard';
import { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <Swiper style={{position: 'relative',}}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(support) => setCurrentIndex(support.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <RulesCard
            text1="May occasionally generate incorrect information"
            text2="May occasionally produce harmful instructions or biased content"
            text3="Limited knowledge of world and events after 2021"
          />
        </SwiperSlide>
        <SwiperSlide>
          <RulesCard
            text1="May occasionally generate incorrect information"
            text2="May occasionally produce harmful instructions or biased content"
            text3="Limited knowledge of world and events after 2021"
          />
        </SwiperSlide>
        <div className="indicator">
          <div
            className={`circle ${currentIndex === 0 ? 'activeIndicator' : ''}`}
          />
          <div
            className={`circle ${currentIndex === 1 ? 'activeIndicator' : ''}`}
          />
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
