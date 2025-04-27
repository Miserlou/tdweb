import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ record }) {
  return (
    <Link to={`${import.meta.env.BASE_URL}record/${record.catalogNumber}`} className="block">
      <div className="bg-black text-white shadow-lg rounded-b-md overflow-hidden hover:shadow-xl transform transition duration-100 hover:scale-101">
        <img
          src={`${import.meta.env.BASE_URL}${record.sleeveArt}`}
          alt={record.title}
          className="w-full aspect-square h-60 object-cover" /* Increase height of image */
        />
        <div className="p-6 border-t-3 border-white">
          <h2 className="font-semibold text-xl">{record.title}</h2>
          <p className="text-gray-300">{record.artist}</p>
          <p className="text-sm text-gray-500">{record.catalogNumber}</p>
        </div>
      </div>
    </Link>
  );
}