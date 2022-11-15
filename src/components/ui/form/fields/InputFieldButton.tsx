import clsx from 'clsx';

import { FieldWrapper, InputFieldProps } from '..';
import { Button } from '../../button/Button';

type InputButtonFieldProps = InputFieldProps & {
    onClick: () => void;
    children: string;
};

export const InputButtonField = (props: InputButtonFieldProps) => {
    const {
        type = 'text',
        label,
        className,
        registration,
        error,
        require,
        placeholder,
        half,
        description,
        onClick,
        children,
    } = props;
    return (
        <FieldWrapper label={label} error={error} require={require} half={half} description={description}>
            <div className="relative">
                <input
                    type={type}
                    className={clsx(
                        'appearance-none block h-11 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white',
                        className
                    )}
                    placeholder={placeholder}
                    {...registration}
                />

                <Button className="absolute right-0 top-0 h-11" onClick={onClick}>
                    {children}
                </Button>
            </div>
        </FieldWrapper>
    );
};
