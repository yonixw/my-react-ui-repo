import React from 'react';

export const ResponsiveGrid = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="bg-white rounded-lg shadow p-6 
                      w-full 
                      md:w-64 
                      lg:w-80">
          <h2 className="text-xl font-bold mb-4">Column 1</h2>
          <p className="text-gray-600">
            Width breakpoints:
            Mobile: 100%
            Tablet: 256px
            Desktop: 320px
          </p>
        </div>

        {/* Column 2 */}
        <div className="bg-white rounded-lg shadow p-6 
                      w-full 
                      md:w-64 
                      lg:w-80">
          <h2 className="text-xl font-bold mb-4">Column 2</h2>
          <p className="text-gray-600">
            Each column maintains fixed widths at specific breakpoints rather than 
            fluid proportional widths.
          </p>
        </div>

        {/* Column 3 */}
        <div className="bg-white rounded-lg shadow p-6 
                      w-full 
                      md:w-64 
                      lg:w-80">
          <h2 className="text-xl font-bold mb-4">Column 3</h2>
          <p className="text-gray-600">
            Columns stack vertically on mobile and arrange horizontally 
            with fixed widths on larger screens.
          </p>
        </div>
      </div>

      {/* Screen Size Indicators */}
      <div className="mt-8 space-y-4">
        {/* Mobile Indicator */}
        <div className="block md:hidden p-4 bg-red-100 rounded-lg">
          <p className="font-mono text-red-800">
            Mobile View {"(< 768px)"}:
            <br />
            Single column, full width
          </p>
        </div>

        {/* Tablet Indicator */}
        <div className="hidden md:block lg:hidden p-4 bg-yellow-100 rounded-lg">
          <p className="font-mono text-yellow-800">
            Tablet View (768px - 1023px):
            <br />
            3 columns × 256px fixed width
          </p>
        </div>

        {/* Desktop Indicator */}
        <div className="hidden lg:block p-4 bg-green-100 rounded-lg">
          <p className="font-mono text-green-800">
            Desktop View (1024px+):
            <br />
            3 columns × 320px fixed width
          </p>
        </div>
      </div>
    </div>
  );
};
