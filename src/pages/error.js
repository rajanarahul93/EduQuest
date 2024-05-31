import React from "react";

export default function error() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-xl font-medium">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    </div>
  );
}
