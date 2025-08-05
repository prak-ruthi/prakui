// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-4">Your home for health</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Bangalore"
            className="border rounded-xl p-2 w-full"
          />
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals, etc."
            className="border rounded-xl p-2 w-full"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 justify-center text-sm text-gray-600">
          <span className="hover:underline cursor-pointer">Dermatologist</span>
          <span className="hover:underline cursor-pointer">Pediatrician</span>
          <span className="hover:underline cursor-pointer">Gynecologist</span>
          <span className="hover:underline cursor-pointer">Others</span>
        </div>
        <div className="mt-6 text-center">
          <Link href="/doctors">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-xl">Find Doctors</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
