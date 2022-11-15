import { FC, ReactNode } from 'react';

type IFormBlock = {
    children: ReactNode;
};

export const FormBlock: FC<IFormBlock> = ({ children }) => {
    return <div className="flex flex-wrap mx-3 mb-6">{children}</div>;
};
