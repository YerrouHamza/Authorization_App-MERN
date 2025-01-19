import { forwardRef } from "react";
import cn from "../../lib/utils";

type TextInputPropsType = {
    label: string;
    type?: string;
    placeholder?: string;
    className?: string;
    errorMessage?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputPropsType>(
    ({label, type = "text", placeholder = "", className = "", errorMessage = "", ...props}, ref) => {
    return (
        <div className="space-y-2">
            {label && <label>{label}</label>}
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                className={cn(
                    "h-11 px-2 border rounded-md w-full focus:outline-none focus:ring",
                    errorMessage
                        ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:border-blue-300 focus:ring-blue-300",
                    className
                )}
                {...props}
            />
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        </div>
    );
})

TextInput.displayName = 'TextInput';
export default TextInput;