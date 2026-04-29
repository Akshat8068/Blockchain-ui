import { useState } from "react";

const cards = [
    {
        date: "Apr 22, 2026",
        title: "Finding Satoshi: Four year...",
        desc: "Since the inception of Bitcoin on Halloween in 2008, the biggest puzzle in...",
    },
    {
        date: "Apr 22, 2026",
        title: "Finding Satoshi: Four year...",
        desc: "Since the inception of Bitcoin on Halloween in 2008, the biggest puzzle in...",
    },
    {
        date: "Apr 22, 2026",
        title: "Finding Satoshi: Four year...",
        desc: "Since the inception of Bitcoin on Halloween in 2008, the biggest puzzle in...",
    },
    {
        date: "Apr 22, 2026",
        title: "Finding Satoshi: Four year...",
        desc: "Since the inception of Bitcoin on Halloween in 2008, the biggest puzzle in...",
    },
    {
        date: "Apr 22, 2026",
        title: "Finding Satoshi: Four year...",
        desc: "Since the inception of Bitcoin on Halloween in 2008, the biggest puzzle in...",
    },
];

const Section11 = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="bg-white text-black py-14 px-5 border-t border-gray-200">
            <div className="max-w-2xl mx-auto ">

                {/* Heading */}
                <h2 className="text-[clamp(3.2rem,10vw,5rem)] font-bold leading-tight mb-10">
                    What's been happening and latest research
                </h2>

                {/* Cards slider - next card peeks from right */}
                <div className="overflow-hidden mb-6">
                    <div
                        className="flex gap-4 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(calc(${active} * -85%))` }}
                    >
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className="bg-[#F6F1EF] rounded-2xl p-8 flex-shrink-0 flex flex-col justify-between"
                                style={{ width: "82%", minHeight: "320px" }}
                            >
                                <div>
                                    <p className="text-gray-800 text-lg mb-3">{card.date}</p>
                                    <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                                    <p className="text-gray-800 text-lg">{card.desc}</p>
                                </div>
                                <a href="#" className="text-black font-bold underline text-xl mt-6 block">
                                    Read more →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2">
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className="transition-all duration-300 rounded-full bg-gray-400"
                            style={{
                                width: active === i ? "32px" : "12px",
                                height: "12px",
                                opacity: active === i ? 1 : 0.5,
                            }}
                            aria-label={`Card ${i + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Section11;
