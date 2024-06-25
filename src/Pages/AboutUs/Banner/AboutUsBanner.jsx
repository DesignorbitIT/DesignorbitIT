import "./AboutUsBanner.css"
import Container from "../../../Component/UI/Container/Container";
const AboutUsBanner = () => {
    return (
        <div className="pt-32 md:pt-40 pb-10 lg:pb-20">
            <Container><div className="text-center lg:w-[70%] mx-auto mb-5">
                <h2 className="font-semibold text-[#0872B5]">Our Company</h2>
                <p>When you need our support in developing your business, come with us and we&rsduo;ll assist you get there. Everything you have to do is sit back and feel the objective.</p>
            </div></Container>
           <div className="">
           <figure className="bg-cover lg:h-[700px] w-full overflow-hidden relative">
                    <img src="https://s3-alpha-sig.figma.com/img/9a15/3677/7f605bfdf789dc3d9a8aca2013d44538?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrQ8mg8gQpQwuPyft~xtjqjhxkBq3NEDYLPWe2BGKg~g48VslTmt483uV09SqcAhCXw5koWyuvgj7YyqQ3O1vcU3CSfY61NGZb-Qi-mH9bxGW6kcfQ9Q2JfyAkI6wxRC5aDPW8GM1SIKoTMeGYWfRQbMUgELPt4-L9sCv8abwTByKk12OPzYhiqhYY9LkDvQ2Ui129gz-mEbGDoaLW8dHq6spJsviOt4avfjVMks89lkMoeb~rx3UndmA7JNSbUuLJWOtUPEg86DJhgyjNarYO4Tw3Vg~DzfHJ3~gujijp3nILsLJMVocUGCmoKuK9~IfmEWg40d4NM06Ha2AMB4dg__" alt="" className="" />
                    <div className="absolute lg:top-[50%] top-[40%] left-[2%] md:left-[10%] aboutUs-Banner-Background lg:p-10 p-3 mx-auto" >
                    <header>
              <p className="heading mb-3">Growing With Our Clients</p>
            </header>
            <h5>Creative Services For Boost Your Business Growth</h5>
                    </div>
            </figure>
            
           </div>
        </div>
    );
};

export default AboutUsBanner;