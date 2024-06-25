import Container from "../../../Component/UI/Container/Container";

const ShowCase = () => {
  return (
    <>
      <section className="bg-[#EBF3FE] py-20">
        <Container >

          <div className="md:space-y-[30px] lg:space-y-[60px] ">
            <div className="text-center  font-poppins lg:font-normal font-medium">
              <h2>A strategy-driven, result-focused Design service <br className="hidden lg:block"/>
                agency that knows how to make your brand <br className="hidden lg:block"/>
                stand out in the online crowd.
              </h2>
            </div>

        
              <div className="grid grid-cols-3 text-center md:px-[20%] ">
                <div>
                  <h2 className=" text-[#056AAD]">15+</h2>
                  <p className="lg:text-[23px] text-black font-medium">Experts <hr className="w-[50px] mx-auto border border-[#056AAD] mt-2"  /></p>
                </div>
                <div>
                  <h2 className=" text-[#056AAD]">3+</h2>
                  <p className="lg:text-[23px] text-black font-medium">Years <hr className="w-[50px] mx-auto border border-[#056AAD] mt-2"  /></p>
                </div>
                <div>
                  <h2 className=" text-[#056AAD]">400+</h2>
                  <p className="lg:text-[23px] text-black font-medium">Project <hr className="w-[50px] mx-auto border border-[#056AAD] mt-2"  /></p>
                </div>
              </div>
           
          </div>

        </Container>
      </section>
    </>
  );
};

export default ShowCase;