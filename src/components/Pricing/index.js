import {Component} from 'react'
import React from "react"
import Switch from "react-switch"
import { FaCheck } from "react-icons/fa"
import './index.css'

class Pricing extends Component{
    state = {rangeValue: 50}

    onChangeSlider = event => this.setState({rangeValue: event.target.value})

    render(){
        const {rangeValue} = this.state
        return (
            <div className='pricing-container'>
                <h1 className='heading'>Simple, traffic-based pricing</h1>
                <p className='top-para'>Sign-Up for our 30-day trail. No credit card required</p>
                <div className='pricing-content'>
                    <div className='amount-section'>
                        <p className='page-views'>100K PAGEVIEWS</p>
                        <input type='range' min={0} max={100} value={rangeValue} onChange={this.onChangeSlider} className='range-slider mobile' />
                        <div className='rate'>
                          <h1 className='amount'>${rangeValue}</h1>
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
                </div>
            </div>
        )
    }
}

export default Pricing