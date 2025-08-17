import { createSignal } from "solid-js";
import { useNavigate, A } from "@solidjs/router";
import logo from "../assets/logo.png";
import login from "../assets/login.png";

export default function Login() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");
  const navigate = useNavigate();

  const handleLogin = (e: Event) => {
    e.preventDefault();

    // Validasi input
    if (!email() || !password()) {
      setError("Email and password are required!");
      return;
    }

    // Validasi format email sederhana
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email())) {
      setError("Please enter a valid email address!");
      return;
    }

    setError(""); // Clear error jika valid
    console.log("Email:", email());
    console.log("Password:", password());

    // Jika login sukses → ke Dashboard
    navigate("/dashboard");
  };

  return (
    <div class="flex h-screen bg-pink-100 items-center justify-center font-sans">
      <div class="bg-white rounded-2xl shadow-lg flex w-[900px] max-w-full overflow-hidden">
        {/* Left: Form */}
        <div class="w-1/2 p-10 flex flex-col justify-center">
          <div class="flex justify-center mb-4">
            <img src={logo} alt="Logo" class="h-10" />
          </div>
          <h2 class="text-3xl font-bold text-[#943d5f] mb-2 text-center">
            Welcome Back
          </h2>
          <p class="text-sm text-gray-600 mb-6 text-center">
            Welcome back! Please enter your details.
          </p>

          {/* Pesan Error */}
          {error() && <p class="text-red-500 text-sm mb-3 text-center">{error()}</p>}

          <form onSubmit={handleLogin}>
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

            <div class="flex justify-between text-sm text-gray-600 mb-4">
              <label>
                <input type="checkbox" class="mr-1" />
                Remember me
              </label>
              <A href="/forgot-password" class="text-pink-500 hover:underline">
                Forgot Password?
              </A>
            </div>

            <button
              type="submit"
              disabled={!email() || !password()}
              class={`w-full p-3 rounded mb-3 text-white ${
                !email() || !password()
                  ? "bg-pink-300 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              Login
            </button>
          </form>

          <p class="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <A href="/signup" class="text-pink-500 hover:underline">
              Sign up
            </A>
          </p>
        </div>

        {/* Right: Image */}
        <div class="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="Login Illustration"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
