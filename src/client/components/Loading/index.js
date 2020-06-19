import React from 'react';
import { Dot, DotWrapper } from './styles';

export const Loading = () => (
    <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
    </DotWrapper>
)