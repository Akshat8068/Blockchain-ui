import { motion } from "framer-motion";
import card1Bg from "../assets/card/card-1-v2.png";
import card1Content from "../assets/card/card-content-1-v2.png";
import card2Bg from "../assets/card/card-2-v2.png";
import card3Bg from "../assets/card/card-3-v2.png";
import card3Content from "../assets/card/card-content-3-v2.png";
import card4Bg from "../assets/card/card-4-v2.png";

const cards = [
    { id: 1, bg: card1Bg, content: card1Content, label: "Seamless deposits and withdrawals" },
    { id: 2, bg: card2Bg, content: null, label: "Earn up to 10% on your crypto" },
    { id: 3, bg: card3Bg, content: card3Content, label: "Buy, sell, take a break, swap, repeat" },
    { id: 4, bg: card4Bg, content: null, label: "Connect to DApps and manage NFTs" },
];

const Section3 = () => {
    return (
        <motion.section
            className="bg-white text-black min-h-screen flex flex-col justify-center py-14 px-5 -mt-4 relative z-10 pb-0"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="max-w-2xl mx-auto w-full">

                {/* Header */}
                <h2 className="text-[clamp(3.5rem,9vw,4rem)] font-semibold leading-tight text-center mb-3">
                    Be Your Own Bank®
                </h2>
                <p className="text-center  text-xl mb-10">
                    Trading platform and DeFi Wallet, all in one application
                </p>

                {/* Cards — 1 col mobile, 2 col md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card) => (
                        <div key={card.id} className="flex flex-col gap-3 mb-7 mt-4">
                            {/* Card — fixed height so all cards same size */}
                            <div className="relative w-full h-80 mb-2 rounded-2xl overflow-hidden">
                                <img
                                    src={card.bg}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {card.content && (
                                    <div className="absolute inset-0 flex items-center justify-center p-5">
                                        <img
                                            src={card.content}
                                            alt=""
                                            className="w-full max-w-[80%] object-contain drop-shadow-xl"
                                        />
                                    </div>
                                )}
                            </div>
                            {/* Label */}
                            <p className="text-black font-semibold text-3xl leading-snug">
                                {card.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
};

export default Section3;
