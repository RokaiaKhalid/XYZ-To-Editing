import Banner from "../shared/Banner"
import letter from "../assets/news-letter.png"
const Newsletter = () => {
  return (
    <>
      <div className="px-8 max-w-screen-2xl mx-auto pt-20 text-2xl md:text-3xl">
        <Banner banner={letter} heading="Each student an share their discount code for friends"
          subheading='A simple paragraph is comprised of three major components. The first sentence, which is often a declartive sentence, is called the "topic sentence." ' btn1={'I have a code'} />
      </div>
    </>
  )
}

export default Newsletter
