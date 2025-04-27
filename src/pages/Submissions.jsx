import React from 'react';

export default function Submissions() {
  return (
    <div className="flex w-screen">
      <div className="pt-24 w-full px-4 flex justify-center">
        <div className="bg-neutral-900 text-neutral-100 rounded-lg p-8 max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-6">Submit Your Demos</h2>
          <p className="mb-4">
            Are you a producer or band looking for a home to publish your music? <b><a href="mailto:richjones@fastmail.com">Contact us!</a></b>
          </p>
          <p className="mb-4">
            We're open to hearing and publishing music in all genres, but we're particularly interested in new, interesting and experimental music that sounds best when played super loud!
          </p>
          <p className="text-neutral-500 text-sm mt-6 text-center">
            © 2025 Tiny Diamond Record Company. All records handmade in Bergen, Norway.
          </p>
        </div>
      </div>
    </div>
  );
}
