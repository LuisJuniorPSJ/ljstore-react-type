import React from "react";
import { IoIosCart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import "./NaviBar.css";

interface NavBarProps {
  toggleCart: () => void;
  cart: number;
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
  onSearchSubmit: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  toggleCart,
  cart,
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchSubmit();
    }
  };

  return (
    <div className="nav-bar">
      <h1>LJSTORE</h1>
      <div className="line-items">
        <input
          type="text"
          placeholder="O que você procura?"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <FiSearch className="search-icon" onClick={() => onSearchSubmit()} />
      </div>

      <div className="cart-icon" onClick={toggleCart}>
        <IoIosCart size={25} />
        {cart > 0 && <span className="cart-count">{cart}</span>}
      </div>
    </div>
  );
};

export default NavBar;
