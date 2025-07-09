import React from "react";

export default function BreadCrumb({ name }) {
  return (
    <div className="bg-gradient-to-r from-red-50 to-white min-h-[300px] flex items-center justify-center">
      <h6 className="text-4xl lg:text-6xl font-bold text-red-600 text-center">
        {name}
      </h6>
    </div>
  );
}
