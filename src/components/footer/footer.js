import Section from "@/components/section/section";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#121212]">
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-0 bg-[#121212] text-white p-4">
                <div className="md:col-span-1 md:row-span-3">
                    <Section title="Company" links={['About', 'Jobs', 'For the Record']} direction="vertical" />
                </div>

                <div className="md:col-span-1 md:row-span-3  mb-6">
                    <Section title="Communities" links={['For Artists', 'Developers', 'Advertising', 'Investors', 'Vendors']} direction="vertical" />
                </div>

                <div className="md:col-span-1 md:row-span-3">
                    <Section title="Useful Links" links={['Support', 'Free Mobile App']} direction="vertical" />
                </div>

                <div className="md:col-span-1 flex flex-col justify-start">
                    <div className="flex lg:justify-end space-x-4">
                        <a href="#" className="text-white rounded-full p-4 bg-[#292929]">
                            <FaInstagram />
                        </a>

                        <a href="#" className="text-white rounded-full p-4 bg-[#292929]">
                            <FaTwitter />
                        </a>

                        <a href="#" className="text-white rounded-full p-4 bg-[#292929]">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-2 bg-[#121212] text-white p-2 gap-0 my-4">
                <div className="col-span-2">
                    <Section title="" links={['Legal', 'Safety & Privacy Center', 'Privacy Policy', 'Cookies', 'About Ads', 'Accessibility']} direction="horizontal" />
                </div>
                <div className="col-span-1 md:col-span-1 text-[14px]">
                    <p>© 2024 Spotify AB</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;