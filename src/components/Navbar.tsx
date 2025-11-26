// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { Menu, X, Search } from "lucide-react";
// import logo from "../assets/logo.png";

// const Navbar: React.FC = () => {
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/shop" },
//     { name: "Categories", path: "/categories" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const currentPath = location.pathname;
//   const currentActive =
//     navItems.find((item) => item.path === currentPath)?.name;

//   return (
//     <>
//       {/* Reserve vertical space so content below isn't hidden by fixed header */}
//       <header className="relative h-[120px]">
//         {/* Fixed top strip */}
//         <div className="fixed top-0 left-0 w-full bg-[#303030] text-[#FCFCFC] text-center py-3 text-sm z-50">
//           {/* Optional message */}
//         </div>

//         {/* Fixed navbar under the top strip */}
//         <nav className="fixed top-[23px] left-0 w-full bg-[#F7F7F7] shadow-sm z-40">
//           <div className="max-w-6xl mx-auto px-4 py-3 flex flex-row items-center justify-between gap-4">
//             {/* Logo + brand */}
//             <div className="flex items-center gap-3">
//               <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
//               <h1 className="text-sm font-semibold text-[#303030]">
//                 Gospel Walls
//               </h1>
//             </div>

//             {/* Desktop search + nav links */}
//             <div className="hidden md:flex flex-1 flex-col items-center gap-4">
//               {/* Search */}
//               <div className="relative w-full max-w-sm">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2">
//                   <Search className="h-4 w-4 text-[#A4A4A3]" />
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="w-full rounded-full bg-[#FCFCFC] pl-11 pr-4 py-2 shadow-md border border-[#CACACA] placeholder:text-[#A4A4A3] focus:outline-none focus:ring-2 focus:ring-[#303030]"
//                 />
//               </div>

//               {/* Nav links */}
//               <div className="flex justify-center gap-8 text-sm font-medium text-[#5F5F5F]">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`relative pb-1 transition-colors duration-200 ${
//                       currentActive === item.name
//                         ? "text-[#303030]"
//                         : "text-[#5F5F5F] hover:text-[#303030]"
//                     }`}
//                   >
//                     {item.name}
//                     {currentActive === item.name && (
//                       <span className="absolute left-0 right-0 -bottom-0.5 mx-auto h-[2px] w-full bg-[#303030] rounded-full" />
//                     )}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile menu button (right side, aligned horizontally with logo) */}
//             <button
//               className="text-[#303030] hover:text-[#5F5F5F] md:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile full-screen menu */}
//       <div
//         className={`fixed inset-0 z-40 bg-[#F7F7F7] md:hidden transition-transform duration-300 ease-in-out ${
//           mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setMobileMenuOpen(false)}
//               className={`text-3xl font-medium text-[#303030] hover:text-[#5F5F5F] ${
//                 currentActive === item.name ? "underline underline-offset-4" : ""
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//           {/* Mobile search */}
//           <div className="relative w-full max-w-xs">
//             <span className="absolute left-4 top-1/2 -translate-y-1/2">
//               <Search className="h-4 w-4 text-[#A4A4A3]" />
//             </span>
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full rounded-full bg-[#FCFCFC] pl-11 pr-4 py-2 shadow-md border border-[#CACACA] placeholder:text-[#A4A4A3] focus:outline-none focus:ring-2 focus:ring-[#303030]"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const currentPath = location.pathname;
  const currentActive =
    navItems.find((item) => item.path === currentPath)?.name;

  return (
    <>
      {/* Reserve vertical space so page content isn't hidden behind fixed header */}
      <header className="relative h-[120px]">
        {/* Fixed top strip */}
        <div className="fixed top-0 left-0 w-full bg-[#303030] text-[#FCFCFC] text-center py-3 text-sm z-50">
          {/* Optional top message */}
        </div>

        {/* Fixed navbar under the top strip */}
        <nav className="fixed top-[23px] left-0 w-full bg-[#F7F7F7] shadow-sm z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-row items-center justify-between gap-4">
            {/* Logo + brand */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-sm font-semibold text-[#303030]">
                Gospel Walls
              </h1>
            </div>

            {/* Desktop search + nav links */}
            <div className="hidden md:flex flex-1 flex-col items-center gap-4">
              {/* Search */}
              <div className="relative w-full max-w-sm">
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Search className="h-4 w-4 text-[#A4A4A3]" />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-full bg-[#FCFCFC] pl-11 pr-4 py-2 shadow-md border border-[#CACACA] placeholder:text-[#A4A4A3] focus:outline-none focus:ring-2 focus:ring-[#303030]"
                />
              </div>

              {/* Nav links */}
              <div className="flex justify-center gap-8 text-sm font-medium text-[#5F5F5F]">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative pb-1 transition-colors duration-200 ${
                      currentActive === item.name
                        ? "text-[#303030]"
                        : "text-[#5F5F5F] hover:text-[#303030]"
                    }`}
                  >
                    {item.name}
                    {currentActive === item.name && (
                      <span className="absolute left-0 right-0 -bottom-0.5 mx-auto h-[2px] w-full bg-[#303030] rounded-full" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button (hamburger / X) */}
            <button
              className="text-[#303030] hover:text-[#5F5F5F] md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#F7F7F7] md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close icon inside overlay */}
        <button
          className="absolute top-5 right-5 text-[#303030] hover:text-[#5F5F5F]"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-medium text-[#303030] hover:text-[#5F5F5F] ${
                currentActive === item.name ? "underline underline-offset-4" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile search */}
          <div className="relative w-full max-w-xs">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <Search className="h-4 w-4 text-[#A4A4A3]" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full bg-[#FCFCFC] pl-11 pr-4 py-2 shadow-md border border-[#CACACA] placeholder:text-[#A4A4A3] focus:outline-none focus:ring-2 focus:ring-[#303030]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
