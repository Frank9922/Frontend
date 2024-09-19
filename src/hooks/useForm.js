import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation ] = useState({});
    const [passwordMatch, setPasswordMatch] = useState(false);

    useEffect(() => {
        createValidators();
    }, [formState])

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])

    useEffect(() => {

        if (formState && formState.password && formState.re_password) {
            if (formState.password.length > 0 && formState.re_password.length > 0) {
                setPasswordMatch(formState.password === formState.re_password)
            }
        }

    }, [formState, formState.password, formState.re_password])

    const isFormValid = useMemo(() => {
        
        for ( const formValue of Object.keys( formValidation ) ) {
                if(formValidation[formValue] !== null) return false;
        }

        return true;

    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)){
            const [fn, errorMessage] = formValidations[ formField ];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField] ) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        passwordMatch,


        ...formValidation,
        formValidation,
        isFormValid
    }
}