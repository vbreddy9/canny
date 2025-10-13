import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About <span style={{ color: '#00b4e6' }}>Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
        <strong> Canny Life Spaces</strong>, a premier real estate developer in Hyderabad since 2017, has consistently delivered excellence in residential projects. Our robust track record stems from a blend of financial acumen, engineering prowess, and architectural finesse. At Canny Life Spaces, we are driven by the belief that our paramount objective is to curate homes that contribute to a thriving community. We consider the quality of life as our most precious asset, and our commitment is to ensure its accessibility to all. Our dedication extends to crafting vibrant, sustainable communities that enhance the overall well-being of our residents. <br></br><br></br>
        Our team at <strong> Canny Life Spaces</strong> is entrusted with upholding the highest standards in residential development and client service. We take pride in our continuous efforts to shape top-notch communities. As we look ahead, we are excited about the prospect of developing communities in strategic growth areas across Hyderabad, promising an exhilarating future for all.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
