import { useState } from "react";

export const useLoginForm = (onLoginSuccess) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.username)) {
      newErrors.username =
        "Username must be in email format (example@domain.com)";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem(
          "gymapp_user",
          JSON.stringify({
            username: formData.username,
            password: formData.password,
            loginTime: new Date().toISOString(),
          }),
        );
        console.log("Login successful:", formData.username);
        setIsLoading(false);
        onLoginSuccess(formData.username);
      }, 500);
    }
  };

  return {
    formData,
    showPassword,
    setShowPassword,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
