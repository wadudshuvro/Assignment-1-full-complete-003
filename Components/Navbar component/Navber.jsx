// src/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="bg-transparent top-0 left-0 w-full flex justify-between items-center px-8 py-4">
      <div className="logo">
        {/* Add your Logo here */}
        <img src="/src/assets/lws-logo-en.svg" alt="Logo" />
      </div>
      <div className="nav-items">
        <button className="px-5 py-2 bg-[#172227] rounded-[44px] text-white">
          Get admission
        </button>
      </div>
    </nav>
  );
}
