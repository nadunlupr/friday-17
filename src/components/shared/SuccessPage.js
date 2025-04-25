import { useParams } from 'react-router';

function SuccessPage(props) {
    const { recordId } = useParams();
    return (
        <div>
            <div>
                <h1>Saved Successfully</h1>
                <div>Record Id: {recordId}</div>
            </div>
        </div>
    )
}

export default SuccessPage;