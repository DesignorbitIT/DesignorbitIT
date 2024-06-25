import Container from "../../../Component/UI/Container/Container";
import wordPress from "../../../assets/img/Technologies/wordpress-color.svg"
import laravel from "../../../assets/img/Technologies/laravel-color.svg"
import node from "../../../assets/img/Technologies/nodedotjs-color.svg"
import next from "../../../assets/img/Technologies/nextdotjs-color.svg"
import react from "../../../assets/img/Technologies/react-color.svg"
import js from "../../../assets/img/Technologies/javascript-color.svg"
import vue from "../../../assets/img/Technologies/vuedotjs-color.svg"
import fluter from "../../../assets/img/Technologies/flutter-color.svg"
import html from "../../../assets/img/Technologies/html5-color.svg"
import css from "../../../assets/img/Technologies/css3-color.svg"
import figma from "../../../assets/img/Technologies/figma-color.svg"
import ps from "../../../assets/img/Technologies/adobephotoshop-color.svg"
import ai from "../../../assets/img/Technologies/adobeillustrator-color.svg"
import mongodb from "../../../assets/img/Technologies/mongodb-color.svg"
import tailwind from "../../../assets/img/Technologies/tailwindcss-color.svg"

import "./tech.css"
const Technologies = () => {
    return (
        <section className="py-20 ">
            <Container>

                <section>
                    <div className="font-poppins text-center ">
                        <h6 className="text-2xl lg:text-4xl text-[#056AAD] font-semibold">Offering you cutting-edge technologies</h6>
                        <p className="text-[24px] mt-5 font-normal">We&rsquo;re well-versed in major web and app development technologies, so you <br /> can relax knowing you're in capable hands!</p>
                    </div>
                </section>

                <section className="grid lg:grid-cols-5 md:grid-cols-5  grid-cols-2 lg:px-[20%] gap-10 mt-10">
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="px-[10px] py-[30px] img-tech" src={wordPress} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={laravel} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={node} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={next} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={react} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={js} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={vue} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={fluter} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={html} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={css} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={figma} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={ps} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={ai} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={tailwind} alt="" />
                    </div>
                    <div className="bg-[#EBF3FE] rounded-lg">
                        <img className="p-[25px] img-tech  " src={mongodb} alt="" />
                    </div>

                </section>

            </Container>
        </section>
    );
};

export default Technologies;