"use client";
export default function Auth() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <h1 className="text-4xl font-bold">Welcome to Spotify Stats</h1>
        <p className="text-xl">Log in into your Spotify account</p>
        <button className="px-6 py-2 mt-4 text-white bg-green-500 rounded-full hover:bg-green-600">
          Log in
        </button>
      </div>
    </div>
  );
}
