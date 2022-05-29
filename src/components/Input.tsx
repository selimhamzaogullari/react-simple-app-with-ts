import React, { Dispatch, SetStateAction } from 'react';


function Input({ id, placeHolder, firstValue, allowOnlyNumber = false, type = 'text', setVar }: { id: string, placeHolder: string, firstValue: string, allowOnlyNumber?: boolean, type?: string, setVar: Dispatch<SetStateAction<string>> }) {
    function checkInput(e: React.ChangeEvent<HTMLInputElement>) {
        if (allowOnlyNumber) e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        setVar(e.target.value)
    }
    return (
        <input type={type} id={id} name="salary"
            value={firstValue}
            onChange={checkInput}
            placeholder={placeHolder} />
    );
}

export default Input;
