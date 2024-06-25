// import Check from "../../Component/Check/Check";

import Banner from "./Banner/Banner";
import ContractUs from "./ContractUs/ContractUs";
import GrowBusiness from "./GrowBusiness/GrowBusiness";
import ShowCase from "./ShowCase/ShowCase";


import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Technologies from "./technologies/technologies";
import Discuss from "./Discuss/Discuss";
import Portfolio from "./Portfolio/Portfolio";



const Home = () => {
  return (
    <div className="">
      <Banner />  
      <GrowBusiness />
      <ShowCase></ShowCase>
      <Technologies></Technologies>
      <Portfolio/>
      <ContractUs />
      <WhyChooseUs />
      <Discuss></Discuss>






    </div>
  );
};

export default Home;