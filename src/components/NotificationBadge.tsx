"use client";

import React from "react";

import { motion, AnimatePresence } from "framer-motion";
type NotificationType = "success" | "error";

type NotificationBadgeProps = {
    text: string;
    type?: NotificationType;
};

export default function NotificationBadge({
    text,
    type = "success",
}: NotificationBadgeProps) {
    const baseStyles =
        "absolute -top-2 -right-2 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse";

    const variants = {
        success:
            "bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600",
        error: "bg-red-500",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={` rounded-2xl px-6 py-4 font-semibold shadow-xl ${variants[type]} ${baseStyles} `}
        >
        {/* <span className={`${baseStyles} ${variants[type]}`}> */}
            {text}
            {/* </span> */}
        </motion.div>
    );
}
