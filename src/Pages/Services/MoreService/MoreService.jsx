import Slider from "react-slick";
import Container from "../../../Component/UI/Container/Container";
import "./MoreService.css";
import { FaRegCircle } from "react-icons/fa";
import { useRef, useState } from "react";
const MoreService = () => {
    const sliderRef = useRef(null); // Ref for the slider component
    const [currentSlide, setCurrentSlide] = useState(0); 
    const coursesBtn = [  1, 2, 3, 4,5, 6   ]
    const settings = {
        dots: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 1,
        autoplay: true,
    autoplaySpeed: 5000, // time in milliseconds between each slide
    pauseOnHover: true,
    afterChange: (index) => setCurrentSlide(index),
    customPaging: (i) => (
        <div
            className={`custom-dot ${i === currentSlide ? 'active-dot' : ''}`}
        >
            
        </div>
    )
    };
  return (
    <>
      <section className="bg-[#263238] py-20 mt-20">
        <Container>
        <div className="text-white">
                  <div>
                    <h1 className="2xl:text-[30px] font-bold ">
                      More Services
                    </h1>
                  </div>
                  <div className="2xl:w-[523px]">
                    <p className="2xl:text-[30px]  font-normal">
                      We provide a complimentary range of services, <br />
                      from brand conception to implementation and growth.
                    </p>
                  </div>
                </div>
          
                {
            <Slider {...settings} ref={sliderRef}>
                {coursesBtn.map((btn , index) => (
                   
                 <div key={index}>
                      <section  className="grid text-white lg:grid-cols-2  2xl:gap-40 lg:gap-10 gap-10 text-[40px] mt-20">
                   <div className="flex items-center">
                     <img
                       className=" h-full w-full  rounded-[61px] "
                       src="https://i.pinimg.com/originals/1f/90/72/1f90729ce60dea7c08206ba3d6bbb7d2.jpg"
                       alt=""
                     />
                   </div>
                   <div className="space-y-2 text-white px-5">
                    
                       <h5 className=" font-bold text-white">
                         Wordpress Web Design Agency
                       </h5>
                       <h2 className=" font-bold">
                         Wordpress <br />
                         Web Design
                       </h2>         
                       <p className="  font-normal ">
                         At DesignOrbit, we believe that your brand is more than
                         just a logo or a tagline. It&rsquo;s the essence of your
                         company and the key to engaging your customers. Our wide
                         branding services help you establish a strong,
                         memorable, and demandable unique brand identification in
                         the demanding digital industry. Our team carries the
                         expertise to help you level up! Together, we will design
                         a powerful visual identity that includes a logo, a color
                         palette, and all other necessary branding elements.
                       </p>
                    
                   </div>
                 </section>
                 </div>
        
       
       
     
                    
                ))}
            </Slider>
            }
        </Container>
      </section>
    </>
  );
};

export default MoreService;
