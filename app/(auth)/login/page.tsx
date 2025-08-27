import LoginForm from "@/components/loginForm";

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#E9E9E9]">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center px-6 py-10 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-emerald-800 title">Sọmpụ</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-sm">
          Sign in to continue creating, customizing, and sharing your unique bio link.
        </p>

        {/* Login Form */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <LoginForm />
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-emerald-800 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Side - Brand Visual */}
      <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-emerald-800 to-teal-400">
        {/* Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute -top-16 -left-16 w-96 h-96 opacity-20"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M37.5,-64.4C50.4,-57.1,64.9,-50.2,71.4,-38.2C77.9,-26.3,76.3,-9.3,74.2,7.6C72.2,24.5,69.7,41.3,59.1,51.8C48.5,62.3,29.8,66.6,11.7,68.9C-6.4,71.2,-23.9,71.5,-36.5,62.6C-49.1,53.7,-56.9,35.5,-63,16.6C-69,-2.3,-73.3,-21.9,-67.3,-35.8C-61.3,-49.8,-44.9,-58.2,-29.1,-65.1C-13.2,-72,1.2,-77.2,15.5,-77.2C29.8,-77.2,44.6,-72,37.5,-64.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute bottom-10 right-10 w-40 h-40 opacity-30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M31.2,-53.5C40.4,-45.5,49.2,-40.4,56.9,-32.1C64.7,-23.7,71.4,-11.8,70.6,-0.5C69.8,10.8,61.4,21.7,53.8,32.3C46.2,42.9,39.4,53.3,29.5,58.7C19.5,64.2,6.4,64.8,-7.2,67.3C-20.7,69.7,-41.4,74.1,-53.4,66.4C-65.3,58.7,-68.6,39.1,-71.3,21C-74,2.9,-76.2,-14.9,-67.9,-24.3C-59.6,-33.7,-40.8,-35.7,-26.1,-42.1C-11.5,-48.4,-1.9,-59,7.4,-61.2C16.7,-63.4,33.5,-56.5,31.2,-53.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Slogan */}
        <div className="relative text-center text-white px-8">
          <h2 className="text-4xl font-extrabold mb-4 leading-snug">
            Your Links, <br /> Your Brand, One Place.
          </h2>
          <p className="text-lg opacity-90">
            Build and share a single link that connects everything you do.
          </p>
        </div>
      </div>
    </div>
  );
}
