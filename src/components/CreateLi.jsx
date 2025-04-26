// function CreateLi({title, description}) {
export default function CreateLi(props){

    // console.log(props);
    return (
        <li className="li">
            {props.title} {props.description}
        </li>
    )
}
