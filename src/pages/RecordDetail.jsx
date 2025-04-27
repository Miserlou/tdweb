import React from 'react';
import { useParams, Link } from 'react-router-dom';
import records from '../data/records';

export default function RecordDetail() {
  const { catalogNumber } = useParams();
  const record = records.find(r => r.catalogNumber === catalogNumber);
  if (!record) return <p className="pt-24 container mx-auto px-4">Not found.</p>;

  return (
    <div className="pt-24 container mx-auto px-4 text-white">
      <div className="bg-black shadow rounded p-6 space-y-4">
        <h2 className="text-3xl font-bold">{record.title}</h2>
        <p className="text-gray-300">by {record.artist}</p>
        <div className="flex flex-col md:flex-row gap-6">
          <img src={record.frontCover} alt="front cover" className="w-full md:w-1/3 rounded" />
          <img src={record.backCover} alt="back cover" className="w-full md:w-1/3 rounded" />
          <img src={record.sleeveArt} alt="sleeve art" className="w-full md:w-1/3 rounded" />
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Catalog:</strong> {record.catalogNumber}</li>
          <li><strong>Imprint:</strong> {record.imprint}</li>
          <li><strong>Release Date:</strong> {record.releaseDate}</li>
          <li><strong>Genre:</strong> {record.genre}</li>
          <li><strong>In Stock:</strong> {record.inStock ? 'Yes' : 'No'}</li>
        </ul>
        <p>{record.description}</p>
        <Link to="/" className="text-blue-400 hover:underline">← Back to list</Link>
      </div>
    </div>
  );
}
