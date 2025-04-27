import React from 'react';

export default function About() {
  return (
    <div className="flex w-screen">
      <div className="pt-24 w-full px-4 flex justify-center">
        <div className="bg-neutral-900 text-neutral-100 rounded-lg p-8 max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-4">
            Tiny Diamond Record Company is dedicated to vinyl aficionados everywhere. We believe in
            the power of analog sound and the beauty of handcrafted records. Every release is pressed
            with love and attention to detail, ensuring that when you drop the needle, you hear
            music the way it was meant to be heard.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
            tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
            diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>
          <p className="mb-4">
            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam
            nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
            pretium a, enim. Pellentesque congue.
          </p>
          <p className="mb-4">
            Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent
            egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue
            blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae;
          </p>
          <p className="text-neutral-500 text-sm mt-6 text-center">
            © 2025 Tiny Diamond Record Company. All records handmade in Bergen, Norway.
          </p>
        </div>
      </div>
    </div>
  );
}
