import {TextareaFieldProps} from "../types.ts";

export const TextareaField = (props: TextareaFieldProps) => {
    return (
        <div className="group">
            {props.labelText && (
                <label className="block text-sm font-medium text-gray-700 transition-all duration-300 group-focus-within:text-[#7051EF]/80">
                    {props.labelText}
                </label>
            )}
            <textarea
                value={props.value}
                onChange={(e) => props.setter(e.target.value)}
                className="mt-1 block w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-md shadow-sm 
                          transition-all duration-200 ease-in-out
                          hover:border-[#7051EF]/70 hover:bg-gray-50/30
                          focus:outline-none focus:ring-1 focus:ring-[#7051EF]/70 focus:border-[#7051EF]/90 focus:shadow-sm
                          resize-y"
                placeholder={props.placeholder}
                rows={4}
            />
        </div>
    );
};
