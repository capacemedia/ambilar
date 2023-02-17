/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ImageGallery from 'react-image-gallery';
import './style.css'

export default class ReactVideo extends React.Component {

  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'left',
      showVideo: {},
      useWindowKeyDown: true,
    };
    this.resizeScreen = this.resizeScreen.bind(this); 

    this.images = [
      {
        thumbnail: `https://s1.cdn.autoevolution.com/images/news/gallery/new-mercedes-benz-cls-450-4matic-looks-desirable-in-geneva_3.jpg`,
        original: `https://s1.cdn.autoevolution.com/images/news/gallery/new-mercedes-benz-cls-450-4matic-looks-desirable-in-geneva_3.jpg`,
        embedUrl: 'https://www.youtube.com/embed/HKc694OBOVo?autoplay=1&showinfo=0&cc_load_policy=1',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this)
      },
      {
        original: 'https://media.ed.edmunds-media.com/mercedes-benz/g-class/2021/oem/2021_mercedes-benz_g-class_4dr-suv_amg-g-63_fq_oem_1_1600.jpg',
        thumbnail: 'https://media.ed.edmunds-media.com/mercedes-benz/g-class/2021/oem/2021_mercedes-benz_g-class_4dr-suv_amg-g-63_fq_oem_1_1600.jpg',
        id: 3,
        brand: 'audi',
        info: 'Audi A6 allroad quattro 3.0 TDI DPF quattro S Tronic 204hp',
        description: 'Visiting address: Ivarshyttevägen 12, Hedemora We can deliver the car to your home. A nice, sporty and well-equipped Mercedes-Benz C43 AMG with 367 horsepower. Newly served on 26 / 01-2022. Equipped with, among other things, air suspension, MB-light headlights, 360 degree camera and parking sensors, large sound package with bass box, LED adaptive headlights, sports exhaust system, electrically retractable side mirrors, electric boot lid with foot sensor, sunroof, carbon interior and more. The annual tax is SEK 1944, fuel consumption is about 0.8 liters / mile. Financing can be arranged with SEK 0 in cash contribution. NOTE: Due to the prevailing pandemic, all viewing of cars takes place after an appointment.',
        price: 400000,
        currencyISO: 'EUR',
        date: new Date('04.09.2022')
    },
    {
      original: 'https://www.motorbiscuit.com/wp-content/uploads/2020/09/BMW-X5-M.jpg',
      thumbnail: 'https://www.motorbiscuit.com/wp-content/uploads/2020/09/BMW-X5-M.jpg',
      id: 4,
      brand: 'audi',
      info: 'Audi A6 allroad quattro 3.0 TDI DPF quattro S Tronic 204hp',
      description: 'Visiting address: Ivarshyttevägen 12, Hedemora We can deliver the car to your home. A nice, sporty and well-equipped Mercedes-Benz C43 AMG with 367 horsepower. Newly served on 26 / 01-2022. Equipped with, among other things, air suspension, MB-light headlights, 360 degree camera and parking sensors, large sound package with bass box, LED adaptive headlights, sports exhaust system, electrically retractable side mirrors, electric boot lid with foot sensor, sunroof, carbon interior and more. The annual tax is SEK 1944, fuel consumption is about 0.8 liters / mile. Financing can be arranged with SEK 0 in cash contribution. NOTE: Due to the prevailing pandemic, all viewing of cars takes place after an appointment.',
      price: 500000,
      currencyISO: 'EUR',
      date: new Date('04.11.2022')
  },
  {
    thumbnail: `https://cdn.carbuzz.com/gallery-images/840x560/418000/300/418346.jpg`,
    original: `https://cdn.carbuzz.com/gallery-images/840x560/418000/300/418346.jpg`,
    embedUrl: 'https://www.youtube.com/embed/1cSi3mZH6zM?autoplay=1&showinfo=0&cc_load_policy=1',
    description: 'Render custom slides (such as videos)',
    renderItem: this._renderVideo.bind(this)
  },
    ]
  }

  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({[state]: event.target.value});
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange(event) {
    this.setState({thumbnailPosition: event.target.value});
  }


  _resetVideo() {
    this.setState({showVideo: {}});

    if (this.state.showPlayButton) {
      this.setState({showGalleryPlayButton: true});
    }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }
  

  _toggleShowVideo(url) {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {
          this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='560'
                  height='315'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                  autoplay="1"
                  allow="autoplay"
                >
                </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img className='image-gallery-image' alt='' src={item.original} />
              {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span>
              }
            </a>
        }
      </div>
    );
  }
  componentDidMount() {

    window.addEventListener("resize", this.resizeScreen());

}

resizeScreen() {
  if(window.innerWidth < 520)
  {
      this.setState({thumbnailPosition: 'bottom'});
  }
  
}
  render() {
    return (

      <section className='gallery'>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={this.images}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />

        <div className='app-sandbox'>
 

        </div>
      </section>
    );
  }
}