"use client";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/ProfileDropdown"; // Adjust path accordingly
import { useState } from "react";
import { Locations } from "@/app/constants";

export default function Navbar() {
  const { user } = useAuth();
  const [location, setLocation] = useState("Chennai"); // Replace with real location logic later

  return (
    <nav className="w-full px-48 py-4 bg-gray-200 shadow-sm flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-highlight">
        OneStopLease
      </Link>

      {/* Location Dropdown */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-highlight px-3 py-1 rounded-md text-sm h-8 w-48"
      >
        {Locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for furniture, appliances..."
        className="border border-highlight px-4 py-2 rounded-md w-1/3 placeholder:text-sm text-sm"
      />

      {/* Auth Button / Profile */}
      <div>
        {user ? (
          <ProfileDropdown />
        ) : (
          <Link href="/login">
            <Button variant="default" className="px-6 py-3 text-md bg-highlight hover:bg-highlight/80">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
