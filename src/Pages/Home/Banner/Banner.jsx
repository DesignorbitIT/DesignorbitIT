import Container from "../../../Component/UI/Container/Container";
import "./Banner.css"
import web from "../../../assets/img/web.png"
import Marquee from "react-fast-marquee";
const Banner = () => {
    return (
      <>
  
     <div className="   banner-background "  >
  <Container>
  <div className=" flex lg:flex-row flex-col-reverse pt-40 pb-20   gap-5 lg:gap-10  justify-center animated-image">
  <div className=" text-left lg:w-1/2">
    <div className="space-y-5">
      <h1 className="lg:text-6xl text-3xl font-bold banner-h1-leading"><span className="text-[#168FCC]">Elevate Your</span> Digital  Presence <br /> <div className="flex gap-2 lg:gap-4">with  <span className="text-[#168FCC]">DesignOrbit</span></div></h1>
      <h6 className=" banner-h1-leading leading-8 text-base lg:text-xl  flex flex-col gap-2">Web Design & Development | Mobile App Development <span>Graphic Design | UI/UX Excellence</span> </h6>
     <div className=""> 
     <button className=" px-5 py-2 rounded border-none  shadow-[#094F84] text-white bg-gradient-to-r from-[#095792] to-[#094F84] flex gap-2"><span>Explore Our Services</span> <span>
      </span></button>
     </div>
    </div>
  </div>
  <div className="flex items-center  rounded-2xl lg:w-1/2">
    <img className="w-full h-full rounded-2xl " src={web} alt="" />
  </div>
  </div>
  </Container>
  
</div>
<Marquee className="bg-[#056AAD] gap-1 text-[#D9D9D9] font-oswald py-5 px-2">
        <div className=" flex gap-2 lg:justify-center justify-start text-xl font-medium items-center mr-16  ">
          <div >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 58 59" fill="none">
              <path d="M28.9651 0.0832825L36.7883 21.2252L57.9301 29.0483L36.7883 36.8715L28.9651 58.0134L21.1419 36.8715L0 29.0483L21.1419 21.2252L28.9651 0.0832825Z" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="lg:text-5xl text-4xl font-medium leading-[150%]">WEB DESIGN & DEVELOPMENT</div>
        </div >
        <div className=" flex gap-2 lg:justify-center justify-start text-xl font-medium items-center mr-16 ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 58 59" fill="none">
              <path d="M28.9651 0.0832825L36.7883 21.2252L57.9301 29.0483L36.7883 36.8715L28.9651 58.0134L21.1419 36.8715L0 29.0483L21.1419 21.2252L28.9651 0.0832825Z" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="lg:text-5xl text-4xl font-medium leading-[150%]">GRAPHIC DESIGN</div>
        </div>
        <div className=" flex gap-2 lg:justify-center justify-start text-xl font-medium items-center mr-16 ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 58 59" fill="none">
              <path d="M28.9651 0.0832825L36.7883 21.2252L57.9301 29.0483L36.7883 36.8715L28.9651 58.0134L21.1419 36.8715L0 29.0483L21.1419 21.2252L28.9651 0.0832825Z" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="lg:text-5xl text-4xl font-medium leading-[150%]">UI/UX DESIGN</div>
        </div>
        <div className=" flex gap-2 lg:justify-center justify-start text-xl font-medium items-center mr-16 " >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 58 59" fill="none">
              <path d="M28.9651 0.0832825L36.7883 21.2252L57.9301 29.0483L36.7883 36.8715L28.9651 58.0134L21.1419 36.8715L0 29.0483L21.1419 21.2252L28.9651 0.0832825Z" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="lg:text-5xl text-4xl font-medium leading-[150%]">APP DEVELOPMENT</div>
        </div>
      </Marquee>

{/* below banner */}



      </>
       
    );
};

export default Banner;