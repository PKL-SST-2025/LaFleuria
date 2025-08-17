import { For } from "solid-js";
import { cart, updateQuantity } from "../store/cart";
import logo from "../assets/logo.png";

export default function Checkout() {
  const subtotal = () =>
    cart().reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalItems = () =>
    cart().reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div class="min-h-screen bg-[#4A1D35] flex items-center justify-center font-sans">
      <div class="bg-white w-[90%] max-w-5xl p-6 rounded-md shadow-lg">
        {/* Header */}
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center space-x-2">
            <img src={logo} alt="Logo" class="h-6" />
            <span class="text-sm font-semibold text-[#4A1D35]">La Fleuriá</span>
          </div>
          <h2 class="text-xl font-semibold text-pink-600 tracking-wide">
            CHECKOUT
          </h2>
        </div>
        <hr class="mb-4" />

        {/* Table */}
        <div class="overflow-x-auto">
          <table class="w-full table-fixed border text-sm">
            <thead class="bg-gray-100">
              <tr class="text-left">
                <th class="w-1/3 px-4 py-2">Product</th>
                <th class="w-1/6 px-4 py-2">Price</th>
                <th class="w-1/6 px-4 py-2">Quantity</th>
                <th class="w-1/6 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <For each={cart()}>
                {(item) => (
                  <tr class="border-t">
                    <td class="flex items-center px-4 py-2 space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        class="h-16 rounded-md"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td class="px-4 py-2">
                      Rp.{item.price.toLocaleString("id-ID")}
                    </td>
                    <td class="px-4 py-2 flex items-center space-x-2">
                      <button
                        class="px-2 py-1 border rounded bg-white"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        class="px-2 py-1 border rounded bg-white"
                        onClick={() => updateQuantity(item.id, +1)}
                      >
                        +
                      </button>
                    </td>
                    <td class="px-4 py-2">
                      Rp.{(item.price * item.quantity).toLocaleString("id-ID")}
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>

        {/* Total Summary */}
        <div class="flex justify-end mt-6">
          <div class="text-sm border p-4 w-fit rounded bg-gray-50">
            <p>Item: <span class="font-medium">{totalItems()}</span></p>
            <p>
              Subtotal:{" "}
              <span class="font-medium">
                Rp.{subtotal().toLocaleString("id-ID")}
              </span>
            </p>
          </div>
        </div>

        {/* Checkout Button */}
        <div class="flex justify-end mt-4">
          <button class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded text-sm">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
