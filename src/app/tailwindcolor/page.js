export default function TailwindColorsPage() {
    return (
      <main className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  
          {/* ================= HEADER ================= */}
          <section className="pt-12 pb-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
  
              {/* LEFT */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-black text-black">
                  Tailwind Colors
                </h1>
  
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                  Create, preview and export your Tailwind CSS palette
                </p>
              </div>
  
              {/* RIGHT AD */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex gap-4">
                  <div className="h-20 w-20 rounded-lg bg-black" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Shopify
                    </p>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      Turn your ideas into business. Start for free then pay{" "}
                      <span className="font-medium">$1/month</span> for 3 months.
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      ads via Carbon
                    </p>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  
          {/* ================= PALETTE HEADER ================= */}
          <section className="mb-8 flex items-center justify-between">
            <p className="text-base font-medium text-gray-900">
              Palette 1 <span className="text-gray-500">(Digital Blue)</span>
            </p>
  
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium text-blue-600">Light</span>
              <div className="relative h-5 w-10 rounded-full bg-blue-600">
                <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
              </div>
              <span className="text-gray-500">Dark</span>
            </div>
          </section>
  
          {/* ================= COLOR STRIP ================= */}
          <section className="pb-20">
            <div
              className="
                flex gap-2 overflow-x-auto
                [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {[
                ["50", "#E5F0FF"],
                ["100", "#CCE0FF"],
                ["200", "#99C2FF"],
                ["300", "#66A3FF"],
                ["400", "#3385FF"],
                ["500", "#0066FF"],
                ["600", "#0052CC"],
                ["700", "#003D99"],
                ["800", "#002966"],
                ["900", "#001433"],
                ["950", "#000E24"],
              ].map(([shade, hex]) => (
                <div
                  key={shade}
                  className="min-w-[96px] rounded-xl px-3 py-4 text-center"
                  style={{ backgroundColor: hex }}
                >
                  <p className="text-sm font-semibold text-white">
                    {shade}
                  </p>
  
                  <p className="mt-10 text-xs font-medium tracking-wide text-white/70">
                    {hex.replace("#", "")}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
        </div>
      </main>
    );
  }
  