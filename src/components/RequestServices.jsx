import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestServices = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
    Date: "", // New field for the date
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const goBack = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzxseUyZNgyuP7o1ZuHCwp0qBQ8FkhY7Tp688IPvGUBr5jCYUjzH0gMkEjsXjjeAqGk9w/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send formData including the Date
        }
      );

      alert("Request sent.");
      navigate("/");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Exit Button */}
      <button
        onClick={goBack}
        className="absolute top-4 right-4 bg-red-500 text-white font-medium px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h3 className="text-4xl font-semibold pt-10 mx-6">
        Fill Out this form and we'll be in touch with you soon!
      </h3>
      <div className="w-full border-gray-100 pt-20">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-1/2 min-w-96 bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div>
            <label
              htmlFor="Name"
              className="block font-medium text-xl text-gray-700 mb-1"
            >
              Enter your name:
            </label>
            <input
              type="text"
              name="Name"
              id="Name"
              value={formData.Name}
              onChange={handleChange}  text-xl
              className="w-full px-4 py-2 border text-xl border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="Email"
              className="block text-xl font-medium text-gray-700 mb-1"
            >
              Enter your email:
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full px-4 py-2 border  text-xl border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="Phone"
              className="block text-2xl font-medium text-gray-700 mb-1"
            >
              Enter your phone:
            </label>
            <input
              type="text"
              name="Phone"
              id="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-2xl border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label
              htmlFor="Subject"
              className="block text-xl font-medium text-gray-700 mb-1"
            >
              Enter your subject:
            </label>
            <input
              type="text"
              name="Subject"
              id="Subject"
              value={formData.Subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-xl border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Subject"
            />
          </div>

          <div>
            <label
              htmlFor="Message"
              className="block text-xl font-medium text-gray-700 mb-1"
            >
              Enter your message:
            </label>
            <textarea
              name="Message"
              id="Message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-xl border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your message..."
              rows="4"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="Date"
              className="block text-xl font-medium text-gray-700 mb-1"
            >
              Select a date:
            </label>
            <input
              type="date"
              name="Date"
              id="Date"
              value={formData.Date || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-xl border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-2"
            >
              Submit
            </button>
            <button
              onClick={goBack}
              className="w-full py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestServices;
