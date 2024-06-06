import aboutOne from "../assets/about1.png";
import aboutTwo from "../assets/about2.png";
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'
const About = () => {
  return (
    <>
      <div id="about" className="container md:px-14 px-4 pt-16 m-auto">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center text-center md:text-start">
          <motion.div
            className="md:w-1/2 w-full"
            variants={fadeIn("right", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
          ><img src={aboutOne} alt="" /></motion.div>
          <motion.div
            className="md:w-1/2 w-full"
            variants={fadeIn("down", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
          >
            <h3 className="font-bold text-3xl md:text-5xl md:leading-[3rem]">We have been improving our product <span className="text-secondary">for many years.</span></h3>
            <p className="text-slate-700 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore aut reprehenderit suscipit alias ea.</p>
            <button className="btnPrimary">Get Started</button>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-10 justify-center items-center text-center md:text-start mt-4">
        <motion.div
            className="md:w-1/2 w-full"
            variants={fadeIn("left", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
          ><img src={aboutTwo} alt="" /></motion.div>
          <motion.div
            className="md:w-1/2 w-full"
            variants={fadeIn("up", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
          >
            <h3 className="font-bold text-3xl md:text-5xl md:leading-[3rem]">You can Practice at any<span className="text-secondary">time convinent for you.</span></h3>
            <p className="text-slate-700 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore aut reprehenderit suscipit alias ea.</p>
            <button className="btnPrimary">Get Started</button>
          </motion.div>
        </div>
        
      </div> 
    </>
  )
}

export default About
