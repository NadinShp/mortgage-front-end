import {Component} from 'react';
import {createPortal} from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
    // state = {
    //     isOpen: false,
    // }
    componentDidMount() {
        window.addEventListener('keydown', this.handleckickDown);
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleckickDown);
    }
    // toggleOpenModal = () => {
    //     this.setState(prevState=> ({
    //         isOpen: !prevState.
    //     }))
    // }
    handleckickDown = e => {
        if(e.code === 'Escape') {
            this.props.onClose();
        }
    }
    handleClickBackdrop = e => {
        if(e.target === e.currentTarget) {
            this.props.onClose();
        }
    }
    render() {
        return createPortal(
            <div className={s.backdrop} onClick={this.handleClickBackdrop}>
                <div className={s.modal}>
                    {this.props.children}
                </div>
            </div>, modalRoot
        )
    }
};

export default Modal;