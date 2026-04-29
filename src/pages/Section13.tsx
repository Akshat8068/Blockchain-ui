import appleLogo from "../assets/appleicon.jpg";
import playstoreLogo from "../assets/playstoreicon.png";

const Section13 = () => {
    return (
        <section className="text-black bg-white p-5" >
            <div className="max-w-2xl rounded-xl p-10 mx-auto text-center bg-[#FEF8F6]">

                {/* Heading */}
                <h2 className="text-[clamp(3.5rem,11vw,5.5rem)] font-semibold leading-tight mb-8">
                    Invest like an icon
                </h2>

                {/* Available on + rating */}
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-700 text-2xl font-semibold">Available on</span>
                    <img src={appleLogo} alt="Apple" className="w-10 h-10 object-contain" />
                    <img src={playstoreLogo} alt="Google Play" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-10">
                    <span className="text-2xl">★</span>
                    <span className=" text-2xl font-semibold">4.7/5</span>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        className="bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors text-base whitespace-nowrap"
                    >
                        Get started
                    </button>
                    <button

                        className="border border-black text-black font-semibold px-8 py-3 rounded-xl hover:bg-black hover:text-white transition-colors text-base whitespace-nowrap"
                    >
                        Download app
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Section13;
