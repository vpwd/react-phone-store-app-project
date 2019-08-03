import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context';
import Cartlist from './Cartlist';
import CartTotals from './CartTotals.js'

export default class Cart extends Component {
    render() {
        return (
                <section>
                    <ProductConsumer>
                        {value => {
                            const {cart} = value;
                            console.log({cart});
                            if(cart.length > 0){
                                return(
                                    <React.Fragment>
                                    <Title name="your" title="cart"></Title>
                                    <CartColumns></CartColumns>
                                    <Cartlist value={value}></Cartlist>
                                    <CartTotals value={value} history={this.props.history}></CartTotals>
                                    </React.Fragment>
                                );
                            }else{
                                return <EmptyCart></EmptyCart>;
                            }
                        }}
                    </ProductConsumer>    
                </section>
        )
    }
}
