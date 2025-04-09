"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function HomePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (!user) return null; // optional loading fallback

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h1 className="text-2xl font-semibold mb-4">
          Hey, {user.displayName || "Friend"}! You’re successfully logged in.
        </h1>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
