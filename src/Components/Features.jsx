import Feature from "../assets/feature.png";
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'
const Features = () => {
  return (
    <>
      <div id="features" className="container md:px-14 px-6 pt-16 text-center md:text-start max-w-srean-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <motion.div
            className="lg:w-1/4"
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}
          >
            <h3 className="text-3xl text-primary font-bold lg:w-2/3 mb-3">Why we are better than others</h3>
            <p className="text-base text-tartiary">A simple parargraph is comprised of three major components. The first sentence, whish is often a delarative sentence, is called the "topic sentence."</p>
          </motion.div>
          {/* features cards */}
          <motion.div
            className="w-full lg:w-3/4 grid md:grid-cols-3 grid-cols-1 items-start md:gap-12 gap-8"
            variants={fadeIn("up", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once:false, amount: 0.7}}
          >
            <div  className=" bg-[rgba(255, 255, 255, 0,04)] rounded-[35px]  h-96 shadow-3xl  flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={Feature} alt=""/>
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convention study schedule</h5>
              </div>
            </div>
            <div  className="bg-[rgba(255, 255, 255, 0,04)] rounded-[35px]  h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-32">
              <div>
                <img src={Feature} alt=""/>
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convention study schedule</h5>
              </div>
            </div>
            <div  className="bg-[rgba(255, 255, 255, 0,04)] rounded-[35px]  h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={Feature} alt=""/>
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Convention study schedule</h5>
              </div>
            </div>
          </motion.div>
        </div>           
      </div>
    </>
  )
}

export default Features
