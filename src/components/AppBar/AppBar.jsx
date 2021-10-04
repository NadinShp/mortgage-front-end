import Navigation from '../Navigation';
import Container from '../Container';
import s from './AppBar.module.css';

function AppBar() {
    return(
        <header className={s.header}>
            <Container>
                <Navigation />
            </Container>
        </header>
    )
};

export default AppBar;