import { For, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import logo from "../assets/logo.png";
import backgroundlp from "../assets/backgroundlp1.png?url";
import flowerlanding from "../assets/flowerlanding.png";
import elysianbloom from "../assets/elysianbloom.png";
import tulipwhisper from "../assets/tulipwhisper.png"
import pinkpromise from "../assets/pinkpromise.png";;
import scarletsecret from "../assets/scarletsecret.png";
import wisudabouquet from "../assets/wisudabouquet.png";
import silverqueen from "../assets/silverqueen.png";
import cherryblossom from "../assets/cherryblossom.png";
import mochamuse from "../assets/mochamuse.png";
// import './index.css';

const initialProducts = [
  { name: "Elysian Bloom", price: 100000, img: elysianbloom },
  { name: "Tulip Whisper", price: 185000, img: tulipwhisper },
  { name: "Pink Promise", price: 95000, img: pinkpromise },
  { name: "Scarlet Secret", price: 95000, img: scarletsecret },
  { name: "Wisuda Bouquet", price: 65000, img: wisudabouquet },
  { name: "Silverqueen Bouquet", price: 60000, img: silverqueen },
  { name: "Cherry Blossom", price: 125000, img: cherryblossom },
  { name: "Mocha Muse", price: 150000, img: mochamuse },
];

export default function LandingPage() {
  const [products, setProducts] = createSignal(initialProducts);
  const navigate = useNavigate();

  const handleSort = (value: string) => {
    if (value === "price") {
      setProducts([...products()].sort((a, b) => a.price - b.price));
    } else if (value === "name") {
      setProducts([...products()].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  const handleAddToCart = (product: any) => {
    console.log("Added to cart:", product);
    navigate("/checkout");
  };

  return (
    <div class="font-sans bg-pink-50">
      {/* Navbar */}
      <nav class="flex justify-between items-center px-6 py-4 shadow bg-pink-100">
        <div class="flex items-center space-x-2">
          <img src={logo} alt="Logo" class="h-16 w-auto" />
          <span class="text-pink-700 font-bold">La Fleuriá</span>
        </div>
        <ul class="hidden md:flex space-x-6 text-pink-800 font-medium">
          <li><A href="/home" class="hover:text-pink-500">Home</A></li>
          <li><A href="#about" class="hover:text-pink-500">About</A></li>
          <li><A href="#product" class="hover:text-pink-500">Product</A></li>
          <li><A href="/checkout" class="hover:text-pink-500">Checkout</A></li>
        </ul>
        <A href="/login">
          <button class="bg-white border border-pink-400 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-50">
            Sign In
          </button>
        </A>
      </nav>

      {/* Hero Section */}
      <section
        class="relative h-[550px] text-center text-white flex items-center justify-center"
        style={{
          "background-image": `url('${backgroundlp}')`,
          "background-size": "cover",
          "background-position": "center",
        }}
      >
        <div class="absolute inset-0 bg-pink-900 bg-opacity-30"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div class="max-w-lg text-left">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Let the Flowers Speak</h1>
            <p class="mb-6 text-lg">
              We help you express the unspoken — <br />
              with love, with grace, with every bloom.
              Each bouquet is handpicked with care,
               delivered fresh to brighten someone’s heart.
            </p>
            <div class="space-x-4">
              <button
                onClick={() => navigate("/dashboard")}
                class="bg-white text-pink-600 px-6 py-2 rounded-full shadow hover:bg-pink-50"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("/product")}
                class="bg-pink-600 text-white px-6 py-2 rounded-full shadow hover:bg-pink-500"
              >
                Shop Now
              </button>
            </div>
          </div>
          <img
            src={flowerlanding}
            alt="Hero Bouquet"
            class="h-[380px] drop-shadow-xl"
          />
        </div>
      </section>

      {/* About Us */}
<section
  id="about"
  class="relative py-12 px-6 text-center bg-cover bg-center"
  style={{
    "background-image": `url('${backgroundlp}')`, // ganti dengan path gambar bunga kamu
  }}
>
  {/* Overlay putih transparan dengan blur */}
  <div class="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>

  <div class="relative z-10">
    <h2 class="text-2xl font-bold text-pink-800 mb-6">About Us</h2>
    <div class="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4 text-justify">
      <p>
        La Fleuria lahir dari kecintaan kami terhadap keindahan sederhana—kelopak yang lembut, aroma yang menenangkan, dan senyum dari hadiah kecil yang bermakna. Kami percaya bunga bukan sekadar hiasan, tapi bahasa hati yang mampu menyampaikan perasaan tanpa kata.
      </p>
      <p>
        Bermula dari studio rumahan pada tahun 2025, kami merangkai buket pertama untuk seorang ibu tercinta. Sejak saat itu, La Fleuria tumbuh menjadi penghubung bagi banyak hati yang ingin menyapa, menguatkan, atau merayakan momen spesial—bahkan dari kejauhan.
      </p>
      <p>
        Kami percaya bunga layak hadir bukan hanya saat perayaan besar, tapi juga di hari-hari biasa—sebagai pelipur lara, ungkapan kasih, atau cara sederhana untuk berkata: “Aku memikirkanmu hari ini.”
      </p>
      <p>
        Setiap rangkaian kami dibuat dengan ketulusan, bunga segar pilihan, dan sentuhan artistik khas La Fleuria. Karena bagi kami, setiap bunga menyampaikan rasa, dan setiap rasa pantas dihadirkan dengan indah.
      </p>
    </div>
  </div>
</section>


{/* Product Section */}
<section id="product" class="px-6 py-8 bg-white">
  <div class="flex flex-col md:flex-row justify-between items-center mb-6">
    <h3 class="text-xl font-bold text-pink-800 mb-4 md:mb-0">Product</h3>
    <select
      class="p-2 border border-pink-300 rounded-full"
      onChange={(e) => handleSort(e.currentTarget.value)}
    >
      <option value="">Sort by</option>
      <option value="price">Price</option>
      <option value="name">Name</option>
    </select>
  </div>

  {/* Grid 4 kolom */}
  <div class="grid grid-cols-4 gap-4">
    <For each={products()}>
      {(product) => (
        <div class="bg-pink-50 rounded-lg p-3 text-center shadow hover:shadow-md transition">
          <img
            src={product.img}
            alt={product.name}
            class="h-32 mx-auto object-contain mb-2"
          />
          <p class="font-semibold text-pink-800 text-sm">{product.name}</p>
          <p class="text-xs text-gray-600">
            Rp {product.price.toLocaleString()}
          </p>
          <button
            class="mt-2 text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      )}
    </For>
  </div>
</section>


      {/* Footer */}
      <footer class="text-center py-6 text-sm text-gray-500">
        &copy; 2025 La Fleuriá. All rights reserved.
      </footer>
    </div>
  );
}
