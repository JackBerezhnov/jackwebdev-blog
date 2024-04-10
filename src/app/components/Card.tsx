const Card = () => {
    return(
       <div className="card flex justify-between items-center mt-4 w-96 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <div className="pl-4">
                <h2>Card Title</h2>
                <p>Card Description</p>
            </div>
       </div>  
    );
}

export default Card;