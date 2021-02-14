import React, { Fragment, useState } from 'react'
import Error from './Error';





export const Question = ({saveBudget,saveRemaining}) => {

    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false);
    



    //funtions

    const defineBudget = e =>{
        //console.log( parseInt(e.target.value));
        saveAmount(parseInt(e.target.value,10));
    }

    //submit
    const addBudge = e => {
       e.preventDefault();

       //validation
       if(amount < 1 || isNaN(amount)){
           saveError(true);
           return;
       }
       saveError(true);
       saveBudget(amount);
       saveRemaining(amount);


       
    }

    return (
        <Fragment>
            <h2 className="Add-your-budget animate__animated animate__fadeInUp ">Add your budget</h2>
            
            <form 
                className="animate__animated animate__fadeInUp"
                onSubmit={addBudge}
                >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Budget"
                    onChange={defineBudget}
                />

                <input
                   type="submit"
                   className="button-primary u-full-width"
                   value="define"
                />
            </form>

            {error ? <Error message="The budget is incorrect"/>: null}
        </Fragment>
    )
}
