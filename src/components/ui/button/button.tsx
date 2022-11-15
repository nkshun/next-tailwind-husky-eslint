import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '../spinner';

const variants = {
    primary: 'text-white bg-primary-500',
    inverse: 'bg-white text-blue-600',
    danger: 'bg-red-600 text-white',
};

const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-2 px-6 text-md',
    lg: 'py-3 px-8 text-lg',
};

// アイコン付きボタン用
type IconProps =
    | { startIcon: React.ReactElement; endIcon?: never }
    | { endIcon: React.ReactElement; startIcon?: never }
    | { startIcon?: undefined; endIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    fill?: boolean;
    isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            type = 'button',
            className = '',
            variant = 'primary',
            size = 'md',
            fill = false,
            isLoading = false,
            startIcon,
            endIcon,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                className={clsx(
                    'flex justify-center items-center border boder-gray-300 disabled:opacity-70 disabled::cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80',
                    variants[variant],
                    sizes[size],
                    `${fill && 'w-full'}`,
                    className
                )}
                {...props}
            >
                {isLoading && <Spinner size="sm" className="text-current" />}
                {!isLoading && startIcon}
                <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
            </button>
        );
    }
);

Button.displayName = 'Button';
