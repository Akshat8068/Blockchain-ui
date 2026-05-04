import heroMd from "../assets/hero-md-v2.png";
import heroSm from "../assets/hero-sm-v2.png"
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
        <main className="bg-black text-white py-21 md:py-22 md:mb-0 lg:pt-16 lg:pb-0 relative">
            <div className="max-w-7xl md:hidden mx-auto px-[14px] md:px-10 lg:px-10 ">
                <section className="pb-0">

                    {/* Heading */}
                    <h1 className="text-6xl md:text-8xl font-bold  tracking-[-0.04em]">
                        Invest like<br />an icon
                    </h1>

                    {/* Subtitle — narrow so it wraps to 3 lines */}
                    <p className="text-[26px]  mt-6  leading-tight max-w-[600px]">
                        We power crypto access for everyone: from private
                        people, to pros, to public companies. Here since the
                        beginning of crypto.
                    </p>

                    {/* Nav links — below heading, full width row */}
                    <div className="hidden  md:flex items-start lg:gap-24 mt-10 mb-0">
                        {/* Personal — 2 columns */}
                        <div>
                            <h3 className="font-bold text-3xl mb-4">Personal</h3>
                            <div className="flex gap-10">
                                <ul className="flex flex-col gap-2">
                                    {personalLinks1.map((l) => (
                                        <li key={l}>
                                            <a href="#" className="text-xl  hover:text-white/70 transition-colors">{l}</a>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="flex flex-col gap-2">
                                    {personalLinks2.map((l) => (
                                        <li key={l}>
                                            <a href="#" className="text-xl  hover:text-white/70 transition-colors">{l}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Institutional — 1 column */}
                        <div  className="hidden md:block lg:mx-5">
                            <h3 className="font-bold text-3xl mb-4">Institutional</h3>
                            <ul className="flex flex-col gap-2">
                                {institutionalLinks.map((l) => (
                                    <li key={l}>
                                        <a href="#" className="text-xl hover:text-white/70 transition-colors">{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="w-full mt-8 -mx-5 md:mx-0">
                        <img
                            src={heroSm}
                            alt="Crypto coins"
                            className="w-full object-contain mix-blend-lighten"
                        />
                    </div>

                </section>
            </div>
            <div className="hidden md:block max-w-7xl mx-auto px-4.5 md:px-22 lg:px-24 ">
                <section className="pb-0">

                    {/* Heading */}
                    <h1 className="text-6xl md:text-8xl font-bold  tracking-[-0.04em]">
                        Invest like<br />an icon
                    </h1>

                    {/* Subtitle — narrow so it wraps to 3 lines */}
                    <p className="text-[26px]  mt-6  leading-tight max-w-[600px]">
                        We power crypto access for everyone: from private
                        people, to pros, to public companies. Here since the
                        beginning of crypto.
                    </p>

                    {/* Nav links — below heading, full width row */}
                    <div className="hidden  md:flex items-start lg:gap-24 mt-10 mb-0">
                        {/* Personal — 2 columns */}
                        <div>
                            <h3 className="font-bold text-[26px] mb-4">Personal</h3>
                            <div className="flex gap-10">
                                <ul className="flex flex-col gap-2">
                                    {personalLinks1.map((l) => (
                                        <li key={l}>
                                            <a href="#" className="text-xl  hover:text-white/70 transition-colors">{l}</a>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="flex flex-col gap-2">
                                    {personalLinks2.map((l) => (
                                        <li key={l}>
                                            <a href="#" className="text-xl  hover:text-white/70 transition-colors">{l}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Institutional — 1 column */}
                        <div className="hidden md:block lg:mx-5">
                            <h3 className="font-bold text-3xl mb-4">Institutional</h3>
                            <ul className="flex flex-col gap-2">
                                {institutionalLinks.map((l) => (
                                    <li key={l}>
                                        <a href="#" className="text-xl hover:text-white/70 transition-colors">{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="w-full mt-8 -mx-5 md:mx-0">
                        <img
                            src={heroMd}
                            alt="Crypto coins"
                            className="w-full object-contain mix-blend-lighten"
                        />
                    </div>

                </section>
            </div>
        </main>
    );
};

export default Home;
