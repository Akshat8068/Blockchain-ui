import { motion } from "framer-motion";
import careersLeft from "../assets/careers/careers-left-sm-v2.png";
import careersRight from "../assets/careers/careers-right-sm-v2.png";

const Section12 = () => {
    return (
        <motion.section className="bg-white text-black py-10 px-5 "
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="max-w-2xl mx-auto">

                {/* Two images side by side */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                    <img src={careersLeft} alt="Careers" className="w-full rounded-xl object-cover aspect-square" />
                    <img src={careersRight} alt="Careers" className="w-full rounded-xl object-cover aspect-square" />
                </div>

                {/* Text centered */}
                <div className="text-center">
                    <h2 className="text-[clamp(3.5rem,9vw,4rem)] font-semibold leading-tight mb-5">
                        Building the future of finance
                    </h2>
                    <p className=" text-2xl leading-relaxed mb-8 max-w-sm mx-auto">
                        Our global team is united by a shared mission: to usher in a brave new world by accelerating the adoption of cryptocurrency and building a more open, accessible, and inclusive economic future for everyone
                    </p>
                    <button
                        className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-2xl hover:bg-gray-800 text-lg"
                    >
                        Explore jobs
                    </button>
                </div>

            </div>
        </motion.section>
    );
};

export default Section12;
