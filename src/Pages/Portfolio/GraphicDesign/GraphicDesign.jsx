
import Container from '../../../Component/UI/Container/Container';

const GRAPHICDESIGN = () => {
    return (
        <> 
        <section className="bg-[#100404] pb-20">
            <Container>
                <div className="pt-40 text-white">
                    <h3 className="2xl:text-[50px] xl:text-[40px] lg:text-[30px] md:text-[20px] text-[18px]">Our Work</h3>
                    <h1 className="2xl:text-[130px] xl:text-[80px] lg:text-[40px] md:text-[30px] text-[30px] text-[#1196EE] font-semibold">GRAPHIC DESIGN</h1>
                </div>

                <div className="md:space-y-40">
                    <section className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 2xl:gap-40 lg:gap-10 gap-10 text-[40px]">
                        <div className="">
                            <img className="2xl:h-[440px] h-full w-full  lg:rounded-[61px]" src="https://th.bing.com/th/id/R.5d9114888ac3b0db7c11706d799b9c49?rik=St5nruUshqYtFA&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className="space-y-2 text-white">

                            <div>
                                <h1 className="2xl:text-[40px] xl:text-[40px] md:text-[20px] lg:text-[30px]  font-semibold"><span className="text-[#1196EE]">ZeestyZips</span> <br />
                                    Mobile App Design
                                    Concept of a
                                    Food Delivery Company</h1>
                            </div>
                            <div className="2xl:w-[523px]">
                                <p className="2xl:text-[20px]  font-normal">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ut nemo dolore quod veniam molestias voluptates praesentium fugiat distinctio corrupti, doloremque temporibus ipsa sunt in eius ad. Id, illum unde!
                                </p>
                            </div>

                            <div>
                                <h3 className="2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] text-[18px]">Service</h3>
                                <h1 className="text-[20px]  font-semibold">UI/UX DESIGN WEB DEVELOPMENT</h1>

                            </div>
                        </div>


                    </section>
                    <section className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 2xl:gap-40 lg:gap-10 gap-10 text-[40px]">

                        <div className="space-y-2 text-white">

                            <div>
                                <h1 className="2xl:text-[40px] xl:text-[40px] md:text-[20px] lg:text-[30px]  font-semibold"><span className="text-[#1196EE]">ZeestyZips</span> <br />
                                    Mobile App Design
                                    Concept of a
                                    Food Delivery Company</h1>
                            </div>
                            <div className="2xl:w-[523px]">
                                <p className="2xl:text-[20px]  font-normal">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ut nemo dolore quod veniam molestias voluptates praesentium fugiat distinctio corrupti, doloremque temporibus ipsa sunt in eius ad. Id, illum unde!
                                </p>
                            </div>

                            <div>
                                <h3 className="2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] text-[18px]">Service</h3>
                                <h1 className="text-[20px]  font-semibold">UI/UX DESIGN WEB DEVELOPMENT</h1>

                            </div>
                        </div>
                        <div className="">
                            <img className="2xl:h-[440px] h-full w-full  lg:rounded-[61px]" src="https://th.bing.com/th/id/R.5d9114888ac3b0db7c11706d799b9c49?rik=St5nruUshqYtFA&pid=ImgRaw&r=0" alt="" />
                        </div>

                    </section>
                </div>
            </Container>
        </section>

        <section className="bg-white py-20">
            <Container>
            <div>
                    <div><h1 className="2xl:text-[210px] xl:text-[150px] lg:text-[120px] md:text-[80px] text-[40px]  font-bold text-center leading-none">Let’s Work <br />
                        <span className="text-[#1196EE]">Together!</span>  </h1></div>

                        <div className="flex justify-center lg:mt-16 mt-5">
                            <button className="px-[30px] py-[14px] bg-[#1196EE] text-white font-bold rounded-lg">Get in Touch</button>
                        </div>
                </div>
            </Container>
        </section>
    </>
    );
};

export default GRAPHICDESIGN;