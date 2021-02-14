import React,{useState}from 'react'

export const Form = () => {
    return (
      <form>
          <h2>Add your financial expenses</h2>
          <div className="campo">
              <label>Name:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Example. Food"
                />
          </div>

          <div className="campo">
              <label>Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Example. $500"
                />
          </div>

          <input
             type="submit"
             className="button-primary u-full-width"
             value="add expense"
          />
      </form>  
    );
}
