import image from "./book-banner.jpg";



export const BooksBanner = () => {
  return (
    <>
      <img
        src={image}
        style={{
          margin: "0px 10px",
          padding: "0px 16px",
          width: "1500px",
        }}
      />
    </>
  );
};
