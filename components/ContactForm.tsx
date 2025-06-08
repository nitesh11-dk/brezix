"use client"
import React, { useEffect } from 'react'
import { X, ArrowRight } from "lucide-react"
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { useForm as useFormContext } from "@/context/FormContext";
import DiscordSender, { DiscordMessage } from "@/components/DiscordSender";

interface FormData {
    name: string;
    email: string;
    project: string;
}

const ContactForm = () => {
    const { isFormOpen, closeForm } = useFormContext();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>();

    // Effect to manage body scroll
    useEffect(() => {
        if (isFormOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `${-scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const scrollY = parseInt(document.body.style.top || '0') * -1;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
        }
    }, [isFormOpen]);

    const onSubmit = (data: FormData) => {
        const message: DiscordMessage = {
            embeds: [{
                title: "🎯 New Contact Form Submission",
                color: 0x0099ff,
                fields: [
                    {
                        name: "👤 Name & Company",
                        value: data.name,
                        inline: true
                    },
                    {
                        name: "📧 Email",
                        value: data.email,
                        inline: true
                    },
                    {
                        name: "📝 Project Details",
                        value: data.project || "No details provided"
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

    return (
        <div className='z-[999]'>
            {/* Overlay */}
            {isFormOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={closeForm}
                />
            )}

            {/* Sliding Form */}
            <div
                className={`fixed top-0 right-0 h-full w-full md:w-1/2 bg-white shadow-2xl transform transition-transform duration-700 ease-out z-50 ${isFormOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
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

                    {/* Form Content */}
                    <div className="flex-1 p-8 overflow-y-auto">
                        <form onSubmit={handleSubmit((data) => {
                            const message = onSubmit(data);
                            return (
                                <DiscordSender
                                    message={message}
                                    onSuccess={() => {
                                        closeForm();
                                        reset();
                                    }}
                                >
                                    <button
                                        type="submit"
                                        className="w-full bg-slate-800 text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group"
                                    >
                                        Submit the request
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </DiscordSender>
                            );
                        })} className="space-y-8 h-full flex flex-col">
                            <div className="space-y-8 flex-1">
                                {/* Name & Email side by side */}
                                <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                                    {/* Name & Company */}
                                    <div className="w-full">
                                        <label htmlFor="name" className="text-lg font-semibold text-slate-800 block mb-3">
                                            Name & Company
                                        </label>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            type="text"
                                            id="name"
                                            placeholder="John from Apple"
                                            className={`w-full px-4 py-4 text-lg outline-none bg-transparent transition-colors duration-300 placeholder-slate-400 border rounded-lg ${errors.name ? 'border-red-500' : 'border-slate-200'
                                                }`}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="w-full">
                                        <label htmlFor="email" className="text-lg font-semibold text-slate-800 block mb-3">
                                            Your Email
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            type="email"
                                            id="email"
                                            placeholder="john@apple.com"
                                            className={`w-full px-4 py-4 text-lg outline-none bg-transparent transition-colors duration-300 placeholder-slate-400 border rounded-lg ${errors.email ? 'border-red-500' : 'border-slate-200'
                                                }`}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Project */}
                                <div className="space-y-3 flex-1 flex flex-col">
                                    <label htmlFor="project" className="text-lg font-semibold text-slate-800 block">
                                        Tell us more about your project
                                    </label>
                                    <textarea
                                        {...register("project", { required: "Project details are required" })}
                                        id="project"
                                        placeholder="Something about your great idea"
                                        rows={8}
                                        className={`w-full px-4 py-4 text-lg outline-none transition-colors duration-300 placeholder-slate-400 resize-none flex-1 border rounded-lg ${errors.project ? 'border-red-500' : 'border-slate-200'
                                            }`}
                                    />
                                    {errors.project && (
                                        <p className="mt-1 text-sm text-red-500">{errors.project.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="pt-8 border-t border-slate-200 space-y-6">
                                <div className="text-slate-500">
                                    <span className="text-sm">Our Email: </span>
                                    <a
                                        href="mailto:info@brezix.com"
                                        className="text-sm underline hover:text-blue-600 transition-colors"
                                    >
                                        info@brezix.com
                                    </a>
                                </div>
                                <DiscordSender
                                    message={onSubmit({
                                        name: "",
                                        email: "",
                                        project: ""
                                    })}
                                    onSuccess={() => {
                                        closeForm();
                                        reset();
                                    }}
                                >
                                    <button
                                        type="submit"
                                        className="w-full bg-slate-800 text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group"
                                    >
                                        Submit the request
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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