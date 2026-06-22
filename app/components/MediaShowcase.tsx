"use client";

import { useEffect, useState } from "react";

type Video = {
  id: string;
  title: string;
  url?: string;
  filename?: string;
};

const API_BASE = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;

export default function MediaGallery() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch(
          `${API_BASE}/api/videos?limit=50&sort=-createdAt`
        );

        const data = await res.json();
        setVideos(data.docs || []);
      } catch (error) {
        console.error("Failed to load videos", error);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  return (
    <section className="py-20 px-6 bg-[#fffafc]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-[22px] font-semibold text-[#3d1f2a] mb-2 tracking-tight">
          Gallery & Videos
        </h2>

        <p className="text-center text-[13px] text-[#c0849a] mb-12">
          Explore adorable moments and product showcases.
        </p>

        {loading && (
          <p className="text-center text-[#c0849a]">
            Loading videos...
          </p>
        )}

        {!loading && videos.length === 0 && (
          <p className="text-center text-[#c0849a]">
            No videos available.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => {
            const videoUrl = video.url?.startsWith("http")
              ? video.url
              : `${API_BASE}${video.url}`;

            return (
              <div
                key={video.id}
                className="bg-white rounded-3xl border border-[#f5d0da] overflow-hidden hover:scale-105 hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-[#fde8ed] overflow-hidden">
                  {video.url ? (
                    <>
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      >
                        <source src={videoUrl} type="video/mp4" />
                      </video>

                      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-2">
                        <svg
                          width="14"
                          height="14"
                          fill="white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        fill="#e8829a"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#ffe8ef] text-[#e8829a] text-[11px] font-semibold mb-3">
                    Video
                  </span>

                  <h3 className="text-[15px] font-semibold text-[#3d1f2a]">
                    {video.title}
                  </h3>

                  <p className="text-[12px] text-[#c0849a] mt-2">
                    {video.filename}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}