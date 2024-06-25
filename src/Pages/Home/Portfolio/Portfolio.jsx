import Slider from "react-slick";
import Container from "../../../Component/UI/Container/Container";
import "./Portfolio.css"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Portfolio = () => {
    const portfolios = [1,2,3,4,5,6,7,8,9,10,12,11,13,15];
    const coursesList = [
        {
            "name": "Introduction to Programming Programming",
            "duration": "12 weeks",
            "fee": "$600",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/5NhLrJzp/Rectangle-9.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/0yVYXtTZ/Rectangle-26.jpg"
        },
        {
            "name": "Web Development Bootcamp ",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/hPq1XQ88/Rectangle-34.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        {
            "name": "Web Development Bootcamp",
            "duration": "8 weeks",
            "fee": "$800",
            "class_schedule": {
                "day": "শনি - সোম - বুধ",
                "time": "বিকাল ০৪ টা-০৫:৩০ টা"
            },
            "image" : "https://i.postimg.cc/Mp60DkFv/Rectangle-42.jpg"
        },
        
    ]
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return <div className="home-portfolio-prev-arrow hover:shadow-[#009AF6] hover:shadow-md transition-all duration-300" onClick={onClick}>&lt;</div>;
      };
      
      // Custom next arrow component
      const CustomNextArrow = (props) => {
        const { onClick } = props;
        return <div className="home-portfolio-next-arrow hover:shadow-[#009AF6] hover:shadow-md transition-all duration-300" onClick={onClick}>&gt;</div>;
      };
    const settings = {
        dots:false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
           
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };
 
    return (
        <div className="py-10 lg:py-20">
            <Container>
            <header>
              <p className="heading mb-3">Portfolio</p>
            </header>
            <h2 className="lg:text-[40px] text-[20px]  font-bold  mb-3">
            What’s stopping you?
                </h2>
                
            </Container>
           
           <div className="lg:w-[92%] ml-auto md:pl-[10%] px-[5%]">
          
           <Slider {...settings}>
                {
                    coursesList.map(course => <>
                        <div className=" mx-1 mt-5">
                            <div className=''>
                                <img className="lg:h-[220px] rounded-2xl w-full" src={course?.image     } alt="" />
                            </div>

                           <div className="mt-3 pl-1">
                            <p className="font-semibold">UI/UX Design for Zesty Zips Food Delivery App</p>
                            <div className="flex gap-3 mt-2">
                                <h6 className="text-[12px] border-[1px] rounded-full px-3 border-[#D9D9D9] text-[#8D8D8D]">UI/UX</h6>
                                <h6 className="text-[12px] border-[1px] rounded-full px-3 border-[#D9D9D9] text-[#8D8D8D]">App Development</h6>
                            </div>
                           </div>
     
                           
                        </div>
                    </>)
                }
                </Slider>
               
           </div>
           <div className="flex justify-center mt-10">
                    <button className="border-[2px]  rounded-full px-4 py-2 border-[#056AAD] hover:bg-[#056AAD] hover:text-white transition-all hover:shadow-lg hover:shadow-[#056AAD] duration-300 text-[#056AAD]">EXPLORE ALL</button>
                </div>
        </div>
    );
};

export default Portfolio;