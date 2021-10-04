function Button({style, onClick, children}){
    return(
        <button onClick={onClick} className={style}>
            {children}
        </button>
    );
};

export default Button;