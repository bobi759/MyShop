import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide from 'swiper/react'
import { Box } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Messi } from "./Messi";
import { useRef, useState } from "react";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
import { motion, AnimatePresence } from "framer-motion";

export const BookSlider = ({title}) => {
  const [isBeginning, setIsBeginning] = useState(true);

  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef(null);
  return (
    <Box
      sx={{
        mx: "10px",
        px: "16px",
        "& .swiper-button-prev, & .swiper-button-next": {
          background: "white",
          color: "#565959",
          borderColor: "#747678",
          borderRadius: "8px",
          "&::after": {
            fontSize: "20px",
            color: "blue",
          },
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        // navigation
        // pagination={{ clickable: true }}
        watchSlidesProgress={true}
        resistanceRatio={0} // disables rubber-band effect
        // scrollbar={{ draggable: true }}
        freeMode={{ enabled: true, momentum: true, momentumRatio: 1 }}
        slidesPerView={6.8}
        slidesPerGroupAuto={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => {
          setIsBeginning(swiperRef.current?.isBeginning);
          setIsEnd(swiperRef.current?.isEnd);
        }}
      >
        <AnimatePresence>
          {!isBeginning && (
            <motion.div
              initial={{ opacity: 0, x: -20 }} // when entering
              animate={{ opacity: 1, x: 0 }} // while visible
              exit={{ opacity: 0, x: -20 }} // when leaving
              transition={{ duration: 0.3 }}
              style={{ position: "absolute", top: "50%", left: 0, zIndex: 10 }}
            >
              <PrevButton swiperRef={swiperRef} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isEnd && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              style={{ position: "absolute", top: "50%", right: 0, zIndex: 10 }}
            >
              <NextButton swiperRef={swiperRef} />
            </motion.div>
          )}
        </AnimatePresence>

        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
        <SwiperSlide>
          <Messi />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// export const BookSlider =  () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
