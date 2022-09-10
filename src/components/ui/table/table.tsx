import { ReactNode } from 'react';

type ITableProps = {
    children: ReactNode;
};

export const Table = (props: ITableProps) => {
    return (
        <table className="w-80">
            <tbody>{props.children}</tbody>
        </table>
    );
};

type ITrProps = {
    children: ReactNode;
    color?: string;
    bgColor?: string;
    size?: string;
};
export const Tr = (props: ITrProps) => {
    return <tr className={`${props.color} ${props.bgColor} ${props.size}`}>{props.children}</tr>;
};

type IThProps = {
    children: ReactNode;
    colSpan?: number;
};
export const Th = (props: IThProps) => {
    return (
        <th className="px-6 py-4 text-left whitespace-nowrap" colSpan={props.colSpan}>
            {props.children}
        </th>
    );
};

type ITdProps = {
    children: ReactNode;
};
export const Td = (props: ITdProps) => {
    return <td className="px-6 py-4 text-left whitespace-nowrap">{props.children}</td>;
};
