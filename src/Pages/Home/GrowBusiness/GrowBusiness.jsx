import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from "../../../Component/UI/Container/Container";
import "./GrowBusiness.css"

const GrowBusiness = () => {
    return (
      <section className="py-20">
            
      <Container>
      <div className="text-center ">
           <h1 className="font-brittany font-bold text-[#009AFF] text-xl lg:text-3xl mb-1">What We Do</h1>
           <h1 className="font-bold text-2xl lg:text-4xl text-black">We Grow Your Business </h1>
       </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-[20px] justify-center mt-10">
           <div className="bg-[#F2F2F2]  rounded-xl h-fit   ">
               <div className="space-y-[14px] p-5  ">
                   <h5 className="text-[#056AAD] font-poppins font-semibold text-[30px] ">Custom Web & App <br />
                       Development</h5>
                   <svg xmlns="http://www.w3.org/2000/svg" width="98" height="3" viewBox="0 0 98 3" fill="none">
                       <path d="M0.595886 1.7204H97.3456" stroke="#056AAD" />
                   </svg>
                   <p className="text-[17px] font-poppins font-normal md:h-[170px]  " >
                       Resolve issues using specialized, <br /> secured apps and websites to grow <br /> your company.
                   </p>

               </div>
               <button className="flex items-center gap-5 px-5 w-full  py-[15px] bg-gradient-to-r from-[#4D4A55] to-[#1A1A1D] text-white hover:bg-gradient-to-r hover:from-[#042B4D] hover:via-[#0065DF] hover:to-[#0298FA] transition-all duration-100 cursor-pointer rounded-b-xl">Build & Launch <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
           </div>
           <div className="bg-[#F2F2F2]  rounded-xl h-fit  ">
               <div className="space-y-[14px] p-5   ">
                   <h5 className="text-[#056AAD] font-poppins font-semibold text-[30px] ">User Experience <br />
                       Design</h5>
                   <svg xmlns="http://www.w3.org/2000/svg" width="98" height="3" viewBox="0 0 98 3" fill="none">
                       <path d="M0.595886 1.7204H97.3456" stroke="#056AAD" />
                   </svg>
                   <p className="text-[17px] font-poppins font-normal md:h-[170px] " >
                   With innovative user interfaces and an enjoyable browsing experience, we can help your audience get important information more quickly.
                   </p>

               </div>
             
                   <button className="flex items-center gap-5 px-5 w-full  py-[15px] bg-gradient-to-r from-[#4D4A55] to-[#1A1A1D] text-white hover:bg-gradient-to-r hover:from-[#042B4D] hover:via-[#0065DF] hover:to-[#0298FA] transition-all duration-100 cursor-pointer rounded-b-xl">Build & Launch <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
               
           </div>
           <div className="bg-[#F2F2F2]  rounded-xl h-fit ">
               <div className="space-y-[14px] p-5  ">
                   <h5 className="text-[#056AAD] font-poppins font-semibold text-[30px] ">Search Engine <br />
                       Optimization</h5>
                   <svg xmlns="http://www.w3.org/2000/svg" width="98" height="3" viewBox="0 0 98 3" fill="none">
                       <path d="M0.595886 1.7204H97.3456" stroke="#056AAD" />
                   </svg>
                   <p className="text-[17px] font-poppins font-normal md:h-[170px] " >
                   Use the proper keywords and more to claim your place among the most popular in your field.
                   </p>

               </div>
               <button className="flex items-center gap-5 px-5 w-full  py-[15px] bg-gradient-to-r from-[#4D4A55] to-[#1A1A1D] text-white hover:bg-gradient-to-r hover:from-[#042B4D] hover:via-[#0065DF] hover:to-[#0298FA] transition-all duration-100 cursor-pointer rounded-b-xl">Build & Launch <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
               </div>
          
           <div className="bg-[#F2F2F2]  rounded-xl h-fit ">
               <div className="space-y-[14px] p-5  ">
                   <h5 className="text-[#056AAD] font-poppins font-semibold text-[30px] ">Branding & Printing <br />
                       Design</h5>
                   <svg xmlns="http://www.w3.org/2000/svg" width="98" height="3" viewBox="0 0 98 3" fill="none">
                       <path d="M0.595886 1.7204H97.3456" stroke="#056AAD" />
                   </svg>
                   <p className="text-[17px] font-poppins font-normal md:h-[170px] " >
                   Create strong brand identities by design logos, business cards, brochures, and packaging that increase values to target audiences.
                   </p>

               </div>
               <button className="flex items-center gap-5 px-5 w-full  py-[15px] bg-gradient-to-r from-[#4D4A55] to-[#1A1A1D] text-white hover:bg-gradient-to-r hover:from-[#042B4D] hover:via-[#0065DF] hover:to-[#0298FA] transition-all duration-100 cursor-pointer rounded-b-xl">Build & Launch <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
               </div>
           </div>
      
      </Container>
   </section>
    );
};

export default GrowBusiness;