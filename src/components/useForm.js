import { useState, useEffect } from 'react'

export default function useForm(callback, validateInfo){
    const [values, setValues] = useState({
        nome: '',
        email: '',
        nºcrp: '',
        senha: '',
        senha2: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values));

        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );
    

    return { handleChange, values, handleSubmit, errors};
};




