import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import Input from '../UI/Input';
import Select from '../UI/Select';

const CanculateForm = ({title, onSubmit}) => {
    return (
        <>
            <h2>{title}</h2>
            <Formik
                initialValues={{
                    initialLoan: '',
                    downPayment: '',
                    bank: '',
                }}
                validationSchema={Yup.object({
                    initialLoan: Yup.number().integer().positive().required(),
                    downPayment: Yup.number().integer().positive().required(),
                    bank: Yup.string().oneOf(['a-bank', 'new-bank', 'mount-bank', 'news-bank', 'great-bank'], 'You need to choose one of bank').required('Required'),
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    onSubmit(values);
                    resetForm({values: ''});
                    setSubmitting(false);
                }}
                >
                    <Form>
                        <Input label='Initial loan' name='initialLoan' type="number"/>
                        <Input label='Down payment' name='downPayment' type="number"/>
                        <Select label='Select bank' name='bank'>
                            <option value=''>Select bank</option>
                            <option value='a-bank'>A-Bank</option>
                            <option value='new-bank'>New-Bank</option>
                            <option value='mount-bank'>Mount-Bank</option>
                            <option value='news-bank'>New-Bank</option>
                            <option value='great-bank'>Great-Bank</option>
                        </Select>
                        <button type='submit'>Canculate</button>
                    </Form>
            </Formik>
        </>
    )
};

export default CanculateForm;