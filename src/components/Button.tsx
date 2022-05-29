import React from "react"

function Button({ children, disabled = false, setPage, small = false }: { children: string, disabled?: boolean, setPage?: any, small?: boolean }) {
    return (
        <button className={`${small && 'small'}`} disabled={disabled} onClick={() => setPage()}>
            {children}
        </button>
    )
}

export default Button