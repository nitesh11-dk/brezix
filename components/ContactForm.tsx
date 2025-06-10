"use client"
import React, { useEffect, useState } from 'react'
import { X, ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import DiscordSender from "@/components/DiscordSender";

// Create a global event system for form control
type FormEventCallback = () => void;
const formEventCallbacks: FormEventCallback[] = [];

export const openContactForm = () => {
    formEventCallbacks.forEach(callback => callback());
};

interface FormData {
    name: string;
    email: string;
    project: string;
}

const ContactForm = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Register callback for form opening
    useEffect(() => {
        const callback = () => setIsFormOpen(true);
        formEventCallbacks.push(callback);
        return () => {
            const index = formEventCallbacks.indexOf(callback);
            if (index > -1) {
                formEventCallbacks.splice(index, 1);
            }
        };
    }, []);

    const closeForm = () => setIsFormOpen(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid }
    } = useForm<FormData>({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            project: ""
        }
    });

    // Watch form fields to pass current data to DiscordSender
    const formData = watch();

    useEffect(() => {
        if (isFormOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = parseInt(document.body.style.top || '0') * -1;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
        }
    }, [isFormOpen]);

    // On success handler
    const onSuccess = () => {
        setIsSubmitting(false);
        reset();
        closeForm();
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Form submission logic will be handled by DiscordSender
    };

    return (
        <div className='z-[1000]'>
            {isFormOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={closeForm}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-full md:w-1/2 bg-white shadow-2xl transform transition-transform duration-700 ease-out z-50 ${isFormOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between p-8 border-b border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-800 leading-tight">
                            Hey! Tell us <span className="block">all the things</span>
                        </h2>
                        <button
                            onClick={closeForm}
                            className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200 group"
                        >
                            <X className="w-6 h-6 text-slate-500 group-hover:text-slate-700" />
                        </button>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 h-full flex flex-col">
                            <div className="space-y-8 flex-1">
                                <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                                    <div className="w-full">
                                        <label htmlFor="name" className="text-lg font-semibold text-slate-800 block mb-3">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...register("name", {
                                                required: "Name is required",
                                                minLength: {
                                                    value: 2,
                                                    message: "Name must be at least 2 characters"
                                                },
                                                maxLength: {
                                                    value: 50,
                                                    message: "Name must be less than 50 characters"
                                                }
                                            })}
                                            type="text"
                                            id="name"
                                            placeholder="Your name"
                                            className={`w-full px-4 py-4 text-lg outline-none bg-transparent transition-colors duration-300 placeholder-slate-400 border rounded-lg ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'}`}
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="email" className="text-lg font-semibold text-slate-800 block mb-3">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Please enter a valid email address"
                                                }
                                            })}
                                            type="email"
                                            id="email"
                                            placeholder="your.email@example.com"
                                            className={`w-full px-4 py-4 text-lg outline-none bg-transparent transition-colors duration-300 placeholder-slate-400 border rounded-lg ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'}`}
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-3 flex-1 flex flex-col">
                                    <label htmlFor="project" className="text-lg font-semibold text-slate-800 block">
                                        Tell us about your project <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        {...register("project", {
                                            required: "Please tell us about your project",
                                            minLength: {
                                                value: 10,
                                                message: "Please provide more details (minimum 10 characters)"
                                            },
                                            maxLength: {
                                                value: 1000,
                                                message: "Please keep your message under 1000 characters"
                                            }
                                        })}
                                        id="project"
                                        placeholder="Tell us about your project, goals, and requirements..."
                                        rows={8}
                                        className={`w-full px-4 py-4 text-lg outline-none transition-colors duration-300 placeholder-slate-400 resize-none flex-1 border rounded-lg ${errors.project ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'}`}
                                    />
                                    {errors.project && <p className="mt-1 text-sm text-red-500">{errors.project.message}</p>}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-200 space-y-6">
                                <div className="text-slate-500">
                                    <span className="text-sm">Our Email: </span>
                                    <a href="mailto:info@brezix.com" className="text-sm underline hover:text-blue-600 transition-colors">
                                        info@brezix.com
                                    </a>
                                </div>

                                <DiscordSender formData={{
                                    name: formData.name,
                                    email: formData.email,
                                    projectDetails: formData.project
                                }} onSuccess={onSuccess}>
                                    <button
                                        type="submit"
                                        disabled={!isValid || isSubmitting}
                                        className={`w-full py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${!isValid || isSubmitting
                                                ? 'bg-slate-400 cursor-not-allowed'
                                                : 'bg-slate-800 hover:bg-slate-900 hover:shadow-xl'
                                            } text-white`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <>
                                                Submit the request
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </button>
                                </DiscordSender>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
