import { createSignal } from "solid-js";
import logo from "../assets/logo.png";
import gopay from "../assets/gopay.png";
import shopeepay from "../assets/shopeepay.png";
import dana from "../assets/dana.png";
import checkmark from "../assets/Check Mark.png"; // ikon centang besar

export default function Payment() {
  const [success, setSuccess] = createSignal(false);

  const handleSelect = () => {
    setTimeout(() => {
      setSuccess(true);
    }, 800); // Simulasi loading sedikit sebelum sukses
  };

  return (
    <div class="min-h-screen bg-[#4A1D35] flex items-center justify-center font-sans">
      <div class="bg-white w-[90%] max-w-2xl p-6 rounded-md shadow-lg text-center">
        {/* Header */}
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center space-x-2">
            <img src={logo} alt="Logo" class="h-6" />
            <span class="text-sm font-semibold text-[#4A1D35]">La Fleuriá</span>
          </div>
          <h2 class="text-lg font-semibold text-pink-600 tracking-wide w-full text-center -ml-8">
            Payment
          </h2>
        </div>
        <hr class="mb-6" />

        {/* Conditional Render */}
        {!success() ? (
          <>
            <p class="text-md font-semibold mb-4">Select a payment method</p>
            <div class="flex justify-center gap-6 mb-4">
              <img
                src={gopay}
                alt="Gopay"
                class="h-12 cursor-pointer hover:scale-105 transition"
                onClick={handleSelect}
              />
              <img
                src={shopeepay}
                alt="ShopeePay"
                class="h-12 cursor-pointer hover:scale-105 transition"
                onClick={handleSelect}
              />
              <img
                src={dana}
                alt="Dana"
                class="h-12 cursor-pointer hover:scale-105 transition"
                onClick={handleSelect}
              />
            </div>
          </>
        ) : (
          <div class="flex flex-col items-center justify-center space-y-4">
            <img src={checkmark} alt="Success" class="h-24" />
            <p class="text-lg font-bold text-[#4A1D35]">Payment Success!</p>
          </div>
        )}
      </div>
    </div>
  );
}
