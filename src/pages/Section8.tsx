import { useState } from "react";
import blueBg from "../assets/blue-bg.png";
import faviconIcon from "../assets/cards2/favicon.ico";

const cards = [
    {
        icon: faviconIcon,
        isImg: true,
        title: "Digital asset treasury solutions",
        desc: "Integrate digital assets into your treasury strategy",
    },
    {
        icon: null,
        isImg: false,
        svgIcon: (
            <svg viewBox="0 0 40 40" fill="white" className="w-10 h-10">
                <path d="M20 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-8 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm16 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM8 20a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm24 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
        ),
        title: "OTC spot and options trading",
        desc: "Execute large orders with minimal market impact and competitive spreads",
    },
    {
        icon: null,
        isImg: false,
        svgIcon: (
            <svg viewBox="0 0 40 40" fill="white" className="w-10 h-10">
                <circle cx="14" cy="12" r="5" />
                <circle cx="26" cy="12" r="5" />
                <circle cx="20" cy="24" r="5" />
            </svg>
        ),
        title: "Token launch and distribution",
        desc: "Gain access to millions of users, integrate with Blockchain's proprietary wallet",
    },
    {
        icon: null,
        isImg: false,
        svgIcon: (
            <svg viewBox="0 0 40 40" fill="white" className="w-10 h-10">
                <rect x="4" y="4" width="15" height="15" rx="2" />
                <rect x="21" y="4" width="15" height="15" rx="2" />
                <rect x="4" y="21" width="15" height="15" rx="2" />
                <rect x="21" y="21" width="15" height="15" rx="2" />
            </svg>
        ),
        title: "Liquidity provisioning",
        desc: "Accelerate your token's adoption with reliable, transparent market making",
    },
    {
        icon: null,
        isImg: false,
        svgIcon: (
            <svg viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="3" className="w-10 h-10">
                <rect x="6" y="6" width="28" height="28" rx="4" />
                <circle cx="20" cy="20" r="7" />
                <circle cx="20" cy="20" r="2" fill="white" />
            </svg>
        ),
        title: "Secure custody",
        desc: "Safeguard digital assets with military-grade security and rigorous regulatory compliance",
    },
    {
        icon: null,
        isImg: false,
        svgIcon: (
            <svg viewBox="0 0 40 40" fill="white" className="w-10 h-10">
                <ellipse cx="20" cy="10" rx="12" ry="5" />
                <ellipse cx="20" cy="20" rx="12" ry="5" />
                <ellipse cx="20" cy="30" rx="12" ry="5" />
            </svg>
        ),
        title: "Staking",
        desc: "Earn rewards on digital assets without operational complexity or risk exposure",
    },
];

const Section8 = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="relative text-white overflow-hidden py-14 px-5">
            {/* Blue BG */}
            <img
                src={blueBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
                {/* Heading */}
                <h2 className="text-[clamp(3rem,9vw,4rem)] font-semibold text-center mb-4">
                    For business
                </h2>
                <p className="text-center text-white text-2xl mb-18 mt-2 max-w-sm mx-auto">
                    From token foundations to family offices, hedge funds to high-net-worth individuals,
                    we facilitate best-in-class opportunities for those looking to venture beyond what came before
                </p>

                {/* Active card */}
                <div className="rounded-2xl p-6 px-10 h-96 flex z-40  flex-col justify-between mb-6"
                    style={{ background: "rgba(158, 161, 206, 0.2)", backdropFilter: "blur(2px)" }}>
                    
                    <div className="flex flex-col gap-2 ">
                        <div className="py-10">
                            {cards[active].isImg ? (
                                <img src={cards[active].icon!} alt="" className="w-10 h-10 object-contain" />
                            ) : (
                                cards[active].svgIcon
                            )}
                        </div>
                        <h3 className="text-4xl font-semibold mb-2">{cards[active].title}</h3>
                        <p className="text-white text-xl">{cards[active].desc}</p>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2">
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className="transition-all duration-300 rounded-full bg-white"
                            style={{
                                width: active === i ? "34px" : "10px",
                                height: "10px",
                                opacity: active === i ? 1 : 0.4,
                            }}
                            aria-label={`Card ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section8;
