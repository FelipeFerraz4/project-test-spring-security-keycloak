import { Link } from 'react-router-dom';
import './style.css';

function Brand() {
    return(
        <Link className="visual_identity" to="/dashboard">
            <h2 className="visual_identity_title">DTI</h2>
            <h3 className="visual_identity_title">Diretoria de Tecnologia da Informação</h3>
        </Link>
    )
}

export default Brand;