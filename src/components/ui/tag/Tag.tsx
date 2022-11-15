import className from 'classnames';

type ITagProps = {
    lg?: boolean;
    children: string;
    color?: string;
    'bg-color'?: string;
    onClick?: () => void;
};

export const Tag = (props: ITagProps) => {
    const tagClass = className({
        tag: true,
        base: !props.lg,
        lg: props.lg,
    });

    return (
        <div className={`${tagClass} ${props.color || 'text-white'} ${props['bg-color'] || 'bg-primary-400'}`}>
            {props.children}

            <style jsx>
                {`
                    .tag {
                        @apply rounded-full flex items-center h-4 w-14;
                    }

                    .base {
                        @apply text-xs font-bold px-4;
                    }

                    .lg {
                        @apply font-extrabold text-xl py-4 px-6;
                    }
                `}
            </style>
        </div>
    );
};
