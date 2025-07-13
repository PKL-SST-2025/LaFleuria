import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import logo from "../assets/logo.png";
import flowergirl from "../assets/091462e6-2d23-43fc-a03f-2b1d8c4151e4.png"; // Gambar yang kamu upload

export default function ForgotPassword() {
  const [email, setEmail] = createSignal("");

  const handleReset = () => {
    console.log("Reset password link sent to:", email());
  };

  return (
    <div class="flex h-screen items-center justify-center bg-[#4A1D35] font-sans">
      <div class="flex bg-pink-100 rounded-2xl shadow-lg w-[900px] max-w-full overflow-hidden">
        {/* Left Form */}
        <div class="w-1/2 p-10 flex flex-col justify-center">
          <div class="flex justify-center mb-6">
            <img src={logo} alt="Logo" class="h-10" />
          </div>
          <h2 class="text-2xl font-bold text-[#943d5f] text-center mb-2">Forgot Password</h2>
          <p class="text-sm text-gray-700 text-center mb-6">
            Don’t worry, we’ll send you reset instruction
          </p>

          <label class="text-sm mb-1">Email</label>
          <input
            type="email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            placeholder="Enter your email"
            class="w-full p-3 border rounded mb-4"
          />

          <button
            class="bg-pink-500 hover:bg-pink-600 text-white w-full p-3 rounded mb-3"
            onClick={handleReset}
          >
            Send Password Reset Link
          </button>

          <div class="flex justify-between text-sm text-gray-600">
            <A href="/login" class="hover:underline">← Back to login</A>
            <button class="text-pink-500 hover:underline">Resend</button>
          </div>
        </div>

        {/* Right Image */}
        <div class="w-1/2 hidden sm:block">
          <img
            src={flowergirl}
            alt="Forgot Password Illustration"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
