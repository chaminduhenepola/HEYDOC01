'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

export function DoctorCard({
  name,
  specialization,
  description,
}: {
  name: string;
  specialization: string;
  description: string;
}) {
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleReviewClick = () => {
    router.push('/submit-review');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl w-full max-w-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mt-1">{specialization}</p>
      <p className="text-gray-700 mt-4">{description}</p>
      <br />

      {/* Review Button */}
      <button
        type="button"
        onClick={handleReviewClick}
        className="self-start px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Submit a Review
      </button>
    </div>
  );
}
