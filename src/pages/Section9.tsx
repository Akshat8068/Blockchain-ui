const stats = [
    { value: "$1.2T+", label: "Transacted" },
    { value: "5700+", label: "Tokens available" },
    { value: "$537M", label: "Equity capital raised" },
];

const Section9 = () => {
    return (
        <section className="bg-white text-black py-16 px-5 border-t border-gray-200">
            <div className="max-w-sm mx-auto flex flex-col items-center">
                {stats.map((stat, i) => (
                    <div key={i} className="w-full">
                        <div className="text-center py-8">
                            <p className="text-[clamp(3.5rem,12vw,5rem)] font-semibold leading-none mb-2">
                                {stat.value}
                            </p>
                            <p className=" text-xl">{stat.label}</p>
                        </div>
                        {i < stats.length - 1 && (
                            <hr className="border-gray-700 w-16 mx-auto" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section9;
