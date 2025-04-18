import React from 'react';

const categories = ['All', 'Nature', 'Ambience', 'Cozy', 'Asmr', 'City', 'Objects', 'Animal'];

const CategoryTabs = ({ setSelectedCategory }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="btn-group mb-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="btn btn-outline-secondary"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
