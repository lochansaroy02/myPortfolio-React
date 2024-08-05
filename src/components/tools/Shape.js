import React from 'react';

const Shape = ({ width = 152, height = 41, fillColor = 'var(--mio-theme-color-secondary)' }) => {
  return (
    <div>
      <svg
        aria-hidden="true"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shape-svg"
      >
        <path
          d="M39.073 20.5c3.23 6.02.79 11.471-5.44 13.133-1.662 6.23-7.112 8.67-13.133 5.44-6.021 3.23-11.472.79-13.133-5.44-6.23-1.662-8.67-7.112-5.44-13.133-3.23-6.021-.79-11.472 5.44-13.133 1.661-6.23 7.112-8.67 13.133-5.44 6.02-3.23 11.471-.79 13.133 5.44 6.23 1.661 8.67 7.112 5.44 13.133M61.524 35.476c-6.699-6.7-6.699-17.56 0-24.26l5.692-5.692c6.7-6.699 17.56-6.699 24.26 0 6.699 6.7 6.699 17.56 0 24.26l-5.692 5.692c-6.7 6.699-17.56 6.699-24.26 0zM128.707 2.384c1.455-2.512 5.131-2.512 6.586 0 .97 1.672 3.071 2.345 4.853 1.553 2.677-1.19 5.651.939 5.329 3.813-.214 1.915 1.085 3.676 3 4.067 2.874.587 4.011 4.03 2.035 6.17a3.693 3.693 0 000 5.026c1.976 2.14.839 5.583-2.035 6.17-1.915.391-3.214 2.152-3 4.067.322 2.874-2.652 5.003-5.329 3.813-1.782-.792-3.883-.12-4.853 1.553-1.455 2.512-5.131 2.512-6.586 0-.97-1.672-3.071-2.345-4.853-1.553-2.677 1.19-5.651-.939-5.329-3.813.214-1.915-1.085-3.676-3-4.067-2.874-.587-4.011-4.03-2.035-6.17a3.693 3.693 0 000-5.026c-1.976-2.14-.839-5.583 2.035-6.17 1.915-.391 3.214-2.152 3-4.067-.322-2.874 2.652-5.003 5.329-3.813 1.782.792 3.883.12 4.853-1.553z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default Shape;