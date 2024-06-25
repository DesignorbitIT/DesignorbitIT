import Container from "../../../Component/UI/Container/Container";
import "./joinOurTeam.css"
import img1 from "../../../assets/img/normal/Pexels Photo by CadoMaestro.png"
import img2 from "../../../assets/img/normal/Pexels Photo by Kampus Production.png"

const JoinOurTeam = () => {
    return (
        <div className="py-10 lg:py-20">
            <Container>
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div className="flex gap-5 justify-center items-center">
                        <img src={img2} alt="" className="lg:w-[280px] w-[170px] lg:h-60 rounded-xl" />
                        <img src={img1} alt=""  className="lg:w-[280px] w-[170px] lg:h-96 rounded-xl"/>
                    </div>
                    <div className="space-y-3">
                        <h2 className="font-bold">Join Our Team</h2>
                        <p className="font-medium">Are you passionate about creativity, innovation, and delivering exceptional digital experiences?
Join our team and become part of our journey in crafting exceptional digital experiences. We&rsduo;re seeking passionate individuals who thrive on creativity and innovation to help us shape the future of design and development.</p>
                        <button className="joinOurTeam-Button text-white px-4 py-2" >Join Now</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default JoinOurTeam;