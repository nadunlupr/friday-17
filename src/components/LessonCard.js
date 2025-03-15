import { Component } from 'react';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isShown: false };
    }
    render() {
        const {
            name = "",
            description
        } = this.props;
        return (
            <div className="lesson-card">
                <h2>{name}</h2>
                <div>
                    <p>
                        {description}
                    </p>
                </div>
                <button onClick={() => this
                    .setState({ isShown: !this.state.isShown })}>
                    View Summary
                </button>
                {
                    this.state.isShown &&
                    <div id="moreInfo"                        
                        className="more-info-panel">
                        <p className="black-text">
                            If you take the first lesson you can do the second one :)
                        </p>
                        <a href="./lesson-page.html">Go to lesson</a>
                    </div>
                }

            </div>
        );
    }
}

export default LessonCard;