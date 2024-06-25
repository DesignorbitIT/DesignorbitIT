import img1 from "../../../assets/img/Pexels Photo by fauxels.png";
import img2 from "../../../assets/img/Pexels Photo by Jopwell.png";
import Container from "../../../Component/UI/Container/Container";
import "./WhyChooseUs.css"

const WhyChooseUs = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 p-5 py-20">
        <div className="relative w-full h-fit mb-32 sm:mb-40 md:mb-52 lg:mb-0 ">
          <figure className="w-[63%]">
            <img  src={img1} alt="" className="lg:rounded-t-[100px] rounded-t-[50px]" />
          </figure>
          <figure className="absolute top-1/2 right-0 w-[63%]">
            <img src={img2} alt="" className="lg:rounded-b-[100px] lg:rounded-r-[100px] rounded-r-[50px] rounded-b-[50px]" />
          </figure>
          <div className="absolute bottom-0 left-[37%] -mb-12 sm:-mb-16 -ml-12 sm:-ml-16  text-white ">
            <div className="bg-[#014989] flex flex-col circle-style shadow-2xl sm:w-32 h-24 w-24 sm:h-32 justify-center items-center rounded-full">
              <h1 className="text-3xl sm:text-4xl font-bold">03</h1>
              <p className="text-xs sm:text-base text-center font-semibold">
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#009AFF] text-xl font-semibold">
            Why Choose Us
          </h1>
          <h1 className="text-black text-4xl mt-2 font-bold">
            We Follow <span className="text-[#069DFF]">Best Practice</span> In{" "}
            <br />
            Our Company
          </h1>
          <h1 className="text-[#716F6F] text-base mt-3 font-medium">
            We help businesses bring ideas to life in the digital world
            designing & implementing the technology tools that they need to win.
            We help businesses bring ideas to life in the digital world.
          </h1>

          <div className="space-y-5 mt-5">
            <div className="">
              <div className="flex justify-start gap-3 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.00219727"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#D0ECFF"
                    />
                    <path
                      d="M25.9359 17.1377C25.181 20.9121 22.3351 24.4661 18.3417 25.2603C16.3941 25.6481 14.3738 25.4116 12.5684 24.5845C10.763 23.7573 9.26457 22.3816 8.2865 20.6533C7.30843 18.925 6.90057 16.9322 7.12098 14.9586C7.34139 12.985 8.17885 11.1312 9.5141 9.66129C12.2528 6.64477 16.8773 5.8144 20.6517 7.32417"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1028 15.628L16.8773 19.4024L25.9359 9.58887"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-black font-semibold">Latest Technology</h1>
              </div>
              <h1 className="text-black pl-8 font-normal">
                We help businesses bring ideas to life in the digital world
                designing & implementing
              </h1>
            </div>
            <div className="">
              <div className="flex justify-start gap-3 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.00219727"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#D0ECFF"
                    />
                    <path
                      d="M25.9359 17.1377C25.181 20.9121 22.3351 24.4661 18.3417 25.2603C16.3941 25.6481 14.3738 25.4116 12.5684 24.5845C10.763 23.7573 9.26457 22.3816 8.2865 20.6533C7.30843 18.925 6.90057 16.9322 7.12098 14.9586C7.34139 12.985 8.17885 11.1312 9.5141 9.66129C12.2528 6.64477 16.8773 5.8144 20.6517 7.32417"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1028 15.628L16.8773 19.4024L25.9359 9.58887"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-black font-semibold">Latest Technology</h1>
              </div>
              <h1 className="text-black pl-8 font-normal">
                We help businesses bring ideas to life in the digital world
                designing & implementing
              </h1>
            </div>
            <div className="">
              <div className="flex justify-start gap-3 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.00219727"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#D0ECFF"
                    />
                    <path
                      d="M25.9359 17.1377C25.181 20.9121 22.3351 24.4661 18.3417 25.2603C16.3941 25.6481 14.3738 25.4116 12.5684 24.5845C10.763 23.7573 9.26457 22.3816 8.2865 20.6533C7.30843 18.925 6.90057 16.9322 7.12098 14.9586C7.34139 12.985 8.17885 11.1312 9.5141 9.66129C12.2528 6.64477 16.8773 5.8144 20.6517 7.32417"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1028 15.628L16.8773 19.4024L25.9359 9.58887"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-black font-semibold">Latest Technology</h1>
              </div>
              <h1 className="text-black pl-8 font-normal">
                We help businesses bring ideas to life in the digital world
                designing & implementing
              </h1>
            </div>
            <div className="">
              <div className="flex justify-start gap-3 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.00219727"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#D0ECFF"
                    />
                    <path
                      d="M25.9359 17.1377C25.181 20.9121 22.3351 24.4661 18.3417 25.2603C16.3941 25.6481 14.3738 25.4116 12.5684 24.5845C10.763 23.7573 9.26457 22.3816 8.2865 20.6533C7.30843 18.925 6.90057 16.9322 7.12098 14.9586C7.34139 12.985 8.17885 11.1312 9.5141 9.66129C12.2528 6.64477 16.8773 5.8144 20.6517 7.32417"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1028 15.628L16.8773 19.4024L25.9359 9.58887"
                      stroke="#069DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-black font-semibold">Latest Technology</h1>
              </div>
              <h1 className="text-black pl-8 font-normal">
                We help businesses bring ideas to life in the digital world
                designing & implementing
              </h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;