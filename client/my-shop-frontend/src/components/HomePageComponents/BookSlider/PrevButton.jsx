import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export const PrevButton = ({ swiperRef }) => {
  return (
    <button
      className="swiper-button-prev" // <-- Swiper’s default style
      onClick={() => swiperRef.current?.slidePrev()}
    >
      <ArrowBackIosNewIcon/>
    </button>
  );
};
