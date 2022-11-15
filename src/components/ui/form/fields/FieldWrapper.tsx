import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { Tag } from '../../tag/Tag';

type FieldWrapperProps = {
    label?: string;
    className?: string;
    children: React.ReactNode;
    error?: FieldError | undefined;
    description?: string;
    require?: boolean;
    half?: boolean;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

/**
 * 以下を主な目的とするラッパーコンポーネント
 *  - フォーム部品に共通で存在するべきラベルとエラー表示を共通化できる
 *  - useControllerを使わなくていい
 *  - registerメソッドの引数の文字列が型安全になる
 */
export const FieldWrapper = (props: FieldWrapperProps) => {
    const { label, className, error, children, description, require, half } = props;
    return (
        <div className={`${half ? 'w-5/12 mr-8' : 'w-full'}`}>
            <label className={clsx('block text-sm font-medium text-gray-700 font-bold whitespace-nowrap', className)}>
                <div className="flex gap-3 mb-2">
                    {label}
                    {require && <Tag>必須</Tag>}
                </div>
                {children}
            </label>

            {description && (
                <div role="document" aria-label={description} className="text-sm">
                    {description}
                </div>
            )}
            {error?.message && (
                <div role="alert" aria-label={error.message} className="text-sm font-semibold text-red-500">
                    {error.message}
                </div>
            )}
        </div>
    );
};
