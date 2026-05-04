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

// Used in XL section
const CardItem = ({ card }: { card: typeof cards[0] }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="rounded-2xl px-8 flex flex-col justify-center min-h-96 flex-shrink-0 transition-all duration-500 cursor-pointer"
            style={{
                background: hovered
                    ? "linear-gradient(105deg, #000000ff 0%, #272626ff 25%, #3f3f3fff 50%, #323131ff 75%, #000000 100%)"
                    : "rgba(8, 8, 15, 0.2)",
                backdropFilter: "blur(120px)"
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div>
                <img src={card.icon} alt="" className="w-10 h-10 object-contain mb-6" />
                <h3 className="text-4xl font-semibold mb-2">{card.title}</h3>
                <p className="text-white text-xl">{card.desc}</p>
            </div>
        </div>
    );
};

// Used in MD section — 1 card visible + peek, 6 dots
// Card width = 75vw so that 1 full card + ~25vw peek of next is visible
const MdCardItem = ({ card }: { card: typeof cards[0] }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="flex-shrink-0 w-[400px] mx-5 h-[420px] flex flex-col justify-center px-7 cursor-pointer transition-all duration-500"
            style={{
                borderRadius: "16px",
                background: hovered
                    ? "linear-gradient(105deg, #000000ff 0%, #272626ff 25%, #3f3f3fff 50%, #323131ff 75%, #000000 100%)"
                    : "rgba(8, 8, 15, 0.5)",
                backdropFilter: "blur(120px)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={card.icon} alt="" className="w-10 h-10 object-contain mb-10" />
            <h3 className="text-[32px] font-bold mb-3">{card.title}</h3>
            <p className="text-white text-[24px]">{card.desc}</p>
        </div>
    );
};

// Used in LG section — 2 cards visible + peek, 3 dots
const LgCardItem = ({ card }: { card: typeof cards[0] }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="flex-shrink-0 flex flex-col justify-center px-8 cursor-pointer transition-all duration-500"
            style={{
                width: "400px",
                height: "460px",
                borderRadius: "16px",
                background: hovered
                    ? "linear-gradient(105deg, #000000ff 0%, #272626ff 25%, #3f3f3fff 50%, #323131ff 75%, #000000 100%)"
                    : "rgba(8, 8, 15, 0.5)",
                backdropFilter: "blur(120px)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={card.icon} alt="" className="w-10 h-10 object-contain mb-6" />
            <h3 className="text-3xl font-semibold mb-3">{card.title}</h3>
            <p className="text-white text-lg">{card.desc}</p>
        </div>
    );
};

const Section8 = () => {
    const [activeMobile, setActiveMobile] = useState(0);
    const [activeMd, setActiveMd] = useState(0);
    const [activeLg, setActiveLg] = useState(0);
    const [activeXl, setActiveXl] = useState(0);

    // LG: dot 0 → 0 cards shift, dot 1 → 2 cards, dot 2 → 4 cards
    const lgDotToIndex = [0, 2, 4];
    const lgTranslate = lgDotToIndex[activeLg];
    const xlTranslate = activeXl;

    return (
        <motion.section className="relative text-white"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* MOBILE */}
            <div className="md:hidden py-18 px-5 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${blueBg})` }}>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-8">For business</h2>
                    <p className="text-center text-white text-xl mb-20 mt-2 max-w-xs mx-auto">
                        From token foundations to family offices, hedge funds to high-net-worth individuals,
                        we facilitate best-in-class opportunities for those looking to venture beyond what came before
                    </p>
                    <div className="rounded-2xl p-6 px-5 h-120 flex flex-col justify-between mb-6 transition-all duration-500"
                        style={{ background: "linear-gradient(105deg, #000000ff 0%, #272626ff 25%, #3f3f3fff 50%, #323131ff 75%, #000000 100%)", backdropFilter: "blur(8px)" }}>
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

            {/* MD — dot 0: 1 card full + next peek right | dot 1-4: prev peek left + 1 card full + next peek right | dot 5: prev peek left + 1 card full */}
            <div className="hidden bg-fixed md:block lg:hidden py-20 bg-no-repeat bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${blueBgMd})` }}>
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-5xl font-semibold text-center mb-4">For business</h2>
                    <p className="text-center text-white text-xl mb-12 mt-2 max-w-lg mx-auto">
                        From token foundations to family offices, hedge funds to high-net-worth individuals,
                        we facilitate best-in-class opportunities for those looking to venture beyond what came before
                    </p>
                </div>
                {/* 
                  Card width: 600px, gap: 16px, step = 616px, half card = 300px
                  dot 0: translateX(16px) → card starts at 16px, right peek visible
                  dot i (1-5): translateX(calc(316px - i*616px)) → prev half on left, next half on right
                */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            gap: "16px",
                            transform: activeMd === 0
                                ? `translateX(16px)`
                                : `translateX(calc(316px - ${activeMd} * 616px))`
                        }}
                    >
                        {cards.map((card, i) => (
                            <MdCardItem key={i} card={card} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-8">
                    {cards.slice(0, 5).map((_, i) => (
                        <button key={i} onClick={() => setActiveMd(i)}
                            className="transition-all duration-300 rounded-full bg-white"
                            style={{ width: activeMd === i ? "34px" : "10px", height: "10px", opacity: activeMd === i ? 1 : 0.4 }}
                            aria-label={`Card ${i + 1}`} />
                    ))}
                </div>
            </div>

            {/* LG — dot 0: cards 0,1 full + 2 peek | dot 1: 2 peek + 2,3 full + 4 peek | dot 2: 4 peek + 4,5 full */}
            <div className="hidden lg:block xl:hidden py-28 bg-no-repeat bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${blueBgXl})` }}>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-6xl font-semibold text-center mb-4">For business</h2>
                    <p className="text-center text-white text-2xl mb-14 mt-2 max-w-2xl mx-auto">
                        From token foundations to family offices, hedge funds to high-net-worth individuals,
                        we facilitate best-in-class opportunities for those looking to venture beyond what came before
                    </p>
                </div>
                <div className="px-10">
                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{ gap: "16px", transform: `translateX(calc(${lgTranslate} * -416px))` }}>
                        {cards.map((card, i) => (
                            <LgCardItem key={i} card={card} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-8">
                    {[0, 1, 2].map((i) => (
                        <button key={i} onClick={() => setActiveLg(i)}
                            className="transition-all duration-300 rounded-full bg-white"
                            style={{ width: activeLg === i ? "34px" : "10px", height: "10px", opacity: activeLg === i ? 1 : 0.4 }}
                            aria-label={`Slide ${i + 1}`} />
                    ))}
                </div>
            </div>

            {/* XL — 2 groups of 3, 2 dots */}
            <div className="hidden xl:block py-38 bg-fixed px-10 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${blueBgXl})` }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-6xl font-semibold text-center mb-4">For business</h2>
                    <p className="text-center text-white text-2xl mb-14 mt-2 max-w-2xl mx-auto">
                        From token foundations to family offices, hedge funds to high-net-worth individuals,
                        we facilitate best-in-class opportunities for those looking to venture beyond what came before
                    </p>
                    <div className="overflow-hidden mb-8">
                        <div className="flex gap-4 transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(calc(${xlTranslate} * -101%))` }}>
                            <div className="flex gap-4 flex-shrink-0 w-full">
                                {cards.slice(0, 3).map((card, i) => (
                                    <div key={i} className="flex-1"><CardItem card={card} /></div>
                                ))}
                            </div>
                            <div className="flex gap-4 flex-shrink-0 w-full">
                                {cards.slice(3, 6).map((card, i) => (
                                    <div key={i} className="flex-1"><CardItem card={card} /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        {[0, 1].map((i) => (
                            <button key={i} onClick={() => setActiveXl(i)}
                                className="transition-all duration-300 rounded-full bg-white"
                                style={{ width: activeXl === i ? "34px" : "10px", height: "10px", opacity: activeXl === i ? 1 : 0.4 }}
                                aria-label={`Group ${i + 1}`} />
                        ))}
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Section8;
