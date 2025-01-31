import { faStar as OutlineStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as FilledStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RatingProps {
    label: string;
    score: number;
}

export default function Rating(props: RatingProps)
{
    return (
        <>
            <p className="h5 fw-bold m-0">
                {props.label}
                { props.score == 5 && (
                    <FontAwesomeIcon icon={faTrophy} fixedWidth className="text-warning ms-1" />
                ) }
            </p>
            <ul className="list-inline m-0 p-0">
                { [...Array(5)].map((_: null, i: number) => (
                    <li className="list-inline-item" key={i}>
                        <FontAwesomeIcon icon={(i+1) > props.score ? OutlineStar : FilledStar} fixedWidth />
                    </li>
                )) }
            </ul>
        </>
    );
}