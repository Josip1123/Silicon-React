import Quotes from "/assets/img/quotes.svg"

function ClientTestemonial(props) {

    let numberOfStars = [];
    function createStarsRating(stars) {
        for (let i = 0; i < stars; i++) {
            numberOfStars.push(<span className="gold-star" key={i}>star_rate</span>);
        }
            for (let j = stars; j < 5; j++) {
                numberOfStars.push(<span className="grey-star" key={j}>star_rate</span>);
            }
    }

    createStarsRating(props.starRating)



    return (
        <div className="client-card">
            <span className="stars material-symbols-outlined">
                {numberOfStars}
            </span>
            <p className="review">{props.comment}</p>
            <div className="user-profile">
                <div className="profile-img">
                    <img src={props.avatarUrl} alt="Image of the user" />
                </div>
                <div className="user-info">

                    <p className="user-name">{props.author}</p>
                    <p className="title">{props.jobRole}</p>
                </div>
            </div>
            <div className="quotes-icon">
                <img src={Quotes} alt="" />
            </div>
        </div>
    )
}

export default ClientTestemonial