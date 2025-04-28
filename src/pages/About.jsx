import React from 'react';

export default function About() {
  return (
    <div className="flex w-screen">
      <div className="pt-24 w-full px-4 flex justify-center">
        <div className="bg-neutral-900 text-neutral-100 rounded-lg p-8 max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-4">
            Tiny Diamond produces limited edition, lathe-cut vinyl records in Bergen, Norway.
          </p>
          <p className="mb-4">
            Our mission is to gather excellent and interesting contemporary music and carve it into a permanent format which can be shared and discovered for generations to come.
          </p>
          <p className="text-neutral-500 text-sm mt-6 text-center">
            © 2025 Tiny Diamond Record Company.
          </p>
        </div>
      </div>
    </div>
  );
}
