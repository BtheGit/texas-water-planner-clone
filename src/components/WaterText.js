import React from 'react';
import PropTypes from 'prop-types';
import './WaterText.css';

class WaterText extends React.Component {
  constructor(props) {
    super(props);
    this.textBox = null;
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount() {
    const { height, width } = this.textBox.getBoundingClientRect();
    this.setState({ width, height });
  }

  render() {
      const {
        children: text,
        className, 
        waterColor,
        textColor,
        baseColor,
        fontSize
      } = this.props;
      
      const {        
        height,
        width,
      } = this.state;
    
      return(
        <svg 
          className={`water-text ${ className }`} 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          x="0px" 
          y="0px"
          width={ width } 
          height={ height } 
          viewBox={`0 0 ${ width } ${ height * 1.2 }`} 
          enableBackground={`new 0 0 ${ width } ${ height }`} 
          xmlSpace="preserve"
        >
        <defs>
          <pattern 
            id="water" 
            width=".25" 
            height="1.0" 
            patternContentUnits="objectBoundingBox"
          >
            <path 
              fill={ waterColor } 
              d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
            />
          </pattern>
          
          <text 
            id="water-text" 
            transform={`matrix(1 0 0 1 0 ${ height * 0.9 })`} 
            fontFamily="inherit" 
            fontSize={ fontSize }
            ref={ref => this.textBox = ref}
          >
            { text }
          </text>
          
          <mask id="water-text_mask">
            <use 
              x="0" 
              y="0" 
              xlinkHref="#water-text" 
              opacity="1" 
              fill={ baseColor }
            />
          </mask>
        </defs>
        
        <use 
          x="0" 
          y="0" 
          xlinkHref="#water-text" 
          opacity="1"
          fill={ textColor }
        />
        
        <rect 
          className="water-fill"
          mask="url(#water-text_mask)" 
          fill="url(#water)" 
          x={ width * -1 } 
          y="0" 
          width={ width * 4 } 
          height={ height  }
        />
        
      </svg>
      )
    }
  }

WaterText.defaultProps = {
  className: '',
  children: '',
  fontSize: 'inherit',
  baseColor: '#FFF',
  textColor: 'rgba(100, 100, 255, 0.4)',
  waterColor: '#40a4df'

}

WaterText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default WaterText;

//Need to fix text cut off using proper resizing tools later
//Seems to be some odd artificating as well
//Need to make it inherit positioning better as well