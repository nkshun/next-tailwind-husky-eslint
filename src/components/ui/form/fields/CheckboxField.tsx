import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from '..';

type CheckBoxFieldProps = FieldWrapperPassThroughProps & {
    registration: Partial<UseFormRegisterReturn>;
    children: string;
};

export const CheckBoxField = (props: CheckBoxFieldProps) => {
    const { label, registration, error, require, half, description, children } = props;
    return (
        <FieldWrapper label={label} error={error} require={require} half={half} description={description}>
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" {...registration} />
                <span className={`ml-2 ${error ? 'text-red-500' : 'text-gray-600'}`}>{children}</span>
            </label>
        </FieldWrapper>
    );
};
