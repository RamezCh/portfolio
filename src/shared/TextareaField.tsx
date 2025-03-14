import {TextareaFieldProps} from "../types.ts";

export const TextareaField = (props: TextareaFieldProps) => {
    return (
        <div>
            {props.labelText && (
                <label className="block text-sm font-medium text-gray-700">
                    {props.labelText}
                </label>
            )}
            <textarea
                value={props.value}
                onChange={(e) => props.setter(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-300 focus:border-indigo-300"
                placeholder={props.placeholder}
                rows={4}
            />
        </div>
    );
};