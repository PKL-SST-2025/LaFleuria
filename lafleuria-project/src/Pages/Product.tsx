import { createSignal, For } from "solid-js";
import { Search, Plus } from "lucide-solid";
import { addToCart } from "../store/cart";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Packy Snack", price: 85000, image: "/assets/packysnack.png" },
  { id: 2, name: "Sheepers Bouquet", price: 120000, image: "/assets/sheepersbouquet.png" },
  { id: 3, name: "Sweet Bloom Bar", price: 90000, image: "/assets/sweetbloom.png" },
  { id: 4, name: "Random Snack", price: 95000, image: "/assets/randomsnack.png" },
  { id: 5, name: "Cherry Blossom", price: 125000, image: "/assets/cherryblossom.png" },
  { id: 6, name: "Everlasting Garden", price: 100000, image: "/assets/everlastinggarden.png" },
  { id: 7, name: "Strawberry Sundae", price: 115000, image: "/assets/strawberrysundae.png" },
  { id: 8, name: "Nicola Maze", price: 135000, image: "/assets/nicolamaze.png" },
  { id: 9, name: "Elysian Bloom", price: 105000, image: "/assets/elysianbloom.png" },
  { id: 10, name: "Pink Promise", price: 95000, image: "/assets/pinkpromise.png" },
  { id: 11, name: "Scarlet Secret", price: 95000, image: "/assets/scarletsecrets.png" },
  { id: 12, name: "Sunbeam Bouquet", price: 85000, image: "/assets/sunbembouquet.png" },
  { id: 13, name: "Sweetie Stitch", price: 100000, image: "/assets/sweetiestitch.png" },
  { id: 14, name: "Tulip Whisper", price: 185000, image: "/assets/tulipwhisper.png" },
  { id: 15, name: "Heroic Clip", price: 95000, image: "/assets/heroicclip.png" },
  { id: 16, name: "Wisuda Bouquet", price: 65000, image: "/assets/wisudabouquet.png" },
];

export default function ProductPage() {
  const [search, setSearch] = createSignal("");

  const filteredProducts = () =>
    products.filter((p) =>
      p.name.toLowerCase().includes(search().toLowerCase())
    );

  return (
    <div class="min-h-screen bg-[#4A1D35] p-6">
      {/* Header */}
      <div class="bg-[#fff] p-4 rounded-md shadow-md mb-6">
        <h1 class="text-2xl font-semibold text-[#4A1D35] mb-4">Product</h1>
        <div class="flex items-center border rounded-md px-3 py-2 w-full max-w-md bg-gray-50">
          <Search class="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search a product..."
            value={search()}
            onInput={(e) => setSearch(e.currentTarget.value)}
            class="bg-transparent outline-none flex-1 text-sm"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <For each={filteredProducts()}>
          {(product) => (
            <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                class="h-40 object-contain mb-3"
              />
              <h2 class="font-semibold text-center text-sm">{product.name}</h2>
              <p class="text-pink-600 text-sm mb-2">
                IDR {product.price.toLocaleString("id-ID")}
              </p>
              <button
                onClick={() => addToCart(product)}
                class="flex items-center gap-2 border px-3 py-1 rounded-md text-sm hover:bg-pink-50 transition"
              >
                <Plus class="w-4 h-4" /> Add
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
