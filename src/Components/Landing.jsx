import landing from "../assets/landing.png"
import Banner from "../shared/Banner"
const Landing = () => {
  return (
    <>
      <div id="home" className="px-8 max-w-screen-2xl mx-auto pt-20 text-2xl md:text-3xl">
        <Banner banner={landing} heading="Develop your skills without diligance" subheading="A ggod example of a paragraph contains a topic sentance, datails and a conclusion.
          There are many different kids of animals that live in China." btn1={'Get Started'} btn2={"Discount"} />
      </div>
    </>
  )
}

export default Landing
