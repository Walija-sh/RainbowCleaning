import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";


const Dialog = ({ open, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative z-10 mt-20 max-w-[500px] w-full mx-4 bg-white rounded-lg overflow-auto max-h-[90vh]">
        
        {/* close icon */}
        <button
          onClick={onClose}
          className="absolute top-3 cursor-pointer right-3 text-gray-500 hover:text-black"
          aria-label="Close dialog"
        >
          <RxCross2 size={22} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Dialog;
