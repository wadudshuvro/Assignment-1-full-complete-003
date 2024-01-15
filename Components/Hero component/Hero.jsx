const Hero = () => {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container mx-auto w-10/12">
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl text-white lg:text-[56px] font-bold leading-[1.1] mb-8">
              The Future of Learning starts with students at the center
            </h1>
            <a href="#" className=" text-white px-5 py-2.5 bg-[#038C61] rounded-[44px]">
              Learn More
            </a>
          </div>
          <img
            className="md:order-2 object-cover ml-auto animate-updown"
            src="/src/assets/react.svg"  // Make sure the path to your image is correct
            alt="Banner"
            style={{ width: '500px', height: '500px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;