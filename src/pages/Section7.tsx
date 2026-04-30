import { motion } from "framer-motion";

const Section7 = () => {
    return (
        <motion.section className="bg-white text-black py-20 px-5"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-[clamp(1.8rem,6vw,3rem)] leading-snug">
                    Way back when, we pioneered the world's{" "}
                    <span className="text-[#e8174a]">first blockchain explorer</span>
                    <br />
                    Now, use it to begin your own crypto journey
                </p>
            </div>
        </motion.section>
    );
};

export default Section7;
