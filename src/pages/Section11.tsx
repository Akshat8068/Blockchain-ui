import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
    { date: "Apr 29, 2026", title: "Introducing Blockchain Wealth", desc: "Backed by Blockchain.com's multi-billion dollar institutional BTC holdings,..." },
    { date: "Apr 22, 2026", title: "Finding Satoshi: Four year...", desc: "Since the inception of Bitcoin on Halloween in 2008, the biggest puzzle in..." },
    { date: "Apr 20, 2026", title: "Blockchain.com launches global...", desc: "The only major platform enabling users to trade perpetual futures directly using..." },
    { date: "Apr 1, 2026", title: "Blockchain raises bar...", desc: "As in... time... integrating..." },
    { date: "Mar 15, 2026", title: "Fifth article title...", desc: "Fifth article description goes here..." },
];

const CardItem = ({ card }: { card: typeof cards[0] }) => (
    <div className="bg-[#F6F1EF] rounded-2xl p-8 flex flex-col justify-between" style={{ minHeight: "320px" }}>
        <div>
            <p className="text-gray-800 text-lg mb-3">{card.date}</p>
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-800 text-lg">{card.desc}</p>
        </div>
        <a href="#" className="text-black font-bold underline text-xl mt-6 block">Read more →</a>
    </div>
);

const Dots = ({ total, active, setActive }: { total: number; active: number; setActive: (i: number) => void }) => (
    <div className="flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
                className="transition-all duration-300 rounded-full bg-gray-400"
                style={{ width: active === i ? "32px" : "12px", height: "12px", opacity: active === i ? 1 : 0.5 }}
                aria-label={`Item ${i + 1}`} />
        ))}
    </div>
);

const Section11 = () => {
    const [activeMobile, setActiveMobile] = useState(0);
    const [activeMd, setActiveMd] = useState(0);
    const [activeLg, setActiveLg] = useState(0);

    return (
        <motion.section className="bg-white text-black py-14 px-5"
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease: "easeOut" }}>

            {/* MOBILE — 1 card visible, 5 dots */}
            <div className="md:hidden max-w-2xl mx-auto">
                <h2 className="text-4xl  font-bold leading-tight mb-10">
                    What's been happening and latest research
                </h2>
                <div className="overflow-hidden mb-6">
                    <div className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(calc(${activeMobile} * -85%))` }}>
                        {cards.map((card, i) => (
                            <div key={i} className="flex-shrink-0" style={{ width: "82%" }}>
                                <CardItem card={card} />
                            </div>
                        ))}
                    </div>
                </div>
                <Dots total={5} active={activeMobile} setActive={setActiveMobile} />
            </div>

            {/* MD — 2 cards visible, 5 dots */}
            <div className="hidden  md:block lg:hidden max-w-4xl mx-auto px-5">
                <h2 className="text-5xl px-10 font-bold leading-tight mb-10">
                    What's been happening <br/>and latest research
                </h2>
                <div className="overflow-hidden mb-6 ">
                    <div className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(calc(${activeMd} * -51%))` }}>
                        {cards.map((card, i) => (
                            <div key={i} className="flex-shrink-0" style={{ width: "48%" }}>
                                <CardItem card={card} />
                            </div>
                        ))}
                    </div>
                </div>
                <Dots total={5} active={activeMd} setActive={setActiveMd} />
            </div>

            {/* LG — 3 cards visible, 2 dots */}
            <div className="hidden lg:block max-w-6xl mx-auto px-6 py-6">
                <h2 className="text-5xl xl:text-6xl font-bold ml-10 leading-tight mb-10">
                    What's been happening <br/> and latest research
                </h2>
                <div className="overflow-hidden mb-6">
                    <div className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(calc(${activeLg} * -101%))` }}>
                        {/* Group 1: cards 0,1,2 */}
                        <div className="flex gap-4 flex-shrink-0 w-full">
                            {cards.slice(0, 3).map((card, i) => (
                                <div key={i} className="flex-1"><CardItem card={card} /></div>
                            ))}
                        </div>
                        {/* Group 2: cards 2,3,4 */}
                        <div className="flex gap-4 flex-shrink-0 w-full">
                            {cards.slice(2, 5).map((card, i) => (
                                <div key={i} className="flex-1"><CardItem card={card} /></div>
                            ))}
                        </div>
                    </div>
                </div>
                <Dots total={2} active={activeLg} setActive={setActiveLg} />
            </div>

        </motion.section>
    );
};

export default Section11;
