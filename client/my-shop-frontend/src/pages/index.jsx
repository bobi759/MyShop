import { Footer } from "../components/Footer/Footer";
import { AuthorsSection } from "../components/HomePageComponents/AuthorsSection/AuthorsSection";
import { BooksBanner } from "../components/HomePageComponents/BooksBanner/BooksBanner";
import { BookSlider } from "../components/HomePageComponents/BookSlider/BooksSlider";
import { ExploreTopGenres } from "../components/HomePageComponents/ExploreTopGenres/ExploreTopGenres";
import { FeaturedCollection } from "../components/HomePageComponents/FeaturedCollection/FeaturedCollection";
import { ShopBooksText } from "../components/HomePageComponents/ShopBooksText/ShopBooksText";
import { Navbar } from "../components/Navbar/Navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <ShopBooksText text={"Shop books"} />
      <BooksBanner />
      <FeaturedCollection />
      <ShopBooksText text={"More books to explore"} />
      <BookSlider />
      <ShopBooksText text={"Prime Big Deal Days: Popular in Book deals"} />
      <BookSlider />
      <ShopBooksText text={"Inspired by your browsing history"} />
      <BookSlider />
      <ShopBooksText text={"Best sellers on Kindle"} />
      <BookSlider />
      <ShopBooksText text={"Kindle Daily Deals - today only"} />
      <BookSlider />
      <AuthorsSection />
      <ShopBooksText text={"Explore top categories"} />

      <ExploreTopGenres />
      <Footer/>
      some text here
    </>
  );
};
