import { useEffect, useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        if (isShowing) {
            document.querySelector('#root')?.classList.add('modal-open');
        } else {
            document.querySelector('#root')?.classList.remove('modal-open');
        }
    }, [isShowing]);

    const toggle = (): void => {
        setIsShowing(!isShowing);
    };

    return {
        isShowing,
        toggle,
    };
};

export default useModal;
