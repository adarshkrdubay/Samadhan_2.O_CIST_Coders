import profilepic from './resized_image_200x200.jpg'

function Card(){
    return(
     <div className="card">
        <img className="Card-image" src = {profilepic} alt="profile pricture"></img>
        <h2 className="card-title">Vansh Jain</h2>
        <p className="card-text">Iam a 2nd year enigineering student</p>
      
     </div>
    );

}

export default Card 