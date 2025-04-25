import { Component } from 'react';
import axios from 'axios';
import loaderImg from '../assets/images/loader.gif';
import { Link } from 'react-router';
import NavigatorHOC from './shared/NavigatorHOC';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
            description: undefined,
        };
    }
    render() {
        const {
            name = "",
            description,
            navigate,
        } = this.props;
        return (
            <div className="lesson-card">
                <h2>{name}</h2>
                <div>
                    <p>
                        {description}
                    </p>
                </div>
                <button onClick={() => this.onViewSummaryClicked()}>
                    View Summary
                </button>
                {
                    this.state.isShown &&
                    <div>
                        {
                            this.state.description ?
                                <div id="moreInfo"
                                    className="more-info-panel">
                                    <p className="black-text">
                                        {this.state.description}
                                    </p>
                                    <Link to="/lesson">Go to lesson</Link>
                                    <button onClick={() => navigate('/lesson')} >Navigate</button>
                                </div> :
                                <div>
                                    <img src={loaderImg} width="40px" alt="loading..."/>
                                </div>
                        }
                    </div>
                }

            </div>
        );
    }

    onViewSummaryClicked() {
        this.setState(prevState => ({ 
            ...prevState,
            isShown: !prevState.isShown,
            description: undefined
         }));
        this.getDetails();
    }

    getDetails() {
        axios.get(`http://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120/${this.props.name}`)
            .then(({ data }) => {

                const {
                    info: {
                        description
                    } = {}
                } = data;
                console.log('reslut: ', description);
                this.setState(prevState => ({
                    ...prevState,
                    description
                }))
            })
            .catch(err => console.error('error: ', err));
    }

}

export default NavigatorHOC(LessonCard);