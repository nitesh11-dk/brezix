"use client"

import React, { useState } from 'react'
import { X, ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import DiscordSender from "@/components/DiscordSender";
import { useRouter } from 'next/navigation';
import { PricingPlan } from '@/types/services';

interface FormData {
    name: string;
    email: string;
}

interface PricingContactFormProps {
    isOpen: boolean;
    onClose: () => void;
    serviceTitle: string;
    selectedPlan: PricingPlan;
}

const PricingContactForm = ({ isOpen, onClose, serviceTitle, selectedPlan }: PricingContactFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

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
        }
    });

    // Watch form fields to pass current data to DiscordSender
    const formData = watch();

    // On success handler
    const onSuccess = () => {
        setIsSubmitting(false);
        reset();
        onClose();
        router.push('/thankyou');
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Form submission logic will be handled by DiscordSender
    };

    if (!isOpen) return null;

    return (
        <div className='z-[1000]'>
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={onClose}
            />

            <div className="fixed bottom-4 right-4 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 transform transition-all duration-300">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">
                            Let's Build Together
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200 group"
                        >
                            <X className="w-5 h-5 text-slate-500 group-hover:text-slate-700" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-semibold text-slate-800 block mb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: {
                                            value: 2,
                                            message: "Name must be at least 2 characters"
                                        }
                                    })}
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className={`w-full px-4 py-3 text-base outline-none bg-transparent transition-colors duration-300 placeholder-slate-400 border rounded-lg ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'}`}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-semibold text-slate-800 block mb-2">
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
                                    className={`w-full px-4 py-3 text-base outline-none bg-transparent transition-colors duration-300 placeholder-slate-400 border rounded-lg ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-slate-400'}`}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200">
                            <DiscordSender 
                                formData={{
                                    name: formData.name,
                                    email: formData.email,
                                    service: `${serviceTitle} - ${selectedPlan.name} - ${typeof selectedPlan.price === 'number' ? `₹${selectedPlan.price}` : selectedPlan.price}`
                                }} 
                                onSuccess={onSuccess}
                            >
                                <button
                                    type="submit"
                                    disabled={!isValid || isSubmitting}
                                    className={`w-full py-3 px-6 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${
                                        !isValid || isSubmitting
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
                                            Start Building
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
    );
};

export default PricingContactForm; 