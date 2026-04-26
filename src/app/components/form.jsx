"use client";

export default function Form() {
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScjYGtli1nOgMeO3iHFLTzs-qAtsOQRvWx7b7fAX3J3-SD6SA/viewform";

  return (
    <section className="min-h-screen w-full bg-[#fdf6f2] flex flex-col items-center justify-start px-4 py-12 sm:py-16 font-sans">

      {/* ─── Header ─────────────────────────────────────── */}
      <div className="w-full max-w-3xl mb-8 sm:mb-10 text-center">
        <span
          className="inline-block px-4 py-1 rounded-full text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ backgroundColor: "rgb(217, 119, 87)" }}
        >
          Get In Touch
        </span>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3"
          style={{ color: "rgb(217, 119, 87)" }}
        >
          We'd Love to Hear
          <br />
          <span className="text-gray-800">From You</span>
        </h1>

        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Fill out the form and our team will get back to you as soon as
          possible.
        </p>

        <div className="flex items-center justify-center gap-3 mt-6">
          <span
            className="h-px w-16 sm:w-24"
            style={{ backgroundColor: "rgba(217, 119, 87, 0.35)" }}
          />
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "rgb(217, 119, 87)" }}
          />
          <span
            className="h-px w-16 sm:w-24"
            style={{ backgroundColor: "rgba(217, 119, 87, 0.35)" }}
          />
        </div>
      </div>

      {/* ─── Card ───────────────────────────────────────── */}
      <div
        className="w-full max-w-3xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border bg-white"
        style={{ borderColor: "rgba(217, 119, 87, 0.2)" }}
      >
        {/* Top bar */}
        <div
          className="w-full h-2"
          style={{ backgroundColor: "rgb(217, 119, 87)" }}
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 gap-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Open the Form
          </h2>

          <p className="text-gray-500 text-sm max-w-md">
            This form includes file uploads, so it needs to be opened in a new
            tab.
          </p>

          {/* Button */}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl text-white font-semibold text-sm sm:text-base shadow-md hover:scale-105 transition-transform duration-200"
            style={{ backgroundColor: "rgb(217, 119, 87)" }}
          >
            Open Form ↗
          </a>
        </div>

        {/* Bottom strip */}
        <div
          className="w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white"
          style={{ backgroundColor: "rgb(217, 119, 87)" }}
        >
          <span className="opacity-90">
            🔒 Responses are securely saved to Google Forms
          </span>
          <span className="opacity-75">Powered by Google Forms</span>
        </div>
      </div>

      {/* ─── Footer ─────────────────────────────────────── */}
      {/* <p className="mt-8 text-center text-gray-400 text-xs sm:text-sm">
        Having trouble?{" "}
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 font-medium hover:opacity-80 transition-opacity"
          style={{ color: "rgb(217, 119, 87)" }}
        >
          Open directly ↗
        </a>
      </p> */}
    </section>
  );
}