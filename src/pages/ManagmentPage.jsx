import {Component} from 'react';
import ApiRequest from '../services/api';
import Container from '../components/Container';
import Table from '../components/Table';
import Modal from '../components/Modal';
import BanksForm from '../components/BanksForm';
import SearchBar from '../components/SearchBar';

const {fetchAllBanks, fetchAddBank, fetchDeleteBank, fetchUpdateBank} = ApiRequest;

class ManagmentPage extends Component {
    state = {
        banksList: [],
        isOpen: false,
        selectedBankId: '',
        query: '',
    }
    async componentDidMount() {
        try {
            const result = await fetchAllBanks();
            this.setState({
                banksList: result,
            })
        } catch (error) {
           console.log(error);
        }
    }
    handleBtnClick = () => {
        this.setState(prevState=>({isOpen: !prevState.isOpen}));
    }
    handleAddBank = async(values) => {
        try {
            const result = await fetchAddBank(values);
            if(result){
            this.setState(prevState => ({banksList: [...prevState.banksList, result]}))
            //    const data = await fetchAllBanks();//
            //    this.setState({banksList: data})//
            }
        }
        catch(error) {
            console.log(error);
        }
    }
    handleDeleteBank = async(id) => {
        try {
            const result = await fetchDeleteBank(id);
            if(result) {
                this.setState(({banksList}) => ({
                    banksList: banksList.filter(({_id}) => _id !== result._id),
                }))
            }
        } catch(error) {
            console.log(error);
        }
    }
    handleEditBank = (id) => {
        // console.log(id);
        if(id) {
        this.setState(({banksList}) => ({
            selectedBankId: banksList.find(({_id}) => _id===id)
        }), () => this.handleBtnClick()
        )}
        console.log('selectedBankId 123', this.state.selectedBankId);
    }
    handleUpdateBank = async (values) => {
        const {_id} = this.state.selectedBankId;
        try {
            const result = await fetchUpdateBank(_id, values);
            console.log(result);
            if(result) {
               this.setState(({banksList}) => ({
                banksList: banksList.map((item) => item._id === result._id ? result : item),
               }))
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleChangeQuery = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    getFilterList = () => {
        const {banksList, query} = this.state;
        const regExp = new RegExp(query, 'gi'); //create regExp
        if (query) {
            return banksList.filter(bank => regExp.test(bank.name));
        }
        return banksList;
    }
    render(){
        const {banksList, isOpen, selectedBankId, query} = this.state;
        const {name, borrowableAmount, minimumDownPayment, interestRate} = selectedBankId;
        const visibleBankList = this.getFilterList();
        console.log('visibleBankList', );
        return(
            <Container>
                {banksList && (<SearchBar value={query} handleChange={this.handleChangeQuery}/>)}
                {banksList && (<Table items={visibleBankList} onDelete={this.handleDeleteBank}
                onEditBank={this.handleEditBank} onOpenModal={this.handleBtnClick}/>)}
                <button onClick={this.handleBtnClick} type='button'>Add</button>
                {isOpen &&
                (<Modal onClose={this.handleBtnClick}>
                    {selectedBankId
                    ? (<BanksForm title='You can update data of this bank here' onSubmit={this.handleUpdateBank} onClose={this.handleBtnClick}
                        name={name} borrowableAmount={borrowableAmount} minimumDownPayment={minimumDownPayment}
                        interestRate={interestRate} buttonName='Save' />)
                    : (<BanksForm title='Fill bank form' onSubmit={this.handleAddBank} onClose={this.handleBtnClick}
                        name = '' borrowableAmount= '' minimumDownPayment='' interestRate='' buttonName='Send'/>)}
                    </Modal>)}
            </Container>
        )
    }
};

export default ManagmentPage;