export default function GoogleButton() {
  return (
    <div>

      {/* DIVIDER */}
      <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-sm text-gray-400">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* GOOGLE BUTTON */}
      <button
        type="button"
        onClick={() => alert("Google login coming soon ")}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
      >
        <img
          src="/icons/google.png"
          alt="google"
          className="w-5 h-5"/>

        <span className="font-medium text-gray-700">
          Continue with Google
        </span>
      </button>

      {/*  NOTE */}
      <p className="text-xs text-gray-400 mt-2 text-center">
        Google login integration coming soon
      </p>

    </div>
  );
}