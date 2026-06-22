"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type MediaFile = {
  url?: string;
  filename?: string;
};

type Video = {
  id: string;
  title: string;
  video?: MediaFile;   
};

const API_BASE = process.env.NEXT_PUBLIC_PAYLOAD_API_URL;

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch(
          `${API_BASE}/api/videos?depth=1&limit=50&sort=-createdAt`,
          { cache: "no-store" }
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
    <main className="min-h-screen bg-[#fffafc]">
      <Navbar />

      <section className="px-6 pt-32 pb-16 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#3d1f2a]">
          Videos Gallery
        </h1>

        <p className="text-[#c0849a] mt-2">
          Watch adorable baby moments and product showcases.
        </p>

        {loading && (
          <p className="text-[#c0849a] mt-10">Loading videos...</p>
        )}

        {!loading && videos.length === 0 && (
          <p className="text-[#c0849a] mt-10">No videos added yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {videos.map((video) => {
            const file = video.video;

            const videoUrl = file?.url?.startsWith("http")
              ? file.url
              : file?.url
              ? `${API_BASE}${file.url}`
              : "";

            return (
              <article
                key={video.id}
                className="bg-white border border-[#f5d0da] rounded-2xl overflow-hidden"
              >
                {/* VIDEO */}
                <div className="h-52 w-full bg-[#fde8ed]">
                  {videoUrl ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-[#e8829a]">
                      No Video
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-[#e8829a] mb-2">
                    video
                  </p>

                  <h2 className="text-lg font-bold text-[#3d1f2a]">
                    {video.title}
                  </h2>

                  <p className="text-sm text-[#8c6373] mt-2 line-clamp-2">
                    {file?.filename || "Baby moment video"}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}