import { useState } from "react";
import { FaStar } from "react-icons/fa6";
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'
const Pricing = () => {
  const pricing = [
    { name: "Start", discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, ipsum.", monthPrice: 19, properties: ["Videos of Lessons", "Homework check", "Add Lorem ipsum", "Lorem ipsum, dolor", "Lorem ipsum, dolor"] },
    { name: "Advanced", discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, ipsum.", monthPrice: 25, properties: ["Videos of Lessons", "Homework check", "Add Lorem ipsum", "Lorem ipsum, dolor", "Lorem ipsum, dolor"] },
    { name: "Premium", discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, ipsum.", monthPrice: 40, properties: ["Videos of Lessons", "Homework check", "Add Lorem ipsum", "Lorem ipsum, dolor", "Lorem ipsum, dolor"] }
  ];
  // const toggleBtn = document.querySelector('label input:checked + span') ? true : false;
  // console.log(toggleBtn)
  // console.log(document.querySelector('label input:checked + span'))
  // console.log(document.querySelector('label input:checked '))

  const [checked, setChecked] = useState(true);

  return (
    <>
			<div id="pricing" className="container md:px-14 px-4 pt-16 m-auto">
				<div className="text-center">
					<h3 className="font-bold text-3xl md:text-5xl text-primary">Here are all our plans</h3>
					<p className="w-4/5 md:w-2/5 mx-auto mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum quidem at voluptas.</p>
					<div className="py-6 md:py-10 flex items-center justify-center">
						<span className="text-2xl font-bold italic text-tartiary  mx-8">Mounthly</span>
						<label className={`w-24 h-12 rounded-full inline-block p-1 relative ${checked ? "bg-secondary" : "bg-tartiary"}`} >
							<input type="checkbox" defaultChecked={checked}
                onChange={() => setChecked((state) => !state)}
                className="w-full h-full opacity-0" />
							<span className={`bg-white shadow-2xl rounded-full inline-block w-10 h-10 absolute left-1 transition-all duration-200 ${ checked ? "translate-x-8 md:translate-x-12 " : "translate-x-0 md:translate-x-0"}`}></span>
						</label>
						<span className="text-2xl font-bold italic text-secondary mx-8">Yearly</span>
					</div>
          <motion.div
            className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-12 px-6"
            variants={fadeIn("up", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once:false, amount: 0.5}}
          >
						{
							pricing.map(({ name, discription, monthPrice, properties }) => {
								
								return <>
									<div className="shadow-3xl px-4 py-5">
										<div>
												<h3 className="text-3xl font-bold">{name}</h3>
												<p className="text-slate-800 my-4 px-2">{discription}</p>
												<span><span className="text-secondary text-4xl font-bold">{checked ? Math.floor(monthPrice * 12 * .90) : monthPrice}$</span> /{checked ? "year" : "Month"}</span>
											</div>
											<ul className="text-start">
												{properties.map((e, i) => (<li key={i + "a"} className="border border-none py-2 text-slate-600"><FaStar className="inline-block text-yellow-500 text-xl m-2" />  {e}</li>))}
											</ul>
											<button className="btnPrimary mt-4">Get Started</button>
										</div>
												
										</>
							})
						}
					</motion.div>
				</div>
				
      </div>
    </>
  )
}

export default Pricing
