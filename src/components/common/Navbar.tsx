import { useState } from "react";
import { Search, Download, X, Menu } from "lucide-react";
import logo from "../../assets/poppyBlockchainLogo.svg";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

const dropdownItems: Record<string, string[]> = {
    Personal: ["Perpetual futures"],
    Institutional: ["OTC Trading", "Ventures", "Nodes as a Service"],
    Explorer: [],
    Company: ["About", "Careers", "Press Center"],
    "···": ["Exchange", "APIs", "Status", "Open Source", "Legal & Privacy", "Support", "Blog", "Podcast", "Security"],
};

const navLinks = ["Personal", "Institutional", "Explorer", "Company", "···"];


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="w-full bg-black top-0 z-50">
            <div className="max-w-7xl mx-auto px-5 md:px-10 h-17 flex items-center">

                <a href="/" className="shrink-0">
                    <img src={logo} alt="Blockchain" className="h-6 w-auto" />
                </a>

                {/* Desktop nav links with dropdowns */}
                <ul className="hidden lg:flex items-center gap-6 ml-8">
                    {navLinks.map((label) => {
                        const items = dropdownItems[label] ?? [];
                        if (items.length === 0) {
                            return (
                                <li key={label}>
                                    <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors whitespace-nowrap">
                                        {label}
                                    </a>
                                </li>
                            );
                        }
                        return (
                            <li key={label}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="text-white text-sm font-medium hover:text-gray-300 transition-colors whitespace-nowrap outline-none">
                                            {label}
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-white text-black min-w-[160px] rounded-xl shadow-lg p-1">
                                        {items.map((item) => (
                                            <DropdownMenuItem key={item} className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 rounded-lg">
                                                {item}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex-1" />

                {/* Desktop right */}
                <div className="hidden lg:flex items-center gap-3">
                    <button className="text-white hover:text-gray-300 transition-colors"><Search size={18} /></button>
                    <button className="text-white hover:text-gray-300 transition-colors"><Download size={18} /></button>
                    <a href="#" className="border border-white/60 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Log In</a>
                    <a href="#" className="bg-[#e8174a] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#c9143f] transition-colors">Sign up</a>
                </div>

                {/* Mobile/tablet right */}
                <div className="flex lg:hidden items-center gap-3">
                    <a href="#" className="bg-[#e8174a] text-white text-sm font-semibold px-5 py-3 rounded-2xl hover:bg-[#c9143f] transition-colors">Sign up</a>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1" aria-label="Toggle menu">
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5">
                    {["Personal", "Institutional", "Explorer", "Company"].map((label) => (
                        <a key={label} href="#" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setMobileOpen(false)}>{label}</a>
                    ))}
                    <a href="#" className="text-white/80 hover:text-white text-base font-medium" onClick={() => setMobileOpen(false)}>Log In</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
