import React, { useState } from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, reviewCount, interactive = false, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  const handleStarClick = (starIndex) => {
    if (!interactive) return;
    
    const newRating = starIndex + 1;
    setCurrentRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleStarHover = (starIndex) => {
    if (!interactive) return;
    setHoverRating(starIndex + 1);
  };

  const handleStarLeave = () => {
    if (!interactive) return;
    setHoverRating(0);
  };

  const displayRating = interactive ? (hoverRating || currentRating) : rating;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 transition-all duration-200 ${
              interactive ? 'cursor-pointer hover:scale-110' : ''
            } ${
              i < Math.floor(displayRating)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 dark:text-gray-600'
            }`}
            onClick={() => handleStarClick(i)}
            onMouseEnter={() => handleStarHover(i)}
            onMouseLeave={handleStarLeave}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {interactive ? (
          `${displayRating.toFixed(1)} stars`
        ) : (
          `${rating} (${reviewCount} reviews)`
        )}
      </span>
    </div>
  );
};

export default StarRating;