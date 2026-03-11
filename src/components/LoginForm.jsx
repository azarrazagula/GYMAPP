import React from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useLoginForm } from "../hooks/useLoginForm";
import FormField from "./FormField";
import FeatureCard from "./FeatureCard";
import "./LoginForm.css";

const LoginForm = ({ onLoginSuccess }) => {
  const {
    formData,
    showPassword,
    setShowPassword,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useLoginForm(onLoginSuccess);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md login-container">
        {/* Header */}
        <div className="text-center mb-8 logo-section">
          <div className="text-5xl mb-4 inline-block emoji-bounce">💪</div>
          <div className="text-white font-bold text-3xl title-fadeIn">
            <span className="text-primary">FIT</span>HUB
          </div>
          <p className="text-gray-400 text-sm mt-2 subtitle-fadeIn">
            PREMIUM TRAINING
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl card-slideIn">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2 header-fadeIn">
            <LogIn size={28} className="text-accent icon-pulse" />
            <span>Login to FITHUB</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div style={{ animationDelay: "0.2s" }}>
              <FormField
                label="Email/Username"
                icon={Mail}
                type="email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="example@domain.com"
                autoComplete="username"
                error={errors.username}
              />
            </div>

            <div style={{ animationDelay: "0.3s" }}>
              <FormField
                label="Password"
                icon={Lock}
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min 6 characters"
                autoComplete="current-password"
                error={errors.password}
                showToggle
                isPasswordVisible={showPassword}
                onToggle={() => setShowPassword(!showPassword)}
              />
            </div>

            <div
              className="flex items-center space-x-2 form-field"
              style={{ animationDelay: "0.4s" }}
            >
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded accent-primary cursor-pointer checkbox-hover"
              />
              <label
                htmlFor="remember"
                className="text-gray-400 text-sm cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 button-submit"
              style={{ animationDelay: "0.5s" }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full spinner-loading"></div>
                  <span>Logging in...</span>
                </>
              ) : (
                <>
                  <LogIn size={20} className="button-icon" />
                  <span>Login</span>
                </>
              )}
            </button>
          </form>

          <div
            className="mt-6 space-y-3 text-center form-field"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a
                href="#signup"
                className="text-accent hover:text-accent/80 font-semibold transition-all duration-300 hover:underline link-hover"
              >
                Sign up
              </a>
            </p>
            <p>
              <a
                href="#forgot"
                className="text-gray-400 hover:text-accent text-sm transition-all duration-300 hover:underline link-hover"
              >
                Forgot password?
              </a>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <FeatureCard emoji="🔒" title="Secure Login" delay="0.4s" />
          <FeatureCard emoji="💾" title="Local Storage" delay="0.5s" />
          <FeatureCard emoji="⚡" title="Fast Access" delay="0.6s" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
