import { useState } from "react";

function useForm(initialValue) {
    const [value, setValue] = useState(initialValue ?? {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({ ...prev, [name]: value }));
    };

    const reset = () => {
        setValue(initialValue);
    };

    return { value, handleChange, reset };
}

export default useForm;

