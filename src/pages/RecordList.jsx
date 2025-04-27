import React from 'react';
import Card from '../components/Card';
import records from '../data/records';

export default function RecordList() {
  return (
<div className="w-screen pt-24 overflow-hidden">
<div className="pt-24 bg-gray-100 w-3/4 mx-auto min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {records.map((r) => (
            <Card key={r.catalogNumber} record={r} />
          ))}
        </div>
      </div>
    </div>
</div>
  );
}
