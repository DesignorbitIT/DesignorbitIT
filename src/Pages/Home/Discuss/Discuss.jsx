import { IoIosArrowDown , IoIosArrowUp  } from "react-icons/io";
import Container from "../../../Component/UI/Container/Container";
import "./Discuss.css"
import { useState } from "react";

const Discuss = () => {
    const [discuss , setDiscuss] = useState(false)
    return (
        <>
            <section className="home-discuss h-fit">
                
                    <section className="text-white">
                        <div className="">
                            <h1 className={`lg:text-[30px] text-[20px] py-[40px]  flex items-center gap-2 justify-center font-poppins font-semibold  `} onClick={() => setDiscuss(!discuss)} >Let's discuss your project{discuss === false ? <IoIosArrowDown /> : <IoIosArrowUp /> }  </h1>
                        </div>

                        <div className={` home-discuss ${ discuss === true ? "flex" :"hidden"}`} >
                           <Container>
                           <div className="flex md:flex-row flex-col justify-center gap-[40px] py-20">
                           <div className="md:w-full lg:w-[400px]">
                                <h1 className="text-[28px] font-normal mb-5">Ready for Working with us?</h1>
                                <div className="text-[20px] font-normal space-y-6">
                                    <p>
                                        At DesignOrbit, we’re excited to collaborate with you! Our team is ready to bring to life your vision, whether it includes creative graphic design, innovative app development, attractive web design, or impeccable UI/UX solutions.

                                    </p>
                                    <p>
                                        Let’s create something amazing together and elevate your brand to new heights.We help you grow your business organically, hit your marketing objectives, as well as producing more leads and revenue.
                                    </p>
                                    <p>
                                        Reach out to us today, and let's start a partnership built on creativity, expertise, and success.
                                    </p>
                                </div>
                            </div>

                            <section className="lg:space-y-5 ">
                                <div className="flex lg:flex-row flex-col lg:gap-12">

                                    <div>
                                        <label>Your Name*</label>
                                        <br />
                                        <input type="text" className="rounded-full border w-full outline-none bg-[#2478E0] p-2" />
                                    </div>
                                    <div>
                                        <label>Email*</label>
                                        <br />
                                        <input type="text" className="rounded-full border w-full outline-none bg-[#2478E0] p-2" />
                                    </div>

                                </div>
                                <div className="flex lg:flex-row flex-col lg:gap-12">

                                    <div>
                                        <label>Company*</label>
                                        <br />
                                        <input type="text" className="rounded-full border w-full outline-none bg-[#2478E0] p-2" />
                                    </div>
                                    <div>
                                        <label>Phone*</label>
                                        <br />
                                        <input type="number" className="rounded-full border w-full outline-none bg-[#2478E0] p-2" />
                                    </div>

                                </div>

                                <div>
                                    <label>Message*</label>
                                    <br />
                                    <textarea className="rounded-xl border bg-[#2478E0] lg:h-[180px] lg:w-[485px] w-full outline-none " name="" id=""></textarea>

                                    <div className="flex gap-2">
                                        <input type="checkbox" className="rounded-xl border" name="" id="" />
                                        <p className="">I agree to get newsletter and other marketing information.</p>
                                    </div>
                                </div>

                                <div className="my-5 lg:my-0 "> 
                                    <button className="bg-[#004695] hover:bg-black px-5 py-2 rounded-2xl font-normal">Send Message</button>
                                </div>

                            </section>
                           </div>
                           </Container>
                        </div>
                    </section>
               
            </section>
        </>
    );
};

export default Discuss;