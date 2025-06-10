"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DiscordSender from "@/components/DiscordSender"; // adjust path if needed
import Avt from "./Avt";

// Create a global event bus for form control
type FormEventCallback = () => void;
const formEventCallbacks: FormEventCallback[] = [];

export const openContactForm = () => {
  formEventCallbacks.forEach(callback => callback());
};

const services = [
  "AI-Based Mobile Apps",
  "Web to App Conversion",
  "Portfolio Website",
  "UX/UI Design",
  "3D Design",
  "Landing Page",
  "Chatbot Website",
  "3D Product / Real Estate Showcase (VR-ready)",
  "GenAI Web Applications",
  "Custom Mobile App",
  "Custom Website / Web App",
  "Custom Desktop App",
];

const budgetRanges = ["₹1k-₹5k", "₹5k-₹10k", "₹10k-₹20k", "₹20k+"];

interface ContactFormData {
  name: string;
  email: string;
  projectLink?: string;
  details?: string;
  selectedServices: string[];
  budget?: string;
}

interface BookCallFormData {
  name: string;
  email: string;
  preferredDateTime: string;
  message?: string;
}

const Footer: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"contact" | "book_call">("contact");
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Register the callback when component mounts
  React.useEffect(() => {
    const callback = () => {
      setIsFormVisible(true);
      setActiveForm("contact");
      window.scrollTo({ top: document.getElementById('contact-us')?.offsetTop, behavior: 'smooth' });
    };
    formEventCallbacks.push(callback);
    return () => {
      const index = formEventCallbacks.indexOf(callback);
      if (index > -1) {
        formEventCallbacks.splice(index, 1);
      }
    };
  }, []);

  const {
    register: contactRegister,
    handleSubmit: handleContactSubmit,
    formState: { errors: contactErrors },
    watch: watchContact,
    setValue: setContactValue,
    reset: resetContact,
  } = useForm<ContactFormData>({
    defaultValues: { selectedServices: [], budget: "" },
    mode: "onChange"
  });

  const {
    register: bookCallRegister,
    handleSubmit: handleBookCallSubmit,
    formState: { errors: bookCallErrors },
    watch: watchBookCall,
    reset: resetBookCall,
  } = useForm<BookCallFormData>();

  const contactFormData = watchContact();
  const bookCallFormData = watchBookCall();

  const handleServiceToggle = (service: string) => {
    const current = watchContact("selectedServices") || [];
    if (current.includes(service)) {
      setContactValue(
        "selectedServices",
        current.filter((s) => s !== service)
      );
    } else {
      setContactValue("selectedServices", [...current, service]);
    }
  };

  const onContactSuccess = () => {
    resetContact();
  };

  const onBookCallSuccess = () => {
    resetBookCall();
  };

  const onContactSubmit = (data: ContactFormData) => {
    if (data.selectedServices.length === 0) {
      // Show error for services
      return;
    }
    // Rest of your submit logic
  };

  return (
    <footer id="contact-us" className="w-full bg-[rgb(20,19,30)]">
      <div className="w-full flex flex-col items-start justify-center py-8 md:py-12 lg:py-10">
        <hr className="w-[90%] md:w-[85%] lg:w-[82%] border-t border-gray-700 my-6 md:my-8 lg:my-10 mx-auto" />
        <h1 className="text-white px-4 md:px-16 lg:px-32 text-2xl sm:text-4xl  xl:text-5xl text-left md:max-w-[85%] lg:max-w-7xl mb-6 md:mb-8 lg:mb-12">
          Ready to start the first phase of your project?
        </h1>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-4">
          {/* Left Column */}
          <div className="w-full lg:w-[40%]  text-white flex flex-col items-center gap-4">
            <div className="w-full  bg-[rgb(29,28,39)] rounded-3xl p-6 md:p-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight text-center md:text-left">
                LET'S LAUNCH
                <br />
                TOGETHER!
              </h2>
            </div>

            <div className="hidden lg:flex w-full  bg-[rgb(29,28,39)] rounded-3xl p-6 md:p-12  items-center justify-center">
              <Avt />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-[rgb(29,28,39)] rounded-3xl p-6">
              <div className="flex mb-6 md:mb-8 border-b border-[#222226]">
                <button
                  className={`flex-1 text-center py-3 md:py-4 text-base md:text-lg font-semibold transition-colors ${activeForm === "contact"
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-gray-300 border-b-2 border-transparent"
                    }`}
                  onClick={() => setActiveForm("contact")}
                >
                  Contact form
                </button>
                <button
                  className={`flex-1 text-center py-3 md:py-4 text-base md:text-lg font-semibold transition-colors ${activeForm === "book_call"
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-gray-300 border-b-2 border-transparent"
                    }`}
                  onClick={() => setActiveForm("book_call")}
                >
                  Book a call
                </button>
              </div>

              {activeForm === "contact" && (
                <form
                  onSubmit={handleContactSubmit(onContactSubmit)}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Services */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Choose service <span className="text-red-500">*</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-full text-xs md:text-sm transition-colors ${contactFormData.selectedServices?.includes(service)
                            ? "bg-white text-black"
                            : "bg-[#222226] text-white hover:bg-[#2a2a2e]"
                            }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                    {contactFormData.selectedServices.length === 0 && (
                      <p className="text-red-500 text-sm">Please select at least one service</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Your budget
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setContactValue("budget", range)}
                          className={`px-4 py-2 rounded-full text-xs md:text-sm transition-colors ${contactFormData.budget === range
                            ? "bg-white text-black"
                            : "bg-[#222226] text-white hover:bg-[#2a2a2e]"
                            }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Data */}
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Your Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name *"
                          {...contactRegister("name", {
                            required: "Name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters"
                            }
                          })}
                          className={`w-full p-3 rounded-lg bg-[#222226] border ${contactErrors.name ? 'border-red-500' : 'border-transparent'
                            } focus:border-white outline-none text-white`}
                        />
                        {contactErrors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {contactErrors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          {...contactRegister("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className={`w-full p-3 rounded-lg bg-[#222226] border ${contactErrors.email ? 'border-red-500' : 'border-transparent'
                            } focus:border-white outline-none text-white`}
                        />
                        {contactErrors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {contactErrors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Link to your project or inspiration (optional)"
                      {...contactRegister("projectLink")}
                      className="w-full p-3 rounded-lg bg-[#222226] border border-transparent focus:border-white outline-none text-white"
                    />
                    <textarea
                      placeholder="Describe your project in a few words... (optional)"
                      {...contactRegister("details")}
                      className="w-full p-3 rounded-lg bg-[#222226] border border-transparent focus:border-white outline-none text-white"
                      rows={4}
                    />
                  </div>

                  <DiscordSender
                    formData={{
                      name: contactFormData.name,
                      email: contactFormData.email,
                      message: contactFormData.details,
                      projectDetails: contactFormData.details,
                      projectBudget: contactFormData.budget,
                      service: contactFormData.selectedServices.join(", "),
                      projectLink: contactFormData.projectLink,
                    }}
                    onSuccess={onContactSuccess}
                  >
                    <button
                      type="submit"
                      disabled={contactFormData.selectedServices.length === 0}
                      className={`w-full p-3 ${contactFormData.selectedServices.length === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-white hover:bg-gray-200'
                        } text-black rounded-lg font-semibold transition`}
                    >
                      Send
                    </button>
                  </DiscordSender>
                </form>
              )}

              {activeForm === "book_call" && (
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="space-y-3 md:space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...bookCallRegister("name", {
                        required: "Name is required",
                      })}
                      className="w-full p-3 rounded-lg bg-[#222226] border border-transparent focus:border-white outline-none text-white"
                    />
                    {bookCallErrors.name && (
                      <p className="text-red-500 text-sm">
                        {bookCallErrors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...bookCallRegister("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full p-3 rounded-lg bg-[#222226] border border-transparent focus:border-white outline-none text-white"
                    />
                    {bookCallErrors.email && (
                      <p className="text-red-500 text-sm">
                        {bookCallErrors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <input
                      type="datetime-local"
                      {...bookCallRegister("preferredDateTime", {
                        required: "Preferred date & time required",
                      })}
                      className="w-full p-3 rounded-lg bg-[#222226] border border-transparent focus:border-white outline-none text-white"
                    />
                    {bookCallErrors.preferredDateTime && (
                      <p className="text-red-500 text-sm">
                        {bookCallErrors.preferredDateTime.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <textarea
                      placeholder="Your message (optional)"
                      {...bookCallRegister("message")}
                      className="w-full p-3 rounded-lg bg-[#222226] border border-transparent focus:border-white outline-none text-white"
                      rows={4}
                    />
                  </div>

                  <DiscordSender
                    formData={{
                      name: bookCallFormData.name,
                      email: bookCallFormData.email,
                      message: bookCallFormData.message,
                      projectDetails: `Preferred Date & Time: ${bookCallFormData.preferredDateTime}`,
                    }}
                    onSuccess={onBookCallSuccess}
                  >
                    <button
                      type="submit"
                      className="w-full p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                      Send
                    </button>
                  </DiscordSender>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
