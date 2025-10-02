import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, User, Zap } from "lucide-react";
const Navbar = () => {

  const menuref = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();
  const handleMenuToggle = () => setMenuOpen((prev) => !prev)
  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm
    border-b border-gray-200 font-sans"
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6 max-w-xl mx-auto">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div
            className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br
           from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg group-hover:shadow-purple-300/50
           group-hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-6 h-6 text-white" />

            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full shadow-md animate-ping" />
          </div>
          <div>
            <span
              className="text-2xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500
            to-indigo-500 bg-clip-text text-transparent tracking-wide"
            >
              TaskFlow
            </span>
          </div>
          {/*right side*/}
          <div className="flex items-center gap-4">
            <button
              className="p- text-gray-500 hover:text-purple-500 transition-colors duration-300
            hover:bg-purple-50 rounded-full"
              onClick={() => navigate("/profile")}
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* button dropdown*/}
            <div ref={menuref} className="relative">
              <button
                onClick={handleMenuToggle}
                className="flex items-center gap-2 px-3 py-2 rounded-full
              cursor-pointer hover:bg-purple-50 transition-colors duration-300 border border-transparent 
              hover:border-purple-200"
              >
                <div className="'relative">
                  {User.avatar ? (
                    <img
                      src={User.avatar}
                      alt="Avatar"
                      className=" w-9 h-9 rounded-full shadow-sm"
                    ></img>
                  ) : (
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br
                    from-fuchsia-500 to purple-600 text-white font-semibold shadow-md"
                    >
                      {User.name?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
