// src/components/FooterComponent.js
import React from 'react';

function FooterComponent() {
  return (
    <footer className="bg-secondary p-4">
      <div className="container mx-auto text-center text-light">
        &copy; {new Date().getFullYear()} My Container App
      </div>
    </footer>
  );
}

export default FooterComponent;
