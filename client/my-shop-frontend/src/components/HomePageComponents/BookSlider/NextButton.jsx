import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const NextButton = ({ swiperRef }) => {
  return (
    <button
      className="swiper-button-next"
      onClick={() => {
        swiperRef.current?.slideNext();
      }}
    >
      <ArrowForwardIosIcon />
    </button>
  );
};
