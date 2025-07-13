import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingCard from './components/BookingCard';
import AddCardForm from './components/AddCardForm';
import { sampleServices } from './data/services';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggle } = useTheme();
  const [services, setServices] = useState(sampleServices);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleBooking = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    alert(`Booking ${service?.name}! In a real app, this would open a booking form.`);
  };

  const handleAddCard = (newCard) => {
    setServices(prev => [...prev, newCard]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggle} 
        onAddCard={() => setIsFormOpen(true)} 
      />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
            Discover Amazing Experiences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Book unique activities and adventures with trusted local providers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service) => (
            <BookingCard
              key={service.id}
              service={service}
              onBook={handleBooking}
            />
          ))}
        </div>
        
        {/* Empty State */}
        {services.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No services available yet.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-200 dark:hover:shadow-purple-900/50"
            >
              Add Your First Service
            </button>
          </div>
        )}
      </div>

      {/* Add Card Form Modal */}
      <AddCardForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAddCard={handleAddCard}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;