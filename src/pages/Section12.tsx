import { motion } from "framer-motion";
import careersLeftSm from "../assets/careers/careers-left-sm-v2.png";
import careersRightSm from "../assets/careers/careers-right-sm-v2.png";
import careersLeftMd from "../assets/careers/careers-left-md-v2.png";
import careersRightMd from "../assets/careers/careers-right-md-v2.png";
import careersLeftXl from "../assets/careers/careers-left-xl-v2.png";
import careersRightXl from "../assets/careers/careers-right-xl-v2.png";

const Section12 = () => {
    return (
        <motion.section className="bg-white text-black py-10 px-5"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* ── MOBILE layout ── */}
            <div className="max-w-2xl py-10 mx-auto md:hidden">
                <div className="grid grid-cols-2 gap-3 mb-8">
                    <img src={careersLeftSm} alt="Careers" className="w-full rounded-xl object-cover aspect-square" />
                    <img src={careersRightSm} alt="Careers" className="w-full rounded-xl object-cover aspect-square" />
                </div>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold leading-tight mb-5">
                        Building the future of finance
                    </h2>
                    <p className="text-2xl leading-relaxed mb-8 max-w-sm mx-auto">
                        Our global team is united by a shared mission: to usher in a brave new world by accelerating the adoption of cryptocurrency and building a more open, accessible, and inclusive economic future for everyone
                    </p>
                    <button className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-2xl hover:bg-gray-800 text-lg">
                        Explore jobs
                    </button>
                </div>
            </div>

            {/* ── MD layout ── */}
            <div className="hidden md:block lg:hidden max-w-3xl mx-auto p-28">
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <img src={careersLeftMd} alt="Careers" className="w-full rounded-xl object-cover aspect-square" />
                    <img src={careersRightMd} alt="Careers" className="w-full rounded-xl object-cover aspect-square" />
                </div>
                <div className="text-center">
                    <h2 className="text-6xl font-semibold leading-tight mb-5">
                        Building the future of finance
                    </h2>
                    <p className="text-xl leading-relaxed mb-8 max-w-lg mx-auto">
                        Our global team is united by a shared mission: to usher in a brave new world by accelerating the adoption of cryptocurrency and building a more open, accessible, and inclusive economic future for everyone
                    </p>
                    <button className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-2xl hover:bg-gray-800 text-lg">
                        Explore jobs
                    </button>
                </div>
            </div>

            {/* ── LG layout ── */}
            <div className="hidden lg:py-30 lg:grid grid-cols-3 items-center gap-0 max-w-7xl mx-auto">
                <img src={careersLeftXl} alt="Careers" className="w-full -ml-10 rounded-xl object-cover self-start h-72 xl:h-80" />
                <div className="text-center px-1 ">
                    <h2 className="text-4xl xl:text-5xl font-semibold leading-tight mb-5">
                        Building the future of finance
                    </h2>
                    <p className="text-base xl:text-lg leading-relaxed mb-8 text-gray-700">
                        Our global team is united by a shared mission: to usher in a brave new world by accelerating the adoption of cryptocurrency and building a more open, accessible, and inclusive economic future for everyone
                    </p>
                    <button className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-2xl hover:bg-gray-800 text-lg">
                        Explore jobs
                    </button>
                </div>
                <img src={careersRightXl} alt="Careers" className="w-full ml-2 rounded-xl mt-40 -right-10 object-cover self-end h-72 xl:h-80" />
            </div>

        </motion.section>
    );
};

export default Section12;
