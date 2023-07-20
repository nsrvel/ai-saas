'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure('36b77058-78a9-4e2d-8c64-9a3aae7e6378');
    }, []);

    return null;
};
