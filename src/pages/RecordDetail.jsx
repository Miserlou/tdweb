import React from 'react';
import { useParams, Link } from 'react-router-dom';
import records from '../data/records';

export default function RecordDetail() {
  const { catalogNumber } = useParams();
  const record = records.find(r => r.catalogNumber === catalogNumber);
  const [selectedImage, setSelectedImage] = React.useState(record?.frontCover);

  if (!record) return <p className="pt-24 container mx-auto px-4">Not found.</p>;

  const images = [record.frontCover, record.backCover, record.sleeveArt];

  return (
    <div className="w-screen pt-24 mx-auto px-4 text-white">
      <div class="container mx-auto">
        <div className="mx-auto flex flex-col md:flex-row gap-8">
          

          <div className="md:w-1/2 m-2">
            <div className="bg-gray-950 shadow rounded p-6 space-y-4">
              <h2 className="text-3xl font-bold"><strong>{record.title}</strong> <span className="text-neutral-500 text-sm">{record.catalogNumber}</span></h2>
              <p className="text-2xl text-gray-200"><strong>{record.artist}</strong></p>

              <p className="text-gray-300">{record.description}</p>

              {record.sideA && <p className="text-gray-400">Side A - <i>{record.sideA}</i></p>}
              {record.sideB && <p className="text-gray-400">Side B - <i>{record.sideB}</i></p>}

              <Link to={`${import.meta.env.BASE_URL}`} className="text-gray-50 font-semibold hover:underline">← Back to list</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:w-1/2 m-2">
            <div className="w-full bg-black p-4 rounded">
              <img
                src={`${import.meta.env.BASE_URL}${selectedImage}`}
                alt="Selected"
                className="w-full rounded object-contain"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={`${import.meta.env.BASE_URL}${img}`}
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-16 object-cover rounded cursor-pointer hover:opacity-75"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}