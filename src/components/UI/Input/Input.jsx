import {useField} from 'formik';

const Input = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (<div>{meta.error}</div>) : null}
        </>
    )
};

export default Input;