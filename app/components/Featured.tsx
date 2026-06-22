"use client";

export default function FeaturedVideos() {
  return (
    <section className="py-20 px-6 bg-[#fffafc]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[22px] font-semibold text-[#3d1f2a] mb-2 tracking-tight">
          Featured Videos
        </h2>

        <p className="text-center text-[13px] text-[#c0849a] mb-12">
          Cute moments, product demos, and baby joy in motion.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-[#f5d0da] overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-[#fde8ed] overflow-hidden">
              <video
                src="/Baby's%20First%20Smile.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ffe8ef] text-[#e8829a] text-[11px] font-semibold mb-3">
                Video
              </span>

              <h3 className="text-[15px] font-semibold text-[#3d1f2a]">
                Baby’s First Smile
              </h3>

              <p className="text-[12px] text-[#c0849a] mt-2">
                A sweet moment capturing pure happiness and joy.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-[#f5d0da] overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-[#fde8ed] overflow-hidden">
              <video
                src="/Little%20Star%20Moments.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ffe8ef] text-[#e8829a] text-[11px] font-semibold mb-3">
                Video
              </span>

              <h3 className="text-[15px] font-semibold text-[#3d1f2a]">
                Tiny Explorer Moments
              </h3>

              <p className="text-[12px] text-[#c0849a] mt-2">
                Watching little ones discover the world around them.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-[#f5d0da] overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] bg-[#fde8ed] overflow-hidden">
              <video
                src="/Joyful%20Baby%20Moments.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#ffe8ef] text-[#e8829a] text-[11px] font-semibold mb-3">
                Video
              </span>

              <h3 className="text-[15px] font-semibold text-[#3d1f2a]">
                Playtime Fun
              </h3>

              <p className="text-[12px] text-[#c0849a] mt-2">
                Joyful play moments filled with laughter and learning.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}