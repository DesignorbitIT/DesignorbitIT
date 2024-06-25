
import AboutUsBanner from "./Banner/AboutUsBanner";
import JoinOurTeam from "./JoinOurTeam/JoinOurTeam";
import OurClient from "./OurClient/OurClient";
import OurCoFounder from "./OurCoFounder/OurCoFounder";
import OurVision from "./OurVision/OurVision";


const AboutUs = () => {
    return (
        <>
            <div>
               
                <AboutUsBanner/>
               <OurVision></OurVision>
               <OurClient></OurClient>
               <OurCoFounder></OurCoFounder>
               <JoinOurTeam/>
            </div>
        </>
    );
};

export default AboutUs;