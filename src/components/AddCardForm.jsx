import React, { useState } from 'react';
import { X, Upload, MapPin, Clock, Users, IndianRupee, Star, Tag, AlertCircle } from 'lucide-react';
import StarRating from './StarRating';

const AddCardForm = ({ isOpen, onClose, onAddCard }) => {
  const [formData, setFormData] = useState({
    name: '',
    provider: '',
    price: '',
    image: '',
    location: '',
    duration: '',
    category: '',
    maxCapacity: '',
    rating: 4.5,
    description: ''
  });

  const [errors, setErrors] = useState({});

  const categories = [
    'Adventure', 'Wellness', 'Culinary', 'Photography', 
    'Water Sports', 'Cultural', 'Educational', 'Entertainment'
  ];

  const sampleImages = [
    'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRatingChange = (newRating) => {
    setFormData(prev => ({
      ...prev,
      rating: newRating
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Service name is required';
    if (!formData.provider.trim()) newErrors.provider = 'Provider name is required';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Valid price is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.maxCapacity || formData.maxCapacity <= 0) newErrors.maxCapacity = 'Valid capacity is required';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    
    // Additional validations
    if (formData.price > 50000) newErrors.price = 'Price cannot exceed ₹50,000';
    if (formData.maxCapacity > 100) newErrors.maxCapacity = 'Capacity cannot exceed 100 people';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const newCard = {
      id: Date.now().toString(),
      name: formData.name,
      provider: formData.provider,
      price: parseInt(formData.price),
      rating: formData.rating,
      reviewCount: Math.floor(Math.random() * 200) + 10, // Random review count
      image: formData.image,
      location: formData.location,
      duration: formData.duration,
      category: formData.category,
      maxCapacity: parseInt(formData.maxCapacity)
    };

    onAddCard(newCard);
    
    // Reset form
    setFormData({
      name: '',
      provider: '',
      price: '',
      image: '',
      location: '',
      duration: '',
      category: '',
      maxCapacity: '',
      rating: 4.5,
      description: ''
    });
    
    onClose();
  };

  const handleImageSelect = (imageUrl) => {
    setFormData(prev => ({
      ...prev,
      image: imageUrl
    }));
    if (errors.image) {
      setErrors(prev => ({
        ...prev,
        image: ''
      }));
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const ErrorMessage = ({ error }) => {
    if (!error) return null;
    return (
      <div className="flex items-center space-x-1 text-red-500 text-sm mt-1">
        <AlertCircle className="h-4 w-4" />
        <span>{error}</span>
      </div>
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add New Service Card
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Service Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Service Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="e.g., Mountain Hiking Adventure"
            />
            <ErrorMessage error={errors.name} />
          </div>

          {/* Provider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Provider Name *
            </label>
            <input
              type="text"
              name="provider"
              value={formData.provider}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.provider ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="e.g., Alpine Guides Co."
            />
            <ErrorMessage error={errors.provider} />
          </div>

          {/* Price and Capacity Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <IndianRupee className="inline h-4 w-4 mr-1" />
                Price per Person *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min="1"
                max="50000"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.price ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="2500"
              />
              <ErrorMessage error={errors.price} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Users className="inline h-4 w-4 mr-1" />
                Max Capacity *
              </label>
              <input
                type="number"
                name="maxCapacity"
                value={formData.maxCapacity}
                onChange={handleInputChange}
                min="1"
                max="100"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.maxCapacity ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="12"
              />
              <ErrorMessage error={errors.maxCapacity} />
            </div>
          </div>

          {/* Location and Duration Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.location ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="e.g., Rocky Mountains"
              />
              <ErrorMessage error={errors.location} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Duration *
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.duration ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="e.g., 6 hours"
              />
              <ErrorMessage error={errors.duration} />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Tag className="inline h-4 w-4 mr-1" />
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.category ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ErrorMessage error={errors.category} />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Star className="inline h-4 w-4 mr-1" />
              Service Rating
            </label>
            <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
              <StarRating rating={formData.rating} interactive={true} onRatingChange={handleRatingChange} />
            </div>
          </div>

          {/* Image Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Upload className="inline h-4 w-4 mr-1" />
              Service Image *
            </label>
            
            {/* Custom Image URL */}
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-3 ${
                errors.image ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder="Enter image URL or select from samples below"
            />
            
            {/* Sample Images */}
            <div className="grid grid-cols-3 gap-2">
              {sampleImages.map((imageUrl, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleImageSelect(imageUrl)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    formData.image === imageUrl 
                      ? 'border-purple-500 ring-2 ring-purple-200' 
                      : 'border-gray-200 dark:border-gray-600 hover:border-purple-300'
                  }`}
                >
                  <img
                    src={imageUrl}
                    alt={`Sample ${index + 1}`}
                    className="w-full h-16 object-cover"
                  />
                </button>
              ))}
            </div>
            <ErrorMessage error={errors.image} />
          </div>

          {/* Form Actions */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/50 active:scale-95"
            >
              Add Service Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardForm;