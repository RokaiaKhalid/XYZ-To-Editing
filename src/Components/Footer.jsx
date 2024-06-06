import logo from "../assets/logo.png"
import { AiOutlineFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
     <div className="mt-12 bg-[#010851] px-12 md:px-24 max-w-screen-2xl mx-auto text-white">
      <div className="py-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8 mb-10">
            <div>
  <a href="" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
  <img src={logo} className='w-16 inline-block items-start' />
  <span className="text-white">XYZ</span>
</a>
<p className="md:w-1/2 text-white">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
  </div>
        <div>
            <input type="email" name="email" id="email" placeholder="Your email"
                className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none " />
            <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
            </div>
        </div>
        {/* footer navigetions */}
        <div className="md:w-1/2 flex flex-col md:flex-row  flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5 w-full md:w-fit">
            <h4 className="text-xl md:text-2xl">Platform</h4>
            <ul>
              <li><a href="#" className="block hover:text-gray-300 ">Overview</a></li>
              <li><a href="#" className="block hover:text-gray-300 ">Features</a></li>
              <li><a href="#" className="block hover:text-gray-300 ">About</a></li>
              <li><a href="#" className="block hover:text-gray-300 ">Pricing</a></li>
            </ul>
          </div>
          <div className="space-y-4 mt-5 w-full md:w-fit">
            <h4 className="text-xl md:text-2xl">Help</h4>
            <ul>
              <li><a href="#" className="block hover:text-gray-300 ">How does it works?</a></li>
              <li><a href="#" className="block hover:text-gray-300 ">Where to ask question?</a></li>
              <li><a href="#" className="block hover:text-gray-300 ">How is play?</a></li>
              <li><a href="#" className="block hover:text-gray-300 ">What is needed for this?</a></li>
            </ul>
          </div>
          <div className="space-y-4 mt-5 w-full md:w-fit">
            <h4 className="text-xl md:text-2xl">Contacts</h4>
            <ul>
              <li ><a href="#" className="hover:text-gray-300 ">(012) 1234-567-899</a></li>
              <li ><a href="#" className="hover:text-gray-300 ">123 xyz xyx</a></li>
              <li ><a href="#" className="hover:text-gray-300 ">qwuerybaihefv, qiww - hrebci</a></li>
              <li ><a href="#" className="hover:text-gray-300 ">095467</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="my-7">@ XYZ {new Date().getFullYear()},All right reserved.</p>
          <div className="flex text-2xl mb-7 md:mt-7">
            <a className="mx-2 cursor-pointer hover:-translate-y-3 transition-all duration-300"><AiOutlineFacebook /></a>
            <a className="mx-2 cursor-pointer hover:-translate-y-3 transition-all duration-300"><FaSquareXTwitter /></a>
            <a className="mx-2 cursor-pointer hover:-translate-y-3 transition-all duration-300"><FaLinkedin /></a>
            <a className="mx-2 cursor-pointer hover:-translate-y-3 transition-all duration-300"><FaInstagram /></a>
          </div>
      </div>
     </div>
      
    </>
  )
}

export default Footer
