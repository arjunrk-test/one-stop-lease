"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      <section className="w-full px-6 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Rent Smarter with <span className="text-indigo-600">OneStopLease</span>
            </h1>
            <p className="mt-6 text-md text-gray-600">
              Affordable rentals for furniture, appliances, and electronics all in one place. Experience fast delivery, easy returns, and hassle-free service.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products">
                <Button className="px-6 py-3 text-base">Explore Products</Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="/next.svg"
              alt="Rental service illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Optional Footer or Call to Action */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} OneStopLease. All rights reserved.
      </footer>
    </main>
  );
}