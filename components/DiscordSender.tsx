"use client";

import React, { useState } from "react";
import { DISCORD_WEBHOOK_URL } from "@/constants";
import toast from "react-hot-toast";

interface FormData {
    name: string;
    email: string;
    message?: string;
    projectDetails?: string;
    projectBudget?: string;
    service?: string;
    projectLink?: string;
}

export interface DiscordMessage {
    embeds: {
        title: string;
        color: number;
        fields: {
            name: string;
            value: string;
            inline?: boolean;
        }[];
        timestamp: string;
        footer: {
            text: string;
        };
    }[];
}

interface DiscordSenderProps {
    formData: FormData;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
    children?: React.ReactNode;
}

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
}

const buildDiscordMessage = (form: FormData): DiscordMessage => {
    const fields = [
        { name: "🙍 Name", value: form.name },
        { name: "📧 Email", value: form.email },
    ];

    if (form.message) fields.push({ name: "💬 Message", value: form.message });
    if (form.projectDetails) fields.push({ name: "📋 Project Details", value: form.projectDetails });
    if (form.projectBudget) fields.push({ name: "💰 Project Budget", value: form.projectBudget });
    if (form.service) fields.push({ name: "🛠️ Service", value: form.service });
    if (form.projectLink) fields.push({ name: "🔗 Project Link", value: form.projectLink });

    return {
        embeds: [
            {
                title: "📬 New Contact Submission",
                color: 3447003,
                fields,
                timestamp: new Date().toISOString(),
                footer: {
                    text: "Form via Website",
                },
            },
        ],
    };
};

const sendDiscordMessage = async (message: DiscordMessage) => {
    if (!DISCORD_WEBHOOK_URL) {
        throw new Error("Discord webhook URL is not configured");
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
};

export default function DiscordSender({ formData, onSuccess, onError, children }: DiscordSenderProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        const message = buildDiscordMessage(formData);

        try {
            await sendDiscordMessage(message);
            toast.success("Message sent successfully!");
            onSuccess?.();
        } catch (error) {
            console.error("Failed to send message to Discord:", error);
            toast.error("Failed to send message. Please try again.");
            onError?.(error as Error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!children) {
        return (
            <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-white text-black py-3 md:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading ? "Sending..." : "Send Message"}
            </button>
        );
    }

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement<ButtonProps>(child)) {
                    return React.cloneElement(child, {
                        onClick: handleSubmit,
                        disabled: isLoading || child.props.disabled,
                        children: isLoading ? "Sending..." : child.props.children,
                    });
                }
                return child;
            })}
        </>
    );
}
