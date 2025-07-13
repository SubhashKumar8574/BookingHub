import React from 'react';
import { Calendar, MapPin, Star, Users, IndianRupee } from 'lucide-react';
import StarRating from './StarRating';

const BookingCard = ({ service, onBook }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-400/70 dark:hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {service.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {service.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Service Name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 line-clamp-2">
          {service.name}
        </h3>

        {/* Provider */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
          by {service.provider}
        </p>

        {/* Details Grid */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{service.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span>Up to {service.maxCapacity} people</span>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-6">
          <StarRating rating={service.rating} reviewCount={service.reviewCount} />
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center">
            <IndianRupee className="h-6 w-6 text-gray-900 dark:text-white mr-1" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {service.price}
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">
              /person
            </span>
          </div>
          <button
            onClick={() => onBook(service.id)}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-300/60 dark:hover:shadow-purple-500/50 active:scale-95 whitespace-nowrap border border-purple-500/20 backdrop-blur-sm"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;