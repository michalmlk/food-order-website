import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = (): void => {
        setIsShowing(!isShowing);
    };

    return {
        isShowing,
        toggle,
    };
};

export default useModal;
