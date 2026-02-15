// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// type ButtonVariant = "primary" | "accent";

// type ButtonProps = {
//     href?: string;
//     onClick?: () => void;
//     type?: "button" | "submit";
//     children: React.ReactNode;
//     ariaLabel?: string;
//     variant?: ButtonVariant;
//     delay?: number;
//     icon?: React.ReactNode;
//     className?: string;
// };

// export default function Button({
//     href,
//     onClick,
//     type = "button",
//     children,
//     ariaLabel,
//     variant = "primary",
//     delay = 0,
//     icon,
//     className = "",
// }: ButtonProps) {
//     const baseStyles =
//         "inline-flex justify-center items-center gap-3 rounded-full px-6 py-3 font-bold shadow-md transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2";

//     const variants = {
//         primary:
//             "bg-white text-[var(--color-primary)] focus:ring-[var(--color-accent)]",
//         accent:
//             "bg-[var(--color-accent)] text-black focus:ring-[var(--color-accent)]",
//     };

//     const content = (
//         <>
//             {children}
//             {icon}
//         </>
//     );

//     if (href) {
//         return (
//             <motion.a
//                 href={href}
//                 aria-label={ariaLabel}
//                 className={`${baseStyles} ${variants[variant]} ${className}`}
//                 initial={{ opacity: 0, y: 8 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay }}
//             >
//                 {content}
//             </motion.a>
//         );
//     }

//     return (
//         <motion.button
//             type={type}
//             onClick={onClick}
//             className={`${baseStyles} ${variants[variant]} ${className}`}
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay }}
//         >
//             {content}
//         </motion.button>
//     );
// }




"use client";

import { motion } from "framer-motion";
import React from "react";

type ButtonVariant = "white" | "yellow" | "purple";

type ButtonProps = {
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    children: React.ReactNode;
    ariaLabel?: string;
    variant?: ButtonVariant;
    delay?: number;
    icon?: React.ReactNode;
    className?: string;
};

export default function Button({
    href,
    onClick,
    type = "button",
    children,
    ariaLabel,
    variant = "white",
    delay = 0,
    icon,
    className = "",
}: ButtonProps) {
    const baseStyles =
        "inline-flex justify-center items-center gap-3 rounded-full px-6 py-3 font-bold shadow-md transition-transform duration-150 hover:scale-[1.02] focus:outline-none focus:ring-2";

    const variantStyles: Record<ButtonVariant, string> = {
        white: "bg-gradient-to-r from-white/90 to-white text-[var(--color-primary)] focus:ring-[var(--color-accent)]",
        yellow:
            "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black focus:ring-yellow-400",
        purple:
            "bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 text-white focus:ring-purple-400",
    };

    const content = (
        <>
            {children}
            {icon}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                aria-label={ariaLabel}
                className={`${baseStyles} ${variantStyles[variant]} ${className}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
        >
            {content}
        </motion.button>
    );
}
