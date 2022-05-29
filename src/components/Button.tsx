import React from "react"

function Button({ children, disabled = false }: { children: string, disabled?: boolean }) {
    return (
        <button disabled={disabled} >
            {children}
        </button>
    )
}

export default Button