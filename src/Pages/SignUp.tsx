import { createSignal } from "solid-js";
import logo from "../assets/logo.png";
import login from "../assets/login.png";
import { A } from "@solidjs/router";

export default function SignUp() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");

  const handleSignUp = () => {
    console.log("Name:", name());
    console.log("Email:", email());
    console.log("Password:", password());
    console.log("Confirm Password:", confirmPassword());
  };

  return (
    <div class="flex h-screen bg-pink-100 items-center justify-center font-sans">
      <div class="bg-white rounded-2xl shadow-lg flex w-[950px] max-w-full overflow-hidden">
        {/* Left: Sign Up Form */}
        <div class="w-1/2 p-10 flex flex-col justify-center">
          <div class="flex justify-center mb-4">
            <img src={logo} alt="La Fleuriá Logo" class="h-10" />
          </div>
          <h2 class="text-center text-3xl font-semibold text-[#943d5f] mb-1">
            Let's Get Started
          </h2>
          <p class="text-center text-sm text-gray-700 mb-6">
            Create your La Fleuriá account
          </p>

          <label class="text-sm mb-1">Name</label>
          <input
            type="text"
            value={name()}
            onInput={(e) => setName(e.currentTarget.value)}
            placeholder="Enter your name"
            class="w-full p-3 border rounded mb-4"
          />

          <label class="text-sm mb-1">Email</label>
          <input
            type="email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            placeholder="Enter your email"
            class="w-full p-3 border rounded mb-4"
          />

          <label class="text-sm mb-1">Password</label>
          <input
            type="password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
            placeholder="Enter your password"
            class="w-full p-3 border rounded mb-4"
          />

          <label class="text-sm mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword()}
            onInput={(e) => setConfirmPassword(e.currentTarget.value)}
            placeholder="Confirm your password"
            class="w-full p-3 border rounded mb-4"
          />

          <button
            class="bg-pink-500 hover:bg-pink-600 text-white w-full p-3 rounded mb-3"
            onClick={handleSignUp}
          >
            Sign Up
          </button>

          <p class="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <A href="/login" class="text-pink-500 hover:underline">
              Login
            </A>
          </p>
        </div>

        {/* Right: Image */}
        <div class="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="Signup Illustration"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
