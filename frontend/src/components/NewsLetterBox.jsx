import React from "react";

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        // Handle form submission logic here
        e.preventDefault();
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 ">
        Subscribe Now & Get 20% Off!
      </p>
      <p className="text-gray-400 mt-3 ">
        Join our newsletter to stay updated on the latest products and offers.
      </p>

      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" name="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" required />
        <button type="submit" className="bg-black text-white py-4 px-10 text-xs">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
