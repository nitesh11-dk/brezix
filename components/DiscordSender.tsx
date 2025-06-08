"use client";

import React, { useState } from "react";
import { DISCORD_WEBHOOK_URL } from "@/constants";
import toast from "react-hot-toast";

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
    message: DiscordMessage;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
    children?: React.ReactNode;
}

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
}

export const sendDiscordMessage = async (message: DiscordMessage) => {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    });

    if (!response.ok) {
        throw new Error(`Error sending to Discord: ${response.statusText}`);
    }

    return true;
};

export default function DiscordSender({ message, onSuccess, onError, children }: DiscordSenderProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
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