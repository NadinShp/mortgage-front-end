import {useField, useFormikContext} from 'formik';
import {useEffect} from 'react';

const SpecialInput = ({label, rate, ...props}) => {
    const {
        values: {borrowableAmount,},
        touched,
        setFieldValue,
    } = useFormikContext();

    const [field, meta] = useField(props);

    useEffect(() => {
       if(touched.borrowableAmount) {
        setFieldValue(props.name, `${borrowableAmount/100*(+rate)}`);
       }
    }, [borrowableAmount, touched.borrowableAmount, setFieldValue, props.name, rate])
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {!!meta.touched && !!meta.error && (<div>{meta.error}</div>)}
        </>
    )
};

export default SpecialInput;