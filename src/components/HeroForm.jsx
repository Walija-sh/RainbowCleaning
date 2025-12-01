import React, { useState, useRef, useEffect } from "react";

const HeroForm = () => {
  const servicesList = [
    "Carpet Cleaning",
    "Carpet Dyeing",
    "Spot Dyeing",
    "Deodorizing",
    "Duct Cleaning",
    "Upholstery Cleaning",
  ];

  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Validate on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!contact.trim()) newErrors.contact = "Phone (or email) is required";
    if (!selectedService) newErrors.service = "Please select a service";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Submitted Successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-800 border border-white rounded-sm max-w-[650px] w-full py-[40px] px-[40px] shadow-[0px_4px_4px_0px_#57647e36] rounded-t-2xl"
    >
      <div className="flex flex-col space-y-4">

        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="text-[30px] roboto font-bold">Get Your Free Quote in Seconds</h2>
        </div>

        {/* Full Name */}
        <div className="w-full">
          <label className="block mb-2 text-[14px] text-[#2c3345FF] font-medium roboto">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-[15px] py-2 border border-[#ACACACFF] rounded-md text-[14px] roboto focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-[#cb3857] roboto text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Phone/Email */}
        <div className="w-full">
          <label className="block mb-2 text-[14px] text-[#2c3345FF] font-medium roboto">
            Phone (or email) *
          </label>
          <input
            type="text"
            placeholder="Please enter your phone or email (we'll never spam you)"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-[15px] py-2 border border-[#ACACACFF] rounded-md text-[14px] roboto focus:outline-none"
          />
          {errors.contact && (
            <p className="text-[#cb3857] roboto text-sm mt-1">{errors.contact}</p>
          )}
        </div>

        {/* Custom Dropdown */}
        <div className="w-full relative" ref={dropdownRef}>
          <label className="block mb-2 text-[14px] text-[#2c3345FF] font-medium roboto">
            Which service are you most interested in? *
          </label>

          {/* Input / Pill */}
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`w-full min-h-[45px] px-[15px] py-2 border border-[#ACACACFF] rounded-md text-[14px] roboto bg-white cursor-pointer flex items-center justify-between`}
          >
            <div className="flex gap-2 items-center flex-wrap">
              {!selectedService ? (
                <span className="text-[#999]">
                  Carpet Cleaning, Duct Cleaning, Water Damage, etc.
                </span>
              ) : (
                <span className="bg-[#41B883] text-white text-[12px] px-3 rounded-md flex items-center gap-[7px]">
                  {selectedService}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(null);
                    }}
                    className="text-[#266D4D] hover:text-white text-xl font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            <span className="text-[#999]">▾</span>
          </div>

          {/* Dropdown List */}
          {dropdownOpen && (
            <div className="mt-2 border border-[#ACACACFF] rounded-md bg-[#F3F3F3] h-[200px] overflow-y-auto absolute top-full left-0 right-0">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedService(service);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer text-[#737179] hover:bg-[#D1E8FD] hover:text-check"
                >
                  {service}
                </div>
              ))}
            </div>
          )}

          {errors.service && (
            <p className="text-[#cb3857] roboto text-sm mt-1">{errors.service}</p>
          )}
        </div>

        {/* Submit */}
        <div className="w-full text-center mt-6">
          <button
            type="submit"
            className="w-full bg-[#2bbd18] text-white py-[9px] px-[50px] text-[15px] roboto rounded-md transition-colors duration-200"
          >
            Fast, Affordable Cleaning — Get Your Free Estimate
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeroForm;
