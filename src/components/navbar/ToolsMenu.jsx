export default function ToolsMenu({ open }) {
    return (
      <div
        className={`
          absolute left-0 top-full w-full z-40
          transition-all duration-500 ease-in-out
          ${open ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        {/* Animation wrapper */}
        <div
          className={`
            overflow-hidden border-t border-gray-200 bg-white shadow-xl
            transition-all duration-500 ease-in-out
            ${open
              ? "max-h-[900px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3"}
          `}
        >
          <div className="mx-auto max-w-[1450px] px-8 py-14">
            <div className="grid grid-cols-12 gap-16">
              {/* ================= LEFT SIDE ================= */}
              <div className="col-span-8 grid grid-cols-2 gap-x-20 gap-y-14">
                {/* Palette Generator */}
                <div>
                  <h3 className="text-3xl font-bold text-cyan-500">
                    Palette Generator
                  </h3>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Create unique color palettes quickly and effortlessly.
                  </p>
                </div>
  
                {/* Explore Palettes */}
                <div>
                  <h3 className="text-3xl font-bold text-blue-500">
                    Explore Palettes
                  </h3>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Discover millions of color palettes by topic, style and color.
                  </p>
                </div>
  
                {/* Image Picker */}
                <div>
                  <h3 className="text-3xl font-bold text-purple-500">
                    Image Picker
                  </h3>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Extract beautiful colors from any image with ease.
                  </p>
                </div>
  
                {/* Contrast Checker */}
                <div>
                  <h3 className="text-3xl font-bold text-pink-500">
                    Contrast Checker
                  </h3>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Ensure your designs meet accessibility standards.
                  </p>
                </div>
  
                {/* Palette Visualizer */}
                <div>
                  <h3 className="text-3xl font-bold text-red-500">
                    Palette Visualizer
                  </h3>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Check your colors on real designs in real-time.
                  </p>
                </div>
  
                {/* Color Picker */}
                <div>
                  <h3 className="text-3xl font-bold text-orange-500">
                    Color Picker
                  </h3>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Get useful info about any color like meaning, variations and
                    accessibility.
                  </p>
                </div>
  
                {/* Tailwind Colors */}
                <div>
                  <h3 className="text-3xl font-bold text-yellow-500">
                    Tailwind Colors
                  </h3>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Create and preview your Tailwind palettes on real UI designs.
                  </p>
                </div>
  
                {/* Color Bot */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold text-green-500">
                      Color Bot
                    </h3>
                    <span className="rounded-full border border-green-500 px-2 py-0.5 text-xs font-bold text-green-500">
                      NEW
                    </span>
                  </div>
                  <p className="mt-3 text-base text-gray-700 max-w-md">
                    Chat with our AI-powered bot and get color suggestions.
                  </p>
                </div>
              </div>
  
              {/* ================= RIGHT SIDE ================= */}
              <div className="col-span-4 grid grid-cols-2 gap-x-12 gap-y-10">
                {/* DISCOVER */}
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Discover
                  </p>
                  <ul className="space-y-4 text-base font-medium text-gray-900">
                    <li>List of Colors</li>
                    <li>List of Gradients</li>
                    <li>Gradient Maker</li>
                    <li>Gradient Palette</li>
                    <li>Image Converter</li>
                    <li>SVG Recolor</li>
                    <li>Collage Maker</li>
                    <li>Free Fonts</li>
                    <li>Font Generator</li>
                  </ul>
                </div>
  
                {/* DOWNLOAD + COMPANY */}
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Download
                  </p>
                  <ul className="space-y-4 text-base font-medium text-gray-900">
                    <li>iOS App</li>
                    <li>Figma Plugin</li>
                    <li>Adobe Extension</li>
                    <li>Chrome Extension</li>
                  </ul>
  
                  <p className="mt-10 mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Company
                  </p>
                  <ul className="space-y-4 text-base font-medium text-gray-900">
                    <li>Pricing</li>
                    <li>Help Center</li>
                    <li>Features Request</li>
                    <li>Affiliate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  