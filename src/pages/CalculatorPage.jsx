import CanculateForm from '../components/CanculateForm';
import Container from '../components/Container';
import {useState} from 'react';

function CanculatorPage() {
    const [calculateData, setCalculateData] = useState({});
    console.log(typeof({}));
    const handleGetData = (data) => {
        setCalculateData(data);
        handleCanculateResult();
         // console.log(data);
    }
    // let mounthlyPayment;
    const handleCanculateResult = () => {
        const {initialLoan, downPayment} = calculateData;
        const ANNUAL_INTEREST_RATE_IN_PROCENT = 5;
        const ANNUAL_INTEREST_RATE = (initialLoan/100)*ANNUAL_INTEREST_RATE_IN_PROCENT;
        if(downPayment>=ANNUAL_INTEREST_RATE) {
            const NUMBER_OF_MONTHLY_PAYMENTS = 12;//will be give from database
            const partOfmounthlyPayment = Math.pow((1+ANNUAL_INTEREST_RATE/12), NUMBER_OF_MONTHLY_PAYMENTS);
            let mounthlyPayment = (initialLoan*(ANNUAL_INTEREST_RATE/12)*partOfmounthlyPayment)/(partOfmounthlyPayment-1);
            return mounthlyPayment;
        }
            return `Down payment must be equel ${ANNUAL_INTEREST_RATE} or more`
    }
    const result = handleCanculateResult();
    return(
        <Container>
            <CanculateForm title="Here you can see payment plan" onSubmit={handleGetData} />
            {Object.keys(calculateData).length !== 0 && (<h3>You need to pay every month: {result}</h3>)}
        </Container>
    )
};

export default CanculatorPage;