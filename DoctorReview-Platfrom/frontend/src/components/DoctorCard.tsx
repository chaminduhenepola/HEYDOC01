'use client';

import { useState } from "react";
import { FaStar } from "react-icons/fa"; // optional, but makes it prettier (install with: npm i react-icons)

export function DoctorCard({
  name,
  specialization,
  description,
}: {
  name: string;
  specialization: string;
  description: string;
}) {
  const [showForm, setShowForm] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Review for ${name}:`);
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    setComment('');
    setRating(0);
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-white rounded-2xl w-full max-w-sm border border-gray-200 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]">

      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mt-1">{specialization}</p>
      <p className="text-gray-700 mt-4">{description}</p>

      <button
        type="button"
        onClick={() => setShowForm((prev) => !prev)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {showForm ? "Cancel" : "Submit a Review"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 animate-fade-in">
          <label htmlFor={`review-${name}`} className="text-sm font-medium text-gray-700">
            Leave a Review:
          </label>

          <textarea
            id={`review-${name}`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-24 p-2 border border-blue-300 ring-2 ring-blue-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder={`Write your feedback for ${name}...`}
          />

          {/* ⭐ Star Rating */}
          <div className="flex gap-1 items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="text-2xl focus:outline-none"
              >
                <FaStar
                  className={
                    (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
                  }
                />
              </button>
            ))}
            <span className="text-sm ml-2 text-gray-600">{rating}/5</span>
          </div>

          <button
            type="submit"
            className="self-start px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
