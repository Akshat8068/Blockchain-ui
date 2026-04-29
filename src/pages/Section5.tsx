import bgSm from "../assets/download-app-bg-sm-v2.png";
import appMockup from "../assets/download-app-v1.png";
import appleLogo from "../assets/Apple.png";
import playstoreLogo from "../assets/playstore.png";

const Section5 = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden">

            {/* BG image — top right glow */}
            <img
                src={bgSm}
                alt=""
                className="absolute top-0 right-0 w-2/3 object-contain pointer-events-none select-none"
            />

            <div className="relative z-10 max-w-2xl mx-auto px-5 pt-14 pb-0">

                {/* Heading */}
                <h2 className="text-[clamp(3rem,11vw,4.5rem)] font-bold leading-tight mb-5">
                    One of the world's most loved crypto apps
                </h2>

                {/* Subtitle */}
                <p className="text-white text-2xl  mb-8 max-w-sm">
                    Our powerful trading platform and integrated DeFi Wallet give you complete access to the future of finance
                </p>

                {/* Ratings */}
                <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-2 text-lg text-white">
                        <img src={appleLogo} alt="Apple" className="w-4 h-4 object-contain invert" />
                        <span>4.7 ★ on App Store 178K reviews</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-white">
                        <img src={playstoreLogo} alt="Google Play" className="w-4 h-4 object-contain" />
                        <span>10M+ downloads on Google Play</span>
                    </div>
                </div>

                {/* Store buttons */}
                <div className="flex gap-3 mb-12 ">
                    
                    <a href="#" className="flex items-center gap-2 border border-white/60 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors">
                        <img src={appleLogo} alt="App Store" className="w-6 h-6 object-contain invert" />
                        <div>
                            <p className="text-[10px] text-white/60 leading-none">Download on the</p>
                            <p className="text-sm font-semibold leading-tight">App Store</p>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 border border-white/60 rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
                    >
                        <img src={playstoreLogo} alt="Google Play" className="w-6 h-6 object-contain" />
                        <div>
                            <p className="text-[10px] text-white/60 leading-none">GET IT ON</p>
                            <p className="text-sm font-semibold leading-tight">Google Play</p>
                        </div>
                    </a>
                </div>

                {/* App mockup image — centered, bottom */}
                <div className="flex justify-center ">
                    <img
                        src={appMockup}
                        alt="App screenshot"
                        className="w-full  object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Section5;
