import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FaBitcoin } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {

  return (
      <IconContext.Provider value={{color: '#fff', size: 64}}>
    <div>
        <div className="pricing__section">
            <div className="pricing__wrapper">
                <div className="pricing__container">
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaBitcoin />
                            </div>
                            <h3>Bitcoin</h3>
                            <h4>$42043.29</h4>
                            <p>at this moment</p>
                            <ul className="pricing__container-features">
                                <li>Transfer comission:</li>
                                <li>0.05% per Transfer</li>
                                <li>$1.450.000 cash limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Make a Transfer
                            </Button>
                        </div>
                    </Link>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaCoins />
                            </div>
                            <h3>My Balance</h3>
                            <h4>$0.49</h4>
                            <p>in USD($) at the moment</p>
                            <ul className="pricing__container-features">
                                <li>Top up your balance</li>
                                <li>Link your wallet to a credit card</li>
                                <li>Add payment method</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Enter the Card 
                            </Button>
                        </div>
                    </Link>
                    <Link to="/sign-up" className='pricing__container-card'>
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaEthereum />
                            </div>
                            <h3>Ethereum</h3>
                            <h4>$9231.69</h4>
                            <p>at this moment</p>
                            <ul className="pricing__container-features">
                                <li>Transfer comission:</li>
                                <li>0.08% per transfer</li>
                                <li>$900.000 cash limit</li>
                            </ul>
                            <Button buttonSize='btn--wide' buttonColor='primary'>
                                Make a Transfer
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default Pricing