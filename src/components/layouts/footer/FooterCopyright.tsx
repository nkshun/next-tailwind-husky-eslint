import { ReactNode } from 'react';

import { VerticalFooterLinks } from './VerticalFooterLinks';

type IFooterCopyrightProps = {
    siteName: string;
    verticalLinks: ReactNode;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 items-center justify-center border-t border-gray-300 pt-10">
            <div className="w-fit-content mx-auto">
                <VerticalFooterLinks>{props.verticalLinks}</VerticalFooterLinks>
            </div>

            <div className="text-sm text-center lg:text-right">
                {`© Copyright ${new Date().getFullYear()} ${props.siteName}. All Rights Reserved.`}
            </div>
        </div>
    </>
);

export { FooterCopyright };
