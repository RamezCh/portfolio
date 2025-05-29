import {InputFieldProps} from "../types.ts";

export const InputField = (props:InputFieldProps) => {
    return <div className="group">
        { props.labelText && <label className="block text-sm font-medium text-gray-700 mb-1 transition-all duration-300 group-focus-within:text-[#7051EF]/90">{props.labelText}</label>}
        <input
            type="text"
            value={props.value}
            onChange={(e) => props.setter(e.target.value)}
            className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-2.5 border bg-white border-gray-300 rounded-md shadow-sm 
                       text-gray-700 placeholder-gray-400/80
                       transition-all duration-200 ease-in-out
                       hover:border-[#7051EF]/70 hover:bg-gray-50/30
                       focus:outline-none focus:ring-2 focus:ring-[#7051EF]/60 focus:border-[#7051EF]/90 focus:shadow-md"
            placeholder={props.placeholder}
        />
    </div>
}
