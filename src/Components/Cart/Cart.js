import classes from './Cart.module.css';



const Cart=()=>{


    const cartItem=(<ul className={classes['cart-items']}> {[ {
id:'c1' , name:'briyani' , amount:2 , price: 120

    }].map( (item)=>( <li>{item.name}</li>) )
    }



    </ul>)


    }

    return(
        <div> 
<div> className={classes.total}
    {cartItem}
    <span> Total Amount:</span>
<span>33.4 </span>
</div>

<div className={classes.actions}>
<button className={classes['.button--alt']}> close</button>
<button className={classes.button}>order</button>
</div>

</div>

    );

};

export default Cart;