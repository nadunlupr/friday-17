import { useNavigate } from 'react-router';

function NavigatorHOC(Component) {
    return function WrapperComponent(props) {
        const navigate = useNavigate();
        return(
            <Component {...props} navigate={navigate} />
        );
    }
}

export default NavigatorHOC;