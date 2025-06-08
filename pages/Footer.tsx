"use client"
import React, { useState } from "react";
import { Info } from "lucide-react";
import { useForm } from "react-hook-form";
import DiscordSender, { DiscordMessage } from "@/components/DiscordSender";
import { useForm as useFormContext } from "@/context/FormContext";
import ContactForm from "@/components/ContactForm";

const services = [
  "UX/UI Design",
  "Product Design",
  "3D Design",
  "Branding",
  "Webflow Development",
  "Video Editing",
  "Motion Ads",
] as const;

const budgetRanges = ["$10k-$20k", "$20k-$50k", "$50k-$100k", "$100k+"] as const;

type Service = typeof services[number];
type Budget = typeof budgetRanges[number];

interface ContactFormData {
  name: string;
  email: string;
  projectLink?: string;
  details: string;
  selectedServices: Service[];
  budget?: Budget;
}

interface BookCallFormData {
  name: string;
  email: string;
  preferredDateTime: string;
  message: string;
}

type FormType = "contact" | "book_call";

const Footer = () => {
  const { openForm } = useFormContext();
  const [activeForm, setActiveForm] = useState<FormType>("contact");
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<Budget | undefined>();

  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: contactErrors },
    reset: resetContact
  } = useForm<ContactFormData>();

  const {
    register: registerBookCall,
    handleSubmit: handleSubmitBookCall,
    formState: { errors: bookCallErrors },
    reset: resetBookCall
  } = useForm<BookCallFormData>();

  const handleServiceToggle = (service: Service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const onContactSubmit = (data: ContactFormData) => {
    const formData = {
      ...data,
      selectedServices,
      budget: selectedBudget,
    };

    const message: DiscordMessage = {
      embeds: [{
        title: "🎯 New Contact Form Submission",
        color: 0x0099ff,
        fields: [
          {
            name: "👤 Name",
            value: formData.name,
            inline: true
          },
          {
            name: "📧 Email",
            value: formData.email,
            inline: true
          },
          {
            name: "💰 Budget",
            value: formData.budget || "Not specified",
            inline: true
          },
          {
            name: "🔗 Project Link",
            value: formData.projectLink || "Not provided",
            inline: true
          },
          {
            name: "🛠️ Selected Services",
            value: formData.selectedServices.length > 0
              ? formData.selectedServices.join(", ")
              : "None selected",
          },
          {
            name: "📝 Project Details",
            value: formData.details || "No details provided",
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Brezix Contact Form"
        }
      }]
    };

    return message;
  };

  const onBookCallSubmit = (data: BookCallFormData) => {
    const message: DiscordMessage = {
      embeds: [{
        title: "📞 New Call Booking Request",
        color: 0x00ff00,
        fields: [
          {
            name: "👤 Name",
            value: data.name,
            inline: true
          },
          {
            name: "📧 Email",
            value: data.email,
            inline: true
          },
          {
            name: "🕒 Preferred Date & Time",
            value: data.preferredDateTime,
            inline: true
          },
          {
            name: "💬 Message",
            value: data.message || "No message provided"
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Brezix Call Booking"
        }
      }]
    };

    return message;
  };

  return (
    <footer className="w-full bg-[rgb(20,19,30)]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to start your project?</h2>
            <p className="text-gray-400 max-w-md">Let's discuss your ideas and turn them into reality. Our team is ready to help you create something amazing.</p>
            <button
              onClick={openForm}
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Left Column */}
          <div className="w-full md:w-[40%] text-white flex flex-col items-center bg-[rgb(29,28,39)] rounded-3xl p-6 md:p-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight text-center md:text-left">
              LET'S LAUNCH
              <br />
              TOGETHER!
            </h2>
            <div className="w-full max-w-sm">
              <img
                src="/placeholder-image.png"
                alt="Project Visual"
                className="w-full h-auto opacity-50"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[40%]">
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
                  onSubmit={handleSubmitContact((data) => {
                    const message = onContactSubmit(data);
                    return (
                      <DiscordSender
                        message={message}
                        onSuccess={() => {
                          resetContact();
                          setSelectedServices([]);
                          setSelectedBudget(undefined);
                        }}
                      >
                        <button
                          type="submit"
                          className="w-full bg-white text-black py-3 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                        >
                          Submit Contact Form
                        </button>
                      </DiscordSender>
                    );
                  })}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Choose service (optional)
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-full text-xs md:text-sm transition-colors ${selectedServices.includes(service)
                            ? "bg-white text-black"
                            : "bg-[#222226] text-white hover:bg-[#2a2a2e]"
                            }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Your budget (optional)
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedBudget(range)}
                          className={`px-4 py-2 rounded-full text-xs md:text-sm transition-colors ${selectedBudget === range
                            ? "bg-white text-black"
                            : "bg-[#222226] text-white hover:bg-[#2a2a2e]"
                            }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Your Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          {...registerContact("name", { required: "Name is required" })}
                          type="text"
                          placeholder="Your Name"
                          className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                        />
                        {contactErrors.name && (
                          <p className="mt-1 text-sm text-red-500">{contactErrors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <input
                          {...registerContact("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          type="email"
                          placeholder="Work Email"
                          className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                        />
                        {contactErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{contactErrors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        {...registerContact("projectLink")}
                        type="text"
                        placeholder="Project Link (optional)"
                        className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 pr-10 md:pr-12 text-sm md:text-base"
                      />
                      <Info
                        className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white">
                      Project Details
                    </h4>
                    <div>
                      <textarea
                        {...registerContact("details", { required: "Project details are required" })}
                        placeholder="Write any important info"
                        className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                      />
                      {contactErrors.details && (
                        <p className="mt-1 text-sm text-red-500">{contactErrors.details.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-400">
                    <img
                      src="https://i.pravatar.cc/32"
                      alt=""
                      className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                    />
                    <p>
                      Receive up to 20% off your project when we begin our
                      journey together by submitting your data through this form
                      🤝
                    </p>
                  </div>
                </form>
              )}

              {activeForm === "book_call" && (
                <form
                  onSubmit={handleSubmitBookCall((data) => {
                    const message = onBookCallSubmit(data);
                    return (
                      <DiscordSender
                        message={message}
                        onSuccess={() => {
                          resetBookCall();
                        }}
                      >
                        <button
                          type="submit"
                          className="w-full bg-white text-black py-3 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                        >
                          Book a Call
                        </button>
                      </DiscordSender>
                    );
                  })}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Your Info
                    </h4>
                    <div>
                      <input
                        {...registerBookCall("name", { required: "Name is required" })}
                        type="text"
                        placeholder="Your Name"
                        className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                      />
                      {bookCallErrors.name && (
                        <p className="mt-1 text-sm text-red-500">{bookCallErrors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...registerBookCall("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        type="email"
                        placeholder="Your Email"
                        className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                      />
                      {bookCallErrors.email && (
                        <p className="mt-1 text-sm text-red-500">{bookCallErrors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white mb-3 md:mb-4">
                      Preferred Date & Time
                    </h4>
                    <div>
                      <input
                        {...registerBookCall("preferredDateTime", { required: "Date and time are required" })}
                        type="text"
                        placeholder="e.g., Tomorrow at 2 PM EST"
                        className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                      />
                      {bookCallErrors.preferredDateTime && (
                        <p className="mt-1 text-sm text-red-500">{bookCallErrors.preferredDateTime.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-base md:text-lg text-white">
                      Message (Optional)
                    </h4>
                    <textarea
                      {...registerBookCall("message")}
                      placeholder="Anything specific you'd like to discuss?"
                      className="bg-[#222226] text-white px-4 py-3 rounded-xl w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-white/20 text-sm md:text-base"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info/Links Section */}
      <div className="max-w-screen-xl mx-auto bg-[rgb(27,26,38)] rounded-3xl py-6 md:py-8 px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between my-2 gap-6 md:gap-8 mx-3 md:mx-auto">
        <div className="flex flex-col text-gray-400 text-sm">
          <span>Local time</span>
          <span className="text-white text-base md:text-lg font-semibold">
            9:05 AM GMT+1
          </span>
        </div>
        <div className="flex flex-col text-gray-400 text-sm">
          <span>Say Hi</span>
          <span className="text-white text-base md:text-lg font-semibold">
            info@brezix.com
          </span>
        </div>
        <div className="flex flex-col text-gray-400 text-sm">
          <span>Check our work</span>
          <span className="text-white text-base md:text-lg font-semibold">
            Linktree
          </span>
        </div>
        <div className="flex flex-col text-gray-400 text-sm">
          <span>Follow us on</span>
          <span className="text-white text-base md:text-lg font-semibold">
            LinkedIn
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto bg-gradient-to-r from-[#5A38F2] to-[#844DFA] rounded-full py-2 md:py-4 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between my-8 gap-2 mx-3 md:mx-auto">
        <div className="text-white text-2xl font-bold uppercase tracking-widest">
          BREZIX
        </div>

        <div className="hidden md:flex flex-col md:flex-row items-center gap-3 md:gap-4">
          <button className="px-6 py-2 rounded-full text-white border border-white/20 text-sm hover:bg-white/10 transition-colors">
            Services +
          </button>
          <button className="px-6 py-2 rounded-full text-white border border-white/20 text-sm hover:bg-white/10 transition-colors">
            Portfolio +
          </button>
          <button className="px-6 py-2 rounded-full text-white border border-white/20 text-sm hover:bg-white/10 transition-colors">
            Onboarding +
          </button>
          <button className="px-6 py-2 rounded-full text-white border border-white/20 text-sm hover:bg-white/10 transition-colors">
            Offer +
          </button>
        </div>

        <div className="text-white text-sm">© 2025</div>
      </div>

      <ContactForm />
    </footer>
  );
};

export default Footer;
