"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h2 className="text-3xl font-bold tracking-tight">Something went wrong</h2>
        <p className="mt-3 text-gray-600">
          We hit an unexpected issue. Please try again.
        </p>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <Button onClick={() => reset()} className="mt-6">
          Try again
        </Button>
      </div>
    </main>
  );
}
