import heroSm from "../assets/hero-sm-v2.png";
import heroMd from "../assets/hero-md-v2.png";
import heroPoster from "../assets/hero-poster-v3.png";

const personalLinks1 = ["Deposit", "Buy", "Sell", "HODL", "App", "DeFi"];
const personalLinks2 = ["Swap", "Send", "Earn", "Stake", "VIP", "June"];
const institutionalLinks = [
    "Crypto treasuries",
    "OTC trading",
    "Liquidity provisioning",
    "Token distribution",
    "Secure custody",
    "Staking",
];

const Home = () => {
    return (
        <main
            className="bg-black text-white pt-28 pb-0 relative"
        >
            <div className="max-w-7xl mx-auto   px-5 md:px-20">
                <section className=" pb-40">

                    {/* Heading + links stacked on sm/md, side by side on lg */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 lg:mb-10">

                        {/* Heading + subtitle */}
                        <div className="flex-1 min-w-0">
                            <h1 className="text-[clamp(3.2rem,11vw,7rem)] lg:text-[7rem] font-bold leading-[0.93] tracking-tight">
                                Invest like<br />an icon
                            </h1>
                            <p className="text-base text-white/90 mt-5 leading-relaxed max-w-lg">
                                We power crypto access for everyone: from private people, to pros,
                                to public companies. Here since the beginning of crypto.
                            </p>
                        </div>

                        {/* Nav links — hidden on sm, visible md+ */}
                        <div className="hidden md:flex items-start gap-8 mt-8 lg:mt-2 shrink-0">
                            <div>
                                <h3 className="font-bold text-base lg:text-xl mb-3">Personal</h3>
                                <div className="flex gap-6">
                                    <ul className="flex flex-col gap-1.5">
                                        {personalLinks1.map((l) => (
                                            <li key={l}>
                                                <a href="#" className="text-base lg:text-lg text-white hover:text-white transition-colors">{l}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="flex flex-col gap-1.5">
                                        {personalLinks2.map((l) => (
                                            <li key={l}>
                                                <a href="#" className="text-base lg:text-lg text-white hover:text-white transition-colors">{l}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-base lg:text-xl mb-3">Institutional</h3>
                                <ul className="flex flex-col gap-1.5">
                                    {institutionalLinks.map((l) => (
                                        <li key={l}>
                                            <a href="#" className="text-base lg:text-lg text-white hover:text-white transition-colors">{l}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hero image — responsive: sm=bitcoin only, md=two coins, lg=all three */}
                    <div className="w-full mt-6 md:mt-0 -mx-5 md:mx-0">
                        {/* Mobile: single bitcoin coin, full width */}
                        <img
                            src={heroSm}
                            alt="Bitcoin coin"
                            className="block md:hidden w-full object-contain mix-blend-lighten"
                        />
                        {/* Tablet */}
                        <img
                            src={heroMd}
                            alt="Crypto coins"
                            className="hidden md:block lg:hidden w-full object-contain mix-blend-lighten"
                        />
                        {/* Desktop: all three coins */}
                        <img
                            src={heroPoster}
                            alt="Crypto coins"
                            className="hidden lg:block w-full object-contain mix-blend-lighten"
                        />
                    </div>

                </section>
            </div>
        </main>
    );
};

export default Home;
