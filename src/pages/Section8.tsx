import { useState } from "react";
import { motion } from "framer-motion";
import blueBg from "../assets/blue-bg.png";
import blueBgMd from "../assets/blue-bg-md.png";
import blueBgXl from "../assets/blue-bg-xl.png";
import faviconIcon from "../assets/cards2/favicon.ico";

const cards = [
    { icon: faviconIcon, title: "Digital asset treasury solutions", desc: "Integrate digital assets into your treasury strategy" },
    { icon: faviconIcon, title: "OTC spot and options trading", desc: "Execute large orders with minimal market impact and competitive spreads" },
    { icon: faviconIcon, title: "Token launch and distribution", desc: "Gain access to millions of users, integrate with Blockchain's proprietary wallet" },
    { icon: faviconIcon, title: "Liquidity provisioning", desc: "Accelerate your token's adoption with reliable, transparent market making" },
    { icon: faviconIcon, title: "Secure custody", desc: "Safeguard digital assets with military-grade security and rigorous regulatory compliance" },
    { icon: faviconIcon, title: "Staking", desc: "Earn rewards on digital assets without operational complexity or risk exposure" },
];

const cardStyle = { background: "rgba(158, 161, 206, 0.2)", backdropFilter: "blur(2px)" };

const CardItem = ({ card }: { card: typeof cards[0] }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="rounded-2xl  h-105 lg:h-110 px-8 flex flex-col justify-center min-h-96 flex-shrink-0 transition-all duration-500 cursor-pointer"
            style={{
                background: hovered
                    ? "linear-gradient(105deg, #000000ff 0%, #272626ff 25%, #3f3f3fff 50%, #323131ff 75%, #000000 100%)"
                    : "rgba(8, 8, 15, 0.2)",
                backdropFilter: "blur(120px)"
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="mb-10 lg:pt-10">
                <img src={card.icon} alt="" className="w-10 h-10 object-contain mb-6" />
                <h3 className="text-4xl font-semibold mb-2 md:my-3 lg:my-0">{card.title}</h3>
                <p className="text-white text-xl ">{card.desc}</p>
            </div>
        </div>
    );
};

const Section8 = () => {
    const [activeMobile, setActiveMobile] = useState(0);
    const [activeMd, setActiveMd] = useState(0);
    const [activeLg, setActiveLg] = useState(0);

    // md: clamp so last dot shows last 2 cards
    const mdTranslate = Math.min(activeMd, cards.length - 2);
    // lg: 2 groups of 3
    const lgTranslate = activeLg;

    return (
        <motion.section className="relative text-white  "
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* MOBILE */}
            <div className="md:hidden bg-red-400 py-18 px-5 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${blueBg})` }}>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-8">For business</h2>
                    <p className="text-center text-white text-xl mb-20 mt-2 max-w-xs mx-auto">
                        From token foundations to family offices, hedge funds to high-net-worth individuals,
                        we facilitate best-in-class opportunities for those looking to venture beyond what came before
                    </p>
                    <div className="rounded-2xl p-6 px-5 h-120 flex flex-col justify-between mb-6 transition-all duration-500" style={{ background: "linear-gradient(135deg, #000000 0%, #4a4a4a 25%, #d1d1d1 50%, #4a4a4a 75%, #000000 100%)", backdropFilter: "blur(8px)" }}>
                        <div className="flex flex-col mt-10 pt-14 gap-2">
                            <div className="py-8">
                                <img src={cards[activeMobile].icon} alt="" className="w-14 h-14 object-contain" />
                            </div>
                            <h3 className="text-4xl font-semibold mb-2">{cards[activeMobile].title}</h3>
                            <p className="text-white text-xl">{cards[activeMobile].desc}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {cards.map((_, i) => (
                            <button key={i} onClick={() => setActiveMobile(i)}
                                className="transition-all duration-300 rounded-full bg-white"
                                style={{ width: activeMobile === i ? "34px" : "10px", height: "10px", opacity: activeMobile === i ? 1 : 0.4 }}
                                aria-label={`Card ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </div>

            {/* MD — 2 cards visible, 6 dots */}
            <div className="hidden md:block lg:hidden py-20 px-8 bg-fixed bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${blueBgMd})` }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-semibold text-center mb-4">For business</h2>
                    <p className="text-center text-white text-xl mb-12 mt-2 max-w-lg mx-auto">
                        From token foundations to family offices, hedge funds to high-net-worth individuals,
                        we facilitate best-in-class opportunities for those looking to venture beyond what came before
                    </p>
                    <div className="overflow-hidden  mb-8">
                        <div className="flex gap-4 transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(calc(${mdTranslate} * -51%))` }}>
                            {cards.map((card, i) => (
                                <div key={i} className="flex-shrink-0 " style={{ width: "48%" }}>
                                    <CardItem card={card} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {cards.map((_, i) => (
                            <button key={i} onClick={() => setActiveMd(i)}
                                className="transition-all duration-300 rounded-full bg-white"
                                style={{ width: activeMd === i ? "34px" : "10px", height: "10px", opacity: activeMd === i ? 1 : 0.4 }}
                                aria-label={`Card ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </div>

            {/* LG — 3 cards visible, 2 dots */}
            <div className="hidden lg:block py-38 bg-fixed px-10 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${blueBgXl})` }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl font-semibold text-center mb-4">For business</h2>
                    <p className="text-center text-white text-2xl mb-14 mt-2 max-w-2xl mx-auto">
                        From token foundations to family offices, hedge funds to high-net-worth individuals,
                        we facilitate best-in-class opportunities for those looking to venture beyond what came before
                    </p>
                    <div className="overflow-hidden mb-8">
                        <div className="flex gap-4 transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(calc(${lgTranslate} * -101%))` }}>
                            {/* Group 1: cards 0,1,2 */}
                            <div className="flex gap-4 flex-shrink-0 w-full">
                                {cards.slice(0, 3).map((card, i) => (
                                    <div key={i} className="flex-1"><CardItem card={card} /></div>
                                ))}
                            </div>
                            {/* Group 2: cards 3,4,5 */}
                            <div className="flex gap-4 flex-shrink-0 w-full">
                                {cards.slice(3, 6).map((card, i) => (
                                    <div key={i} className="flex-1"><CardItem card={card} /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {[0, 1].map((i) => (
                            <button key={i} onClick={() => setActiveLg(i)}
                                className="transition-all duration-300 rounded-full bg-white"
                                style={{ width: activeLg === i ? "34px" : "10px", height: "10px", opacity: activeLg === i ? 1 : 0.4 }}
                                aria-label={`Group ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Section8;
