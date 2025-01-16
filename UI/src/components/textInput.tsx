import cn from "../lib/utils";

export default function TextInput ({
    value,
    name,
    label,
    onChange,
    type = 'text',
    required = false,
    placeholder = '',
    className = '',
    ...props
}: {
    value: string;
    name: string;
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    required?: boolean;
    placeholder?: string;
    className?: string;
}) {
    return (
        <div className="space-y-2">
            {label && <label>{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                className={cn('h-11 px-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300', className)}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                {...props}
            />
        </div>
    ) 
}