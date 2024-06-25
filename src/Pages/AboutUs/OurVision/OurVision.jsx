import Container from "../../../Component/UI/Container/Container"
import "./OurVision.css"
import photo from "../../../assets/img/Photo.png"
import Pattern from "../../../assets/img/Pattern.png"
const OurVision = () => {
    return (
        <>
            <Container>
                <section className="py-20">
                    <header>
                        <p className="heading ">Our Vision</p>
                    </header>

                    <div>


                        <div className="flex lg:flex-row flex-col items-center lg:gap-40">
                            <div className="text-[#595566] ">
                                <div>
                                    <h2 className="lg:text-[40px] text-[20px]  font-bold mb-3">Turn your ideas into reality.</h2>
                                    <p className="text-[#595566] mb-3">
                                        Transform your ideas into reality with our expert design and development <br /> services, creating stunning, functional digital experiences that captivate.
                                    </p>
                                </div>
                                <div className="flex ">

                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                            <path d="M18.9394 10.0731L11.8371 16.8487L8.29199 13.4609" stroke="#126AB9" />
                                            <path d="M13.6154 24.5924C20.0304 24.5924 25.2307 19.3921 25.2307 12.9771C25.2307 6.56207 20.0304 1.36169 13.6154 1.36169C7.20038 1.36169 2 6.56207 2 12.9771C2 19.3921 7.20038 24.5924 13.6154 24.5924Z" stroke="#126AB9" />
                                        </svg>
                                    </div>
                                    <h1 className="pl-8 font-normal text-sm">
                                        Discover how we transform your initial ideas into fully realized <br /> digital products through a structured and collaborative design <br /> process.
                                    </h1>
                                </div>
                                <div className="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                            <path d="M18.9394 10.0731L11.8371 16.8487L8.29199 13.4609" stroke="#126AB9" />
                                            <path d="M13.6154 24.5924C20.0304 24.5924 25.2307 19.3921 25.2307 12.9771C25.2307 6.56207 20.0304 1.36169 13.6154 1.36169C7.20038 1.36169 2 6.56207 2 12.9771C2 19.3921 7.20038 24.5924 13.6154 24.5924Z" stroke="#126AB9" />
                                        </svg>
                                    </div>
                                    <h1 className=" pl-8 font-normal text-sm">
                                        Learn about the innovative design and development solutions <br /> we offer to bring your business ideas to life and help you achieve <br /> your goals.
                                    </h1>
                                </div>

                            </div>

                            <div className="mt-10 ">
                                <div className="z-20 lg:absolute">
                                    <img className="rounded-xl lg:h-[300px]" src={photo} alt="" />
                                </div>
                                <div className="bg-gradient-to-r z-10 from-sky-500 to-indigo-500 lg:w-[100px] lg:h-[100px] rounded-xl relative lg:right-[-350px] lg:top-[-20px]">

                                </div>
                                <div className="lg:right-[-320px] lg:top-[-150px] relative">
                                    <img className="lg:w-[150px] hidden lg:flex" src={Pattern} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </>

    );

}
export default OurVision;