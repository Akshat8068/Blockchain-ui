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
    <div className="bg-[#F6F1EF] rounded-2xl px-6 py-8 flex flex-col justify-between min-h-[320px] w-[350px]" >
        <div>
            <p className="text-gray-800 text-base mb-3">{card.date}</p>
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-800 text-lg">{card.desc}</p>
        </div>
        <a href="#" className="text-black font-semibold underline text-xl mt-6 block">Read more →</a>
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
        <motion.section className="bg-white text-black py-14 px-5 overflow-hidden"
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

            {/* MD — dot 0: 2 cards full + left space more, right less | dot 1-3: prev peek left + 2 cards | dot 4: last 2 cards + right space more */}
            <div className="hidden md:block lg:hidden">
                <div className="px-8 mb-10">
                    <h2 className="text-5xl font-bold leading-tight">
                        What's been happening <br />and latest research
                    </h2>
                </div>
                {/*
                  Each card = calc(50% - 20px) of container (2 cards + gap fit in view)
                  Container width ~768px, px-8 = 32px each side → inner = 704px
                  card ≈ 332px, gap = 16px, step = 348px
                  dot 0: translateX(0) → cards start flush left with px-8 padding
                  dot i (1-4): translateX(calc(-i * 348px + 40px)) → 40px peek of prev card on left
                */}
                <div className="overflow-hidden px-8" style={{ width: "100%" }}>
                    <div
                        className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{
                            transform: activeMd === 0
                                ? `translateX(0px)`
                                : `translateX(calc(${activeMd} * (calc(-50vw + 32px)) + 40px))`
                        }}
                    >
                        {cards.map((card, i) => (
                            <div key={i} className="flex-shrink-0" style={{ width: "calc(50vw - 40px)" }}>
                                <CardItem card={card} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-6">
                    <Dots total={5} active={activeMd} setActive={setActiveMd} />
                </div>
            </div>

            {/* LG — 3 cards visible with peek effect */}
            <div className="hidden lg:block py-6">
                <h2 className="text-5xl xl:text-6xl font-bold tracking-[-2px] leading-tight mb-10 px-15">
                    What's been happening <br /> and latest research
                </h2>
                {/* 
                  LG: card width = calc(33.333vw - 32px), gap = 16px, step = calc(33.333vw - 16px)
                  dot 0: translateX(px-15 = 60px) → cards 1,2 full + card 3 peek at right edge
                  dot 1: translateX(calc(60px + halfCard - step)) → card 2 half peek left + cards 3,4 full + card 5 peek right
                  dot 2: translateX(calc(60px - 2*step)) → card 3 peek left (no space) + cards 4,5 full + right space
                  
                  halfCard = calc(16.666vw - 16px)
                  step = calc(33.333vw - 16px)
                  
                  dot 0: translateX(0)  with paddingLeft on container
                  dot 1: translateX(calc(-1 * (33.333vw - 16px) + 16.666vw - 16px)) = translateX(calc(-16.666vw))
                  dot 2: translateX(calc(-2 * (33.333vw - 16px))) = translateX(calc(-66.666vw + 32px))
                */}
                <div className="overflow-hidden mb-6">
                    <div
                        className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{
                            transform: activeLg === 0
                                ? `translateX(0px)`
                                : activeLg === 1
                                    ? `translateX(calc(-1 * (100vw / 3 + 5px)))`
                                    : `translateX(calc(-2 * (100vw / 3 + 5px) + 60px))`
                        }}
                    >
                        {cards.map((card, i) => (
                            <div key={i} className="flex-shrink-0" style={{ width: "calc(100vw / 3 - 11px)" }}>
                                <CardItem card={card} />
                            </div>
                        ))}
                    </div>
                </div>
                <Dots total={3} active={activeLg} setActive={setActiveLg} />
            </div>

        </motion.section >
    );
};

export default Section11;
