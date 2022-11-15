import className from 'classnames';
import { ReactNode } from 'react';

type ISectionProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    yPadding?: string;
    dark?: boolean;
    center?: boolean;
    children: ReactNode;
};

const Section = (props: ISectionProps) => {
    const titleClass = className({
        'font-bold': true,
        'text-4xl': true,
        'text-gray-900': !props.dark,
        'text-gray-100': props.dark,
    });

    const descriptionClass = className({
        'mt-4': true,
        'text-xl': true,
        'text-gray-200': props.dark,
    });

    return (
        <div className={`max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6 ${props.yPadding ? props.yPadding : 'py-16'}`}>
            {(props.title || props.subtitle || props.description) && (
                <div className="text-center w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto">
                    {props.subtitle && <div className="text-primary-500 text-sm font-bold">{props.subtitle}</div>}
                    {props.title && <h2 className={titleClass}>{props.title}</h2>}
                    {props.description && <div className={descriptionClass}>{props.description}</div>}
                </div>
            )}

            <div className={props.center ? 'flex justify-center' : ''}>{props.children}</div>
        </div>
    );
};

export { Section };
