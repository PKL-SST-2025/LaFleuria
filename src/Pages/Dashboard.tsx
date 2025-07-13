import { A } from "@solidjs/router";
import logo from "../assets/logo.png";
import profilePic from "../assets/ca5c9408-e599-4fab-a5ee-ca41c096e7db.png"; // Gambar cewek dengan bunga
import bouquet1 from "../assets/elysianbloom.png";
import bouquet2 from "../assets/cherryblossom.png";
import popularBouquet from "../assets/tulipwhisper.png";

export default function Dashboard() {
  return (
    <div class="flex h-screen font-sans bg-[#4A1D35]">
      {/* Sidebar */}
      <aside class="w-64 bg-pink-200 p-6 flex flex-col text-[#4A1D35]">
        <div class="flex items-center mb-6">
          <img src={logo} alt="Logo" class="h-6 mr-2" />
          <span class="font-semibold text-sm">La Fleuriá</span>
        </div>
        <div class="flex flex-col items-center text-center mb-8">
          <img src={profilePic} alt="Profile" class="h-16 w-16 rounded-full mb-2 object-cover" />
          <span class="text-sm font-medium">Skylian Senthea</span>
        </div>
        <nav>
          <A href="#" class="block text-sm font-semibold py-2 text-[#4A1D35] hover:underline">
            Dashboard
          </A>
        </nav>
      </aside>

      {/* Main Content */}
      <main class="flex-1 bg-white p-8 overflow-y-auto">
        {/* Greeting Banner */}
        <div class="flex items-center bg-pink-100 rounded-xl px-6 py-4 mb-6">
          <div class="flex-1">
            <h2 class="font-semibold text-lg text-[#4A1D35]">Hello Skylian!</h2>
            <p class="text-sm text-gray-700">Find the perfect blooms for every moment.</p>
          </div>
          <img src={profilePic} alt="Banner Girl" class="h-20 rounded-xl object-cover" />
        </div>

        {/* Section Title */}
        <h3 class="text-lg font-semibold text-[#4A1D35] mb-4">For You</h3>

        {/* Product Cards + Detail Section */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Product Cards */}
          <div class="grid grid-cols-2 gap-4 lg:col-span-2">
            <div class="bg-pink-100 p-4 rounded-xl text-center">
              <img src={bouquet1} alt="Elysian Bloom" class="h-28 mx-auto mb-2" />
              <p class="font-medium text-[#4A1D35] text-sm">Elysian Bloom</p>
              <p class="text-xs text-gray-600">IDR 100.000</p>
              <button class="mt-2 text-xs text-pink-500 hover:underline">🛒 Add to cart</button>
            </div>
            <div class="bg-gray-100 p-4 rounded-xl text-center">
              <img src={bouquet2} alt="Cherry Blossom" class="h-28 mx-auto mb-2" />
              <p class="font-medium text-[#4A1D35] text-sm">Cherry Blossom</p>
              <p class="text-xs text-gray-600">IDR 125.000</p>
              <button class="mt-2 text-xs text-pink-500 hover:underline">🛒 Add to cart</button>
            </div>
          </div>

          {/* Detail Panel */}
          <div class="bg-gray-100 rounded-xl p-4 text-[#4A1D35]">
            <img src={bouquet1} alt="Elysian Bloom" class="h-28 mx-auto mb-4" />
            <div class="flex justify-between items-center text-sm mb-2">
              <span class="font-medium">Elysian Bloom</span>
              <span class="text-[#943d5f] font-semibold">IDR 100.000</span>
            </div>
            <p class="text-xs text-gray-700 mb-4 text-justify">
              Elysian Bloom is a joyful blend of elegance and warmth. Featuring soft pink
              hydrangeas, blush roses, and baby’s breath, this bouquet delivers both charm
              and serenity — perfect for birthdays, anniversaries, or just because.
            </p>
            <div class="flex items-center mb-3">
              <button class="bg-white px-3 py-1 border text-sm rounded">-</button>
              <span class="px-4">02</span>
              <button class="bg-white px-3 py-1 border text-sm rounded">+</button>
            </div>
            <button class="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 text-sm">
              Add to bag
            </button>
          </div>
        </div>

        {/* Popular Section */}
        <div class="bg-gray-100 rounded-xl p-4 flex items-center space-x-4 w-fit">
          <img src={popularBouquet} alt="Popular" class="h-14 rounded-lg" />
          <div>
            <p class="text-sm font-medium">Tulip Whisper</p>
            <p class="text-xs text-gray-600">4.5 ★</p>
          </div>
          <span class="ml-auto text-sm text-[#943d5f] font-semibold">IDR 185.000,00</span>
        </div>
      </main>
    </div>
  );
}
