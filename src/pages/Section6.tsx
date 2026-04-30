import { motion } from "framer-motion";
import card1Bg from "../assets/cards2/card-1-v2.png";
import card2Bg from "../assets/cards2/card-2-v2.png";
import card3Bg from "../assets/cards2/card-3-v2.png";
import card2Logo from "../assets/cards2/card-2-icon.png";
import card3Logo from "../assets/cards2/favicon.ico";

const cards = [
    {
        bg: card1Bg,
        logo: card3Logo,
        title: "Security first",
        desc: "We've never lost customer funds",
    },
    {
        bg: card2Bg,
        logo: card2Logo,
        title: "Used by millions",
        desc: "Over 94M+ wallets have been created to date and growing",
    },
    {
        bg: card3Bg,
        logo: card3Logo,
        title: "Digital asset hub",
        desc: "We've handled over $1.2T+ worth of transactions",
    },
];

const Section6 = () => {
    return (
        <motion.section className="bg-white text-black py-14 px-5"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="max-w-2xl mx-auto">

                {/* Heading */}
                <h2 className="leading-tight mb-14">
                    <span className="text-5xl font-semibold">Cryptoing<br />since</span>
                    <br />
                    <span className=" text-7xl font-extrabold">2011</span>
                </h2>

                {/* Cards — 1 col */}
                <div className="flex flex-col gap-5 ">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="relative w-full h-80 rounded-2xl overflow-hidden flex flex-col justify-between p-6"
                        >
                            {/* BG */}
                            <img
                                src={card.bg}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Content over bg */}
                            <div className="relative text-white z-10 flex flex-col justify-between h-full">
                                <img src={card.logo} alt="" className="w-10 h-10 object-contain" />
                                <div>
                                    <p className="font-semibold text-4xl mb-1">{card.title}</p>
                                    <p className="text-2xl opacity-80">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
};

export default Section6;
