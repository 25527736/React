import './Expensitem.css'

function Expenseitem(){
    return(
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>Car Information</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    );
}

export default Expenseitem;