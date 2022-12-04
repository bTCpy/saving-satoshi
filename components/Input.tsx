'use client'

import { Space_Mono } from '@next/font/google';
import { validateTsconfig } from 'contentlayer/core';
import RICIBs from 'react-individual-character-input-boxes';

const smono = Space_Mono({
    weight: ['400', '700'],
    variable: '--inter-font',
    preload: true,
    display: 'swap'
})

export const Input = () =>  {
    function handleOutput(string) {
        console.log(string)
    }

    return (
        <div>
            <RICIBs
                amount={154}
                autoFocus
                handleOutputString={handleOutput}
                inputProps={
                 {  className: 'bg-transparent',
                    placeholder: '_',
                    style: {
                       'font-size': '20px',
                       'width': '20px',
                       'height': '20px',
                       'font-family': `${smono.style.fontFamily}`,
                       'margin': '0px'
                    }
                }}
                inputRegExp={/^[a-zA-Z0-9_.-]*$/}
            />
      </div>
    );
}