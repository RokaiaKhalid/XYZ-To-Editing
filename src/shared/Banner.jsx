// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'
const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  // let btns = document.querySelectorAll('button');

  return (
    <div className="container gradientBg rounded-xl rounded-br-[80px] md:p-9 px-6 pb-8 mx-auto">
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between items-center"
        variants={fadeIn("up", 0.2)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
      >
      {/* Bannar Content */}
      <div className="md:min-w-3/4  text-white text-center md:text-start">
        <h2 className=" text-4xl md:text-6xl lg:text-6xl font-bold  mb-6 lg:leading-[80px] md:leading-[70px] leading-[50px]">{heading}</h2>
        <p className="text-xl md:text-2xl text-[#EDEDED]">{subheading}</p>
        <div className="space-x-5 space-y-8 py-4">
          <button className="btnPrimary">{btn1}</button>
          <button className="btnPrimary">{btn2}</button>
        </div>
      </div>
      {/* banner image */}
        <motion.div
          className="md:w-2/3"
          variants={fadeIn("down", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
        ><img src={banner} alt="" className="mix-blend-multiply w-full" /></motion.div>
    </motion.div>
  </div>
  )
}

export default Banner
