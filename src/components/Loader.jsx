import React from 'react'
const Loader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="50"
          height="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        >
          <circle cx="50" cy="50" r="40" strokeOpacity="0.2" />
          <path
            d="M50 10 A40 40 0 0 1 90 50"
            strokeLinecap="round"
            strokeOpacity="0.9"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    );
  };
  
  export default Loader;
  