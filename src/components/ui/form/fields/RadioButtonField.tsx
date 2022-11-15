import clsx from 'clsx';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type IRadioBtnProps = FieldWrapperPassThroughProps & {
    registration: Partial<UseFormRegisterReturn>;
    value: string;
    label: string;
    className?: string;
};

export const RadioBtn: FC<IRadioBtnProps> = props => {
    const { error, className, registration, value, label } = props;
    return (
        <FieldWrapper error={error}>
            <div className={clsx('flex items-center mr-4 mb-2', className)}>
                <input
                    id={value}
                    type="radio"
                    name={registration.name}
                    value={value}
                    className="hidden"
                    {...registration}
                />
                <label htmlFor={value} className="flex items-center cursor-pointer text-gray-700">
                    <span className="w-5 h-5 inline-block mr-2 rounded-full border border-gray-600 flex-no-shrink"></span>
                    {label}
                </label>
            </div>
        </FieldWrapper>
    );
};
