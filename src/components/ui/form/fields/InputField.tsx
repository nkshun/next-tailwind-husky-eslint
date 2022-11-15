import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from '..';

export type InputFieldProps = FieldWrapperPassThroughProps & {
    type?: 'text' | 'email' | 'password';
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
    placeholder?: string;
};

export const InputField = (props: InputFieldProps) => {
    const { type = 'text', label, className, registration, error, require, placeholder, half, description } = props;
    return (
        <FieldWrapper label={label} error={error} require={require} half={half} description={description}>
            <input
                type={type}
                className={clsx(
                    'appearance-none block h-11 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white',
                    className
                )}
                placeholder={placeholder}
                {...registration}
            />
        </FieldWrapper>
    );
};
