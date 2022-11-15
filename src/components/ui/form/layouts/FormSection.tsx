type FormSectionProps = {
    children: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
};

export const FormSection = (props: FormSectionProps) => {
    /**
     * 複数の入力項目をグルーピングしタイトルと説明を任意でつける
     */
    const { children, title, description, className } = props;
    return (
        <div className="flex flex-wrap mx-4 my-6 py-4 px-8 rounded-xl bg-white shadow-md">
            <div className="text-gray-900 font-bold mb-8">
                {title ? <p className="text-gray-900 font-bold mb-2">{title}</p> : <div className="m-2"></div>}
                <p className="text-gray-600 text-xs">{description}</p>
            </div>
            <div className="w-full">{children}</div>
        </div>
    );
};
