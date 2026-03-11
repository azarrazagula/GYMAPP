import React from "react";

const FormField = ({
  label,
  icon: Icon,
  error,
  showToggle,
  isPasswordVisible,
  onToggle,
  ...inputProps
}) => (
  <div className="form-field">
    <label className="text-white font-semibold mb-2 flex items-center space-x-2">
      <Icon size={18} className="text-accent" />
      <span>{label}</span>
    </label>
    <div className="relative">
      <input
        {...inputProps}
        className={`w-full px-4 py-3 rounded-lg bg-gray-700/50 border-2 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none input-focus ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-600 focus:border-accent focus:shadow-lg focus:shadow-accent/20"
        } ${showToggle ? "pr-12" : ""}`}
      />
      {showToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-accent transition-all duration-300 hover:scale-110"
          aria-label="Toggle password visibility"
        >
          {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
        </button>
      )}
    </div>
    {error && <p className="text-red-400 text-sm mt-1 error-shake">{error}</p>}
  </div>
);

export default FormField;
