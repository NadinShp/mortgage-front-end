import Input from '../UI/Input';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import SpecialInput from '../UI/SpecialInput';

const BanksForm = ({title, onSubmit, onClose, name, borrowableAmount, minimumDownPayment, interestRate, buttonName}) => {
    return (
        <>
            <h2>{title}</h2>
            <Formik
            initialValues={{
                name,
                borrowableAmount: +borrowableAmount,
                minimumDownPayment: +minimumDownPayment,
                interestRate: +interestRate,
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .max(20, 'Must be 20 characters or less').required(),
                borrowableAmount: Yup.number().positive().integer().required()
                .max(1000000, 'Please enter need amount equal or less, then 1000000'),
                minimumDownPayment: Yup.number().positive().integer()
                .min(100, 'Please enter the amount equal or more 20% from Borrowable Amount').required(),
                interestRate: Yup.number().positive().min(0.01).required(),
                // loanTerm: Yup.number().integer().positive().min(1, 'Enter amoun month equal or more than 1')
                // .max(12, 'Enter amoun month equal or less than 12'),
            })}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                onSubmit(values)
                resetForm({values: ''});
                if(onClose){
                    onClose();
                }
                // onClose ?? onClose();
                // console.log(values);
                setSubmitting(false)
            }}
            >
                <Form>
                    <Input label='Bank name' name="name" type="text"/>
                    <Input label='Borrowable Amount' name="borrowableAmount" type="number"/>
                    <SpecialInput label='Minimum Down Payment' rate={20} name="minimumDownPayment" type="number"/>
                    <SpecialInput label='interest Rate' rate={15} name="interestRate" type="number"/>
                    <button type="submit">{buttonName}</button>
                </Form>
            </Formik>
        </>
    )
};

export default BanksForm;