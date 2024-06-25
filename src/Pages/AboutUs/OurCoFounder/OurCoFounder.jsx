
import "./OurCoFounder.css"
import Container from '../../../Component/UI/Container/Container';
import sir from "../../../assets/img/CoFounder/fffffff 1.png"
import suhad from "../../../assets/img/CoFounder/Photo.png"
import mem  from "../../../assets/img/CoFounder/Photo (1).png"
import linkedIn from "../../../assets/img/Technologies/linkedin (1).svg"
import facebook from "../../../assets/img/Technologies/facebook (1).svg"
import x from "../../../assets/img/Technologies/x.svg"
const OurCoFounder = () => {
    return (
        <div className='py-20 bg-[#F5F5F5]'>
            <Container>
            <div className='lg:w-[55%]'>
            <header>
              <p className="heading mb-3">Our Co-Founders</p>
            </header>
                <h2 className=" leading-8 font-bold mb-3">
                We champion the bold to achieve the extraordinary

                </h2>
                <div className="lg:flex justify-between mb-3">
                  <p className="text-[#595566]">
                  Ippsum is the result of synergy between our teams and our customers. Our company  culture is focused on excellent productivity, customer satisfaction, respect for team.
                  </p>
                
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-10 mt-10'>
                <div className='space-y-4 text-center'>
                    <img src={sir} alt="" className='rounded-2xl' />
                   
              <p className="heading">Co-Founder & UI/ UX Expert</p>
          
            <h2 className='font-bold tracking-widest '>SAIF AHMED CHY. SAMI</h2>
            <p className='text-[#595566] '>Visionary leaders passionate about transforming ideas into stunning digital experiences.</p>
            <div className='flex gap-10  justify-center ' >
                <a href=""><img src={facebook} alt="" className='w-7 h-7 mx-auto' /></a>
                <a href=""><img src={linkedIn} alt="" className='w-7 h-7 mx-auto' /></a>
                <a href=""><img src={x} alt="" className='w-7 h-7 mx-auto' /></a>
            </div>
                </div>
                <div className='space-y-4 text-center'>
                    <img src={suhad} alt="" className='rounded-2xl' />
                   
              <p className="heading">Co-Founder & Mern Stack Developer</p>
          
            <h2 className='font-bold tracking-widest '>SUHAD AHMOD KHAN</h2>
            <p className='text-[#595566] '>Dedicated to crafting exceptional digital solutions with innovation.</p>
            <div className='flex gap-10  justify-center ' >
                <a href=""><img src={facebook} alt="" className='w-7 h-7 mx-auto' /></a>
                <a href=""><img src={linkedIn} alt="" className='w-7 h-7 mx-auto' /></a>
                <a href=""><img src={x} alt="" className='w-7 h-7 mx-auto' /></a>
            </div>
                </div>
                <div className='space-y-4 text-center'>
                    <img src={mem} alt="" className='rounded-2xl' />
                   
              <p className="heading">Co-Founder & Mern Stack Developer</p>
          
            <h2 className='font-bold tracking-widest '>SANJIDA RAHMAN</h2>
            <p className='text-[#595566] '>Dedicated to crafting exceptional digital solutions with innovation.</p>
            <div className='flex gap-10  justify-center ' >
                <a href=""><img src={facebook} alt="" className='w-7 h-7 mx-auto' /></a>
                <a href=""><img src={linkedIn} alt="" className='w-7 h-7 mx-auto' /></a>
                <a href=""><img src={x} alt="" className='w-7 h-7 mx-auto' /></a>
            </div>
                </div>
                
              </div>
            </Container>
        </div>
    );
};

export default OurCoFounder;