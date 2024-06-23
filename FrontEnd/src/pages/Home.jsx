import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import { GiZigzagHieroglyph } from "react-icons/gi";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero_img.jpg')",
          zIndex: "-100",
        }}
      >
        <Navbar />
        <HeroSection />
      </section>

      <section className="min-h-screen flex justify-between p-20">
        <div className="flex-1 flex-col flex items-center pl-8">
          <h1 className="w-[35%] font-bold" style={{ fontSize: "2rem" }}>
            BOOK HUB A GO TO PLATFORM
          </h1>
          <div className="w-[35%]">
            <GiZigzagHieroglyph
              className="text-yellow-400"
              style={{ fontSize: "4rem" }}
            />
          </div>
        </div>

        <div className="flex-1">
          <h1
            className="w-[50%] font-playfair mb-7"
            style={{ fontSize: "1rem" }}
          >
            "Today a reader, tomorrow a leader." – Margaret Fuller
          </h1>
          <p className="w-[45%] mb-5" style={{ color: "#cbcbcb" }}>
            Welcome to Book Hub, your ultimate destination for all things books.
            Whether you are an avid reader, a casual browser, or someone looking
            for the perfect gift, Book Hub has something for everyone. Our
            platform offers a vast selection of genres, from timeless classics
            to contemporary bestsellers.
          </p>
          <p className="w-[50%] mb-5" style={{ color: "#cbcbcb" }}>
            With user-friendly navigation, insightful reviews, and personalized
            direction, Book Hub makes discovering and purchasing books a
            seamless and enjoyable experience.
          </p>
          <button className="bg-transparent py-4 px-6 border-2 border-white text-sm text-white font-semibold cursor-pointer mx-auto my-4 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition duration-300">
            FIND OUT MORE
          </button>
        </div>
      </section>

      <Cards />

      <NewsLetter />

      <Footer />
    </>
  );
};

export default Home;
