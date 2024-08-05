// import Banner from './components/Banner';
// import Functionality from './components/Functionality';
import DashboardHeader from '../../components/DashboardHeader';
import Footer from '../../components/Footer';
// import Header from '../../components/Header';
import './style.css';
import '../../styles/stylePages.css';

function DashBoard() {
    return(
        <div className="app-container">
            <DashboardHeader/>
            <main className="home_page">
                <h1>Bem vindo ao ambiente de teste da DTI</h1>
            </main>
            <Footer/>
        </div>
    )
}

export default DashBoard;