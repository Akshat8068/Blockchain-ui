import { motion } from "framer-motion";
import appleLogo from "../assets/appleicon.png";
import playstoreLogo from "../assets/playstoreicon.png";

const Section13 = () => {
    return (
        <motion.section className="text-black   bg-white p-5 md:py-18 md:px-16  lg:py-24 lg:px-40"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="max-w-2xl  rounded-xl p-10 mx-auto text-center bg-[#FEF8F6] md:max-w-xl lg:max-w-2xl">

                {/* Heading */}
                <h2 className="text-5xl font-medium leading-tight mb-8 lg:mb-2">
                    Invest like an icon
                </h2>

                {/* Available on + rating */}
                <div className="flex items-center justify-center gap-2 mb-2 lg:mb-0">
                    <span className=" text-2xl font-semibold">Available on</span>
                    <img src={appleLogo} alt="Apple" className="w-10 h-10 object-contain" />
                    <img src={playstoreLogo} alt="Google Play" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-10 lg:mb-3">
                    <span className="text-2xl">★</span>
                    <span className=" text-2xl font-semibold">4.7/5</span>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center  gap-4">
                    <button
                        className="bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors text-base whitespace-nowrap"
                    >
                        Get started
                    </button>
                    <button

                        className="border border-black text-black font-semibold px-8 py-3 rounded-xl hover:bg-black hover:text-white transition-colors text-base whitespace-nowrap"
                    >
                        Download app
                    </button>
                </div>

            </div>
        </motion.section>
    );
};

export default Section13;
