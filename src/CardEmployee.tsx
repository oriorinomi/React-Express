interface EmployeeCardProps {
    props: {
        name: {
            first: string;
            last: string;
        };

        email: string;
        picture: {
            medium: string;
        };
    }
}

function EmployeeCard({ props }: EmployeeCardProps) {

    return(

        <figure className="DisplayEmployee">
            <img src={props.picture.medium} alt={props.name.first} />
            <figcaption>
                <strong>{props.name.first} {props.name.last}</strong>
                {props.email}
            </figcaption>
        </figure>
    )
}

export default EmployeeCard; 