import { useState } from "react"; 
import { BiHomeAlt,BiChevronRight,BiInfoCircle } from "react-icons/bi";
import {NextArrow ,PrevArrow} from "./Arrow";
import Slick from 'react-slick' ;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Hero = () => {
  
  const flashcards = [
    { title: "Question 1", content: "Answer 1", image: "/image1.png" },
    { title: "Question 2", content: "Answer 2" },
    { title: "Question 3", content: "Answer 3", image: "/image3.png" },
  ];
  

  const [activeIndex, setActiveIndex] = useState(1);
  
  const handelclick =()=>
  { setActiveIndex(!activeIndex);};
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow : <NextArrow/> ,
    prevArrow :<PrevArrow/> ,

    afterChange: (currentSlide) => setActiveIndex(currentSlide),
  };

  return (
    <>
    <div className="container">
    <div className='container flex items-center p-10 mx-auto '>
    <span className='flex items-center '>
      <BiHomeAlt className='text-xl' />
      <BiChevronRight className='text-xl mx-2' />
      Flashcard
      <BiChevronRight className='text-xl mx-2' />
      Mathematics
      <BiChevronRight className='text-xl mx-2' />
      <span className='text-blue-900 font-bold'>Relation and Function</span>
    </span>
  </div>
  <span className=' mx-auto px-12 text-blue-900 font-bold text-4xl '>
    Relation and Function(Mathematics)</span>
    <div className='container p-8 mx-auto flex  gap-8  justify-center '>
    <span className='text-blue-900  text-xl font-bold'>Study</span>
    <span className='text-customc text-xl font-bold'>Qiuz</span>
    <span className='text-customc text-xl font-bold'>Test</span>
    <span className='text-customc text-xl font-bold'>Game</span>
    <span className='text-customc text-xl font-bold'>Others</span>
  </div>
  <div className="flex justify-center ">
  <div className="container h-80 w-1/3 
  bg-gradient-to-br from-blue-950 to-blue-600 rounded-lg shadow-md 
  items-center ">

  <Slick {...settings}>
  {flashcards.map((flashcard, index) => (
    <div key={index} className="slick-slide">
      <div
        className="flex items-center justify-center h-72 w-full"
        onClick={handelclick}
      >
        {activeIndex ? (
          <h3 className="text-2xl font-bold mb-2 text-center">
            {flashcard.title}
          </h3>
        ) : (
          <p className="text-slate-200 text-center">
            {flashcard.content}
          </p>
        )}
      </div>
    </div>
  ))}
</Slick>



        </div>


           </div>

</div>
  </>
  )
}

export default Hero