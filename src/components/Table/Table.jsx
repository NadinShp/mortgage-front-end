// import Button from '../Button';
// import EditSharpIcon from '@material-ui/icons/EditSharp';

function Table({items, onDelete, onOpenModal, onEditBank }){
    return(
        <table>
            <caption>Your banks list</caption>
            <thead>
                <tr>
                    <th>Bank's name</th>
                    <th>Borrowed Amount</th>
                    <th>Interest rate</th>
                    {/* <th>Maximum loan</th> */}
                    <th>Minimum down payment</th>
                    <th>Loan term</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({_id, name, interestRate, loanTerm, minimumDownPayment, maximumLoan, borrowableAmount, updatedAt}) => (
                    <tr key={_id}>
                        <td>{name}</td>{/*<Button onClick={()=>{console.log('Click in edit btn')}}><EditSharpIcon /></Button></td> //<EditIcon width='20' height='20' />*/}
                        <td>{borrowableAmount}</td>
                        <td>{interestRate}</td>
                        {/* <td>{maximumLoan}</td> */}
                        <td>{minimumDownPayment}</td>
                        <td>{loanTerm}</td>
                        <td><button onClick={()=>onDelete(_id)}>Delete</button><button onClick={()=>onEditBank(_id)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Table;