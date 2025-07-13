import { For } from "solid-js";
import { A } from "@solidjs/router";
import logo from "../assets/logo.png";
import backgroundlp from "../assets/backgroundlp1.png?url";
import flowerlanding from "../assets/flowerlanding.png";
import productpocky from "../assets/productpocky.png";
import silverqueen from "../assets/silverqueen.png";
import sweetbloom from "../assets/sweetbloom.png";
import randomsnack from "../assets/randomsnack.png";
import cherryblossom from "../assets/cherryblossom.png";
import everlastinggarden from "../assets/everlastinggarden.png";
import strawberrysundae from "../assets/strawberrysundae.png";
import mochamuse from "../assets/mochamuse.png";
import elysianbloom from "../assets/elysianbloom.png";
import pinkpromise from "../assets/pinkpromise.png";
import scarletsecret from "../assets/scarletsecret.png";
import sunbeambouquet from "../assets/sunbeambouquet.png";
import sweetiestitch from "../assets/sweetiestitch.png";
import tulipwhisper from "../assets/tulipwhisper.png";
import bloomclip from "../assets/bloomclip.png";
import wisudabouquet from "../assets/wisudabouquet.png";

const products = [
  { name: "Pocky Snack", price: "Rp 40.000", img: productpocky },
  { name: "Silverqueen Bouquet", price: "Rp 60.000", img: silverqueen },
  { name: "Sweet Bloom Bar", price: "Rp 50.000", img: sweetbloom },
  { name: "Random Snack", price: "Rp 55.000", img: randomsnack },
  { name: "Cherry Blossom", price: "Rp 125.000", img: cherryblossom },
  { name: "Everlasting Garden", price: "Rp 120.000", img: everlastinggarden },
  { name: "Strawberry Sundae", price: "Rp 145.000", img: strawberrysundae },
  { name: "Mocha Muse", price: "Rp 150.000", img: mochamuse },
  { name: "Elysian Bloom", price: "Rp 100.000", img: elysianbloom },
  { name: "Pink Promise", price: "Rp 95.000", img: pinkpromise },
  { name: "Scarlet Secret", price: "Rp 95.000", img: scarletsecret },
  { name: "Sunbeam Bouquet", price: "Rp 85.000", img: sunbeambouquet },
  { name: "Sweetie Stitch", price: "Rp 100.000", img: sweetiestitch },
  { name: "Tulip Whisper", price: "Rp 185.000", img: tulipwhisper },
  { name: "Bloom Clip", price: "Rp 15.000", img: bloomclip },
  { name: "Wisuda Bouquet", price: "Rp 65.000", img: wisudabouquet },
];

export default function LandingPage() {
  const chunkedProducts = [products.slice(0, 8), products.slice(8, 16)];

  return (
    <div class="font-sans bg-pink-50">
      {/* Navbar */}
      <nav class="flex justify-between items-center px-6 py-4 shadow bg-white">
        <div class="flex items-center">
          <img src={logo} alt="Logo" class="h-8 w-auto" />
        </div>
        <ul class="flex space-x-6 text-gray-700 font-medium">
          <li><A href="/">Home</A></li>
          <li><A href="#about">About</A></li>
          <li><A href="#product">Product</A></li>
          <li><A href="/contact">Contact</A></li>
        </ul>
        <A href="/login">
          <button class="bg-pink-400 hover:bg-pink-500 text-white text-sm px-4 py-2 rounded">Log In</button>
        </A>
      </nav>

      {/* Hero Section */}
      <section
        class="relative h-[550px] text-white"
        style={{
          "background-image": `url('${backgroundlp}')`,
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
        }}
      >
        <div class="absolute inset-0 bg-pink-100 bg-opacity-100"></div>

        <div class="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-10">
          <div class="text-left max-w-xl">
            <h1 class="text-4xl md:text-5xl font-bold text-[#4a1f2d] mb-4 drop-shadow-md">
              Let the Flowers Speak
            </h1>
            <p class="text-[#74314e] text-base leading-relaxed drop-shadow-sm">
              We help you express the unspoken —<br />
              with love, with grace, with every bloom.<br />
              Each bouquet is handpicked with care,<br />
              delivered fresh to brighten someone's heart.
            </p>
          </div>

          <img
            src={flowerlanding}
            alt="Hero Bouquet"
            class="h-[420px] drop-shadow-xl hidden md:block"
          />
        </div>

        {/* Get Started → Login */}
        <div class="absolute bottom-8 w-full flex justify-center z-10">
          <A href="/login">
            <button class="bg-white border border-[#943d5f] text-[#943d5f] font-semibold px-6 py-2 rounded-full hover:bg-pink-100 transition">
              Get Started
            </button>
          </A>
        </div>
      </section>

      {/* About Us */}
      <section id="about" class="py-10 px-6 text-center">
        {/* Logo Only */}
        <div class="flex justify-center items-center mb-4">
          <img src={logo} alt="Logo" class="h-8 w-auto" />
        </div>

        <h2 class="text-2xl font-semibold text-[#943d5f] mb-4">About Us</h2>
        <div class="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4 text-justify">
          <p>
            La Fleuriá adalah toko buket yang menyediakan aneka rangkaian bunga, baik artificial maupun fresh flower. Kami mengutamakan kualitas, keindahan, dan makna dalam setiap rangkaian bunga.
          </p>
          <p>
            Berdiri sejak tahun 2025, kami berkomitmen menjadi bagian dari momen berharga Anda: pernikahan, ulang tahun, hingga ucapan terima kasih.
          </p>
          <p>
            La Fleuriá lahir dari kecintaan kami terhadap keindahan sederhana—kelopak yang lembut, aroma yang menenangkan, dan senyum dari hadiah kecil yang bermakna. Kami percaya bunga bukan sekadar hiasan, tapi bahasa hati yang mampu menyampaikan perasaan tanpa kata.
          </p>
          <p>
            Bermula dari studio rumahan pada tahun 2025, kami merangkai buket pertama untuk seorang ibu tercinta. Sejak saat itu, La Fleuriá tumbuh menjadi penghubung bagi banyak hati yang ingin menyapa, menguatkan, atau merayakan momen spesial—bahkan dari kejauhan.
          </p>
          <p>
            Kami percaya bunga layak hadir bukan hanya saat perayaan besar, tapi juga di hari-hari biasa—sebagai pelipur lara, ungkapan kasih, atau cara sederhana untuk berkata: “Aku memikirkanmu hari ini.”
          </p>
          <p>
            Setiap rangkaian kami dibuat dengan ketulusan, bunga segar pilihan, dan sentuhan artistik khas La Fleuriá. Karena bagi kami, setiap bunga menyampaikan rasa, dan setiap rasa pantas dihadirkan dengan indah.
          </p>
        </div>
      </section>

      {/* Product Section */}
      {chunkedProducts.map((group, index) => (
        <section class="px-6 py-8" id={index === 0 ? "product" : undefined}>
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold text-[#943d5f]">Product</h3>
            <select class="p-2 border rounded">
              <option>Sort by</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <For each={group}>{(product) => (
              <div class="bg-pink-100 rounded-xl p-2 text-center shadow hover:shadow-md transition">
                <img
                  src={product.img}
                  alt={product.name}
                  class="h-32 mx-auto object-contain mb-2"
                />
                <p class="font-medium text-[#943d5f] text-sm">{product.name}</p>
                <p class="text-xs text-gray-600">{product.price}</p>
              </div>
            )}</For>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer class="text-center py-6 text-sm text-gray-500">
        &copy; 2025 La Fleuriá. All rights reserved.
      </footer>
    </div>
  );
}
