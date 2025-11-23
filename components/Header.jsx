import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <div className="flex items-center">
              <span className="text-xl font-extrabold bg-gradient-to-r from-accent to-purple-600 text-transparent bg-clip-text">
                JS
              </span>
              <span className="text-lg font-extrabold text-white ml-1">
                Developer
              </span>
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
