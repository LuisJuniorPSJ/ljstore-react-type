import { useState } from "react";
import NavBar from "./components/NaviBar";
import Cart from "./components/Cart";
import "./App.css";
import Footer from "./components/Footer";
import BonePuma from "./img/bone-puma.webp";
import BoneAdidas from "./img/bone-adidas.jpg";
import BoneNike from "./img/bone-nike.jpg";
import MoletonNike from "./img/moleton-nike.jpeg";
import MoletonPuma from "./img/moleton-adidas.jpg";
import MoletonAdidas from "./img/moleton-puma.jpg";
import AdidasShirt from "./img/adidas-t-shirt.jpg";
import QuikSilverShirt from "./img/quiksilver.jpg";
import NikeTShirth from "./img/camisanike.jpg";
import NikeShoes from "./img/tenisnike.jpeg";
import AdidasShoes from "./img/adidas.jpeg";
import PumaShoes from "./img/puma.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Tênis Nike",
    price: 350.0,
    image: NikeShoes,
  },
  {
    id: 2,
    name: "Tênis Adidas ",
    price: 288.0,
    image: AdidasShoes,
  },
  {
    id: 3,
    name: "Tênis Puma",
    price: 201.0,
    image: PumaShoes,
  },
  {
    id: 4,
    name: "Camiseta Nike",
    price: 150.0,
    image: NikeTShirth,
  },
  {
    id: 5,
    name: "Camiseta QuikSilver",
    price: 139.9,
    image: QuikSilverShirt,
  },
  {
    id: 6,
    name: "Camiseta Adidas",
    price: 119.9,
    image: AdidasShirt,
  },
  {
    id: 7,
    name: "Bone Puma",
    price: 99.9,
    image: BonePuma,
  },
  {
    id: 8,
    name: "Bone Adidas",
    price: 139.9,
    image: BoneAdidas,
  },
  {
    id: 9,
    name: "Bone Nike",
    price: 114.9,
    image: BoneNike,
  },
  {
    id: 10,
    name: "Moleton Nike",
    price: 499.9,
    image: MoletonNike,
  },
  {
    id: 11,
    name: "Moleton Puma",
    price: 399.9,
    image: MoletonPuma,
  },
  {
    id: 12,
    name: "Moleton Adidas",
    price: 299.9,
    image: MoletonAdidas,
  },
];

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId: number) => {
    const index = cart.findIndex((item) => item.id === productId);

    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      setCartCount(cartCount - 1);
    }
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  const searchProducts = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredProducts.length === 0) {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <>
      <NavBar
        toggleCart={toggleCart}
        cart={cartCount}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={searchProducts}
      />
      <div className="product-list">
        <div className="product-container">
          {filteredProducts.length === 0 ? (
            <p className="not-found-products">Nenhum produto encontrado!</p>
          ) : (
            filteredProducts.map((item) => (
              <div className="cards-product" key={item.id}>
                <h1>{item.name}</h1>
                <h3>R$ {item.price.toFixed(2)}</h3>
                <p>Parcele sem juros 10x R$ {(item.price / 10).toFixed(2)}</p>
                <img src={item.image} alt={item.name} />
                <button onClick={() => addToCart(item)}>
                  Adicionar ao Carrinho
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      {cartVisible && (
        <Cart
          cart={cart}
          closeCart={closeCart}
          removeFromCart={removeFromCart}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
