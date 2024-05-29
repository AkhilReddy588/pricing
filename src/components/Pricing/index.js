import {Component} from 'react'
import React from "react"
import Switch from "react-switch"
import { FaCheck } from "react-icons/fa"
import {PricingContent, PricingContainer, ThemeBtn, Amount} from './styledComponent'
import './index.css'

class Pricing extends Component{
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.onChangeSlider = this.onChangeSlider.bind(this);
      }

      state = {rangeValue: 50, isDarkTheme: false}

      componentDidMount() {
        this.setState({ rangeValue: 50 });
      }
      

      onChangeSlider = event => this.setState({rangeValue: event.target.value})
    
      handleChange(checked) {
        this.setState({ checked });
      }
      
      changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme });
      }


    render(){
      const {rangeValue, isDarkTheme} = this.state
      const themeLogoUrl = isDarkTheme ? 
                   'https://assets.ccbp.in/frontend/react-js/light-theme-img.png' :
                  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png' 
      const heading = isDarkTheme ? 'heading-dark' : 'heading-light'         
        return (
            <PricingContainer theme={isDarkTheme} >
                <ThemeBtn theme={isDarkTheme} onClick={this.changeTheme} >
                  <img src={themeLogoUrl} alt="theme" className='theme-logo' />
                </ThemeBtn>
                <h1 className={`${heading}`}>Simple, traffic-based pricing</h1>
                <p className='top-para'>Sign-Up for our 30-day trail. No credit card required</p>
                <PricingContent theme={isDarkTheme} >
                    <div className='amount-section'>
                        <p className='page-views'>100K PAGEVIEWS</p>
                        <input type='range' min={0} max={100} value={rangeValue} onChange={this.onChangeSlider} className='range-slider mobile' />
                        <div className='rate'>
                          <Amount theme={isDarkTheme}>${rangeValue}.00</Amount>
                          <p className='span-txt'>/month</p>
                        </div>
                    </div>
                    <input type='range' min={0} max={100} value={rangeValue} onChange={this.onChangeSlider} className='range-slider desktop' />
                    <div className='billing-section'>
                        <p className='billing-txt'>Monthly Billing</p>
                        <label className='switch'>
                          <Switch checkedIcon="" width={50} uncheckedIcon="" onColor="#2ef2aa" onChange={this.handleChange} checked={this.state.checked} />
                        </label>
                        <p className='billing-txt'>Yearly Billing</p>
                        <p className='discount'>25% discount</p>
                    </div>
                    <hr className='line' />
                    <div className='bottom-section'>
                        <ul className='list'>
                            <li className='li'>
                              <FaCheck className='tick-icon' />
                              <p className='toggle-txt'>Unlimited websites</p>
                            </li>
                            <li className='li'>
                              <FaCheck className='tick-icon' />
                              <p className='toggle-txt'>100% data ownership</p>
                            </li>
                            <li className='li'>
                              <FaCheck className='tick-icon' />
                              <p className='toggle-txt'>Email reports</p>
                            </li>
                        </ul>
                        <button className='trail-btn'>Start my trail</button>
                    </div>
                </PricingContent>
            </PricingContainer>
        )
    }
}

export default Pricing