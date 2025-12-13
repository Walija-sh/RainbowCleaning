import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const FORMSPREE_URL = "https://formspree.io/f/manrvkjl";

const HeroForm = () => {
  const servicesList = [
    "Carpet Cleaning",
    "Upholstery Cleaning",
    "Carpet Dyeing",
    "Spot Dyeing",
    "Oriental Rugs",
    "Deodorizing",
    "Motor Homes",
  ];

  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dropdownRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (service, e) => {
    e.stopPropagation();
    setSelectedServices(selectedServices.filter((s) => s !== service));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Required";
    if (!contact.trim()) newErrors.contact = "Required";
    if (selectedServices.length === 0) newErrors.service = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          contact,
          services: selectedServices.join(", "),
        }),
      });

      if (!res.ok) throw new Error();

      toast.success("Form submitted successfully");

      setFullName("");
      setContact("");
      setSelectedServices([]);
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-800 border border-white max-w-[650px] w-full py-[40px] px-[40px] shadow-[0px_4px_4px_0px_#57647e36] rounded-t-2xl"
    >
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="text-[30px] font-bold">
            Get Your Free Quote in Minutes
          </h2>
        </div>

        {/* Full Name */}
        <div>
          <label className="block mb-2 text-[14px] font-medium">
            Full Name *
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-[15px] py-2 border rounded-md text-[14px] focus:outline-none"
          />
          {errors.fullName && (
            <p className="text-[#cb3857] text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Contact */}
        <div>
          <label className="block mb-2 text-[14px] font-medium">
            Phone (or email) *
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Please enter your phone or email"
            className="w-full px-[15px] py-2 border rounded-md text-[14px] focus:outline-none"
          />
          {errors.contact && (
            <p className="text-[#cb3857] text-sm mt-1">{errors.contact}</p>
          )}
        </div>

        {/* Services dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label className="block mb-2 text-[14px] font-medium">
            Which service are you most interested in? *
          </label>

          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full min-h-[45px] px-[15px] py-2 border rounded-md bg-white cursor-pointer flex justify-between items-center"
          >
            <div className="flex gap-2 flex-wrap">
              {selectedServices.length === 0 ? (
                <span className="text-[#999]">
                  Carpet Cleaning, Upholstery Cleaning, etc.
                </span>
              ) : (
                selectedServices.map((service) => (
                  <span
                    key={service}
                    className="bg-[#41B883] text-white text-[12px] px-3 py-1 rounded-md flex items-center gap-2"
                  >
                    {service}
                    <button
                      type="button"
                      onClick={(e) => removeService(service, e)}
                      className="text-[#266D4D] text-lg font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))
              )}
            </div>
            <span className="text-[#999]">▾</span>
          </div>

          {dropdownOpen && (
            <div className="absolute z-10 mt-2 w-full border rounded-md bg-white h-[200px] overflow-y-auto">
              {servicesList.map((service) => (
                <div
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 cursor-pointer hover:bg-[#D1E8FD] ${
                    selectedServices.includes(service)
                      ? "font-bold bg-[#f3f3f3]"
                      : ""
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
          )}

          {errors.service && (
            <p className="text-[#cb3857] text-sm mt-1">{errors.service}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2bbd18] text-white py-[9px] cursor-pointer rounded-md hover:bg-[#24a013] disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Get Your Free Estimate"}
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
