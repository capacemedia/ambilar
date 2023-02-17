import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import reviews from './data';
import GoogleImage from '../../assets/icons/google.svg';
import './style.css';


class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: reviews,
            visible: 3,
            error: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 2};
        });
    }

    // EXAMPLE:  MAKE API CALL TO GET GOOGLE REVIEWS 

    // componentDidMount() {
    //   fetch("https://jsonplaceholder.typicode.com/posts").then(
    //     res => res.json()
    //   ).then(res => {
    //     this.setState({
    //       items: res
    //     });
    //   }).catch(error => {
    //     console.error(error);
    //     this.setState({
    //       error: true
    //     });
    //   });
    // }

    render() {
        return (
            <section className="feed">
                <div className="tiles" aria-live="polite">
                    <Container>
                        <Row className='review_row'>
                            <Col sm={12}>
                                <h4 className='paragraph'>Recensioner</h4>
                                <h2 className='section-title stock-heading'>Vad säger kunderna om oss</h2>
                            </Col>
                            <Col sm={12} md={8} lg={6} className='review-col'>

                                {this.state.items.slice(0, this.state.visible).map((item, index) => {
                                    return (
                                        <div className="review" key={item.id}>
                                            <h5 style={{fontWeight: 'bold'}}>Help us improve our productivity</h5>
                                            <p>{item.comment}</p>
                                            <div className='author_content'>
                                                <img src={GoogleImage} alt="google"/>
                                                <span>{item.author}</span>
                                            </div>

                                        </div>
                                    );
                                })}
                                {
                                    <button className='load_more' disabled={this.state.visible >= 5}
                                            onClick={this.loadMore}>Load more</button>
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
        );
    }
}

export default Feed;