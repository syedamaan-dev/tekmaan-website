import React from "react";
import Link from "next/link";
import { Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-[#0B1020] text-white">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182548] border border-white/10 text-xs font-semibold text-[#41C9D7] uppercase tracking-wider mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Error 404</span>
      </div>

      <h1 className="text-section-title font-heading font-black text-white mb-4">
        Page Not Located
      </h1>

      <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8">
        The route or system resource you requested does not exist or has been relocated within our architecture.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#5266F5] to-[#41C9D7] hover:shadow-[0_0_20px_rgba(82,102,245,0.4)] transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          <span>Explore Work</span>
        </Link>
      </div>
    </div>
  );
}
