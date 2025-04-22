"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      <section className="w-full px-6 py-10 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Rent Smarter with <span className="text-highlight">OneStopLease</span>
            </h1>
            <p className="mt-6 text-md text-gray-700">
              Affordable rentals for furniture, appliances, and electronics all in one place. Experience fast delivery, easy returns, and hassle-free service.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products">
                <Button className="px-6 py-3 text-base bg-highlight hover:bg-highlight/80">Explore Products</Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="/hero.svg"
              alt="Rental service illustration"
              className="w-full max-w-md mx-auto "
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-2 text-sm text-primary mt-auto">
        © {new Date().getFullYear()} OneStopLease. All rights reserved.
      </footer>
    </main>
  );
}