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
          संपर्क करें
        </span>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3"
          style={{ color: "rgb(217, 119, 87)" }}
        >
          हम आपकी बात सुनना
          <br />
          <span className="text-gray-800">चाहते हैं</span>
        </h1>

        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          नीचे दिए गए फ़ॉर्म को भरें, हमारी टीम आपसे जल्द ही संपर्क करेगी।
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
    आवेदन फ़ॉर्म
  </h2>

  <p className="text-gray-500 text-sm max-w-md">
    आगे बढ़ने के लिए नीचे दिए गए बटन पर क्लिक करें और फ़ॉर्म भरें।
  </p>

  <a
    href={GOOGLE_FORM_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 px-8 py-3 rounded-xl text-white font-semibold text-sm sm:text-base shadow-md hover:scale-105 transition-transform duration-200"
    style={{ backgroundColor: "rgb(217, 119, 87)" }}
  >
    फ़ॉर्म भरें ↗
  </a>

</div>
        {/* Bottom strip */}
        <div
          className="w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white"
          style={{ backgroundColor: "rgb(217, 119, 87)" }}
        >
          <span className="opacity-90">
            🔒 आपकी प्रतिक्रियाएँ सुरक्षित रूप से Google Forms में संग्रहीत होती हैं
          </span>
          <span className="opacity-75">Google Forms द्वारा संचालित</span>
        </div>
      </div>
    </section>
  );
}