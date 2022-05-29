import React from 'react';


function Input({ placeHolder }: { placeHolder: string }) {
    return (
        <input type='text' placeholder={placeHolder} />
    );
}

export default Input;
