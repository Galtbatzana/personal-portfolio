export const Card = ({props}) => {
    console.log(props);

    return (
        <div className="bg-green-500">
            <div>
                Card
            </div>
            <div>
                {props.startDate}
                title
            </div>
        </div>
    )
};

export default Card;