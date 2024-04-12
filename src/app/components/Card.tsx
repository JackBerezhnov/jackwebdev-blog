const Card = () => {
    return(
       <div className="card flex justify-between items-center mt-10 w-96 shadow-lg">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <div className="pl-4">
                <h2>Card Title</h2>
                <p>Card Description Here and here too</p>
            </div>
       </div>  
    );
}

export default Card;