import React, {Component} from 'react';

export default class Slides extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            disactivePrev: true,
            disactiveNext: true,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        this.checkButtonsState();
    }

    handleOnClick(event) {
        let buttonDataId = event.target.dataset.testid;

        switch (buttonDataId) {
            case "button-restart": {
                this.setState({
                    currentSlide: 0
                }, this.checkButtonsState);
                break
            }
            case "button-next": {
                this.setState({
                    currentSlide: this.state.currentSlide + 1
                }, this.checkButtonsState);
                break
            }
            case "button-prev": {
                this.setState({
                    currentSlide: this.state.currentSlide - 1,  
                }, this.checkButtonsState);
                break
            }
        }
    }

    checkButtonsState() {
        if (this.state.currentSlide === 0) {
            this.setState({
                disactivePrev: true
            });
        } else {
            this.setState({
               disactivePrev: false 
            });
        }
        
        if (this.state.currentSlide === this.props.slides.length - 1) {
            this.setState({
                disactiveNext: true
            })
        } else {
            this.setState({
                disactiveNext: false
            })
        }
    }

    render() {
            return (
                <div>
                    <div id="navigation" className="text-center">
                        <button 
                            data-testid="button-restart" 
                            className="small outlined"
                            onClick={this.handleOnClick} >Restart
                        </button>
                        <button 
                            data-testid="button-prev" 
                            className="small" 
                            onClick={this.handleOnClick} 
                            disabled={this.state.disactivePrev} >Prev
                        </button>
                        <button 
                            data-testid="button-next" 
                            className="small" 
                            onClick={this.handleOnClick} 
                            disabled={this.state.disactiveNext} >Next   
                        </button>
                    </div>
                    <div id="slide" className="card text-center">
                        <h1 data-testid="title">{this.props.slides[this.state.currentSlide].title}</h1>
                        <p data-testid="text">{this.props.slides[this.state.currentSlide].text}</p>
                    </div>
                </div>
            );
        
        }
    }






