import React from "react";

const Categories = () => {
  return (
    <div className="flex justify-between py-16 px-24 mx-12">
      <div>
      <h2 className="text-3xl font-bold mb-4 text-[70px]">
        Best <span className="text-red-500 text-[70px]">Delivered</span> 
      </h2>
      <h2 className="text-3xl font-bold mt-12 text-[70px]">
        Categories
      </h2>
      </div>
      <p className="mb-8 text-gray-400 w-85">
        Here Are Some Of Our Best Distributed<br></br> Categories. If You Want You Can
        Order From Here.
      </p>
      
    </div>
  );
};

export default Categories;
