import * as React from 'react';

import { Button } from '../../button/Button';
import { Drawer, DrawerProps } from '../../drawer';

import { useDisclosure } from '@/hooks/useDisclosure';

type FormDrawerProps = {
    isDone: boolean;
    triggerButton: React.ReactElement;
    submitButton: React.ReactElement;
    title: string;
    children: React.ReactNode;
    size?: DrawerProps['size'];
};

/**
 * フォームを画面右端から表示する
 *  Formコンポーネントをchildに渡して使用する
 */
export const FormDrawer = ({ title, children, isDone, triggerButton, submitButton, size = 'md' }: FormDrawerProps) => {
    const { close, open, isOpen } = useDisclosure();

    React.useEffect(() => {
        if (isDone) {
            close();
        }
    }, [isDone, close]);

    return (
        <>
            {React.cloneElement(triggerButton, { onClick: open })}
            <Drawer
                isOpen={isOpen}
                onClose={close}
                title={title}
                size={size}
                renderFooter={() => (
                    <>
                        <Button variant="inverse" size="sm" onClick={close}>
                            Cancel
                        </Button>
                        {submitButton}
                    </>
                )}
            >
                {children}
            </Drawer>
        </>
    );
};
