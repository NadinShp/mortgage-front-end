import {useField} from 'formik';

const Select = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (<div>{meta.error}</div>) : null}
        </>
    )
};
export default Select;