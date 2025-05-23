'use client'; 

import { useState } from 'react';

export default function SubmitReviewPage() {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted review:', comment);
    setComment(''); // clear after submit
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Submit a Review</h1>
      <p>Here you can write and submit your review.</p>

      {/* Review Section */}
      <form onSubmit={handleSubmit} className="mt-6 w-full flex flex-col gap-3">
        <label htmlFor="review" className="text-sm text-gray-600 font-medium">
          Leave a Review:
        </label>
        <textarea
          id="review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-24 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your feedback..."
        ></textarea>
        <button
          type="submit"
          className="self-start px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}