import "./Button.css"

export default function Button( {children, buttonClicked} ) {


    // const enterClick = () => console.log("Вошёл СТРЕЛОЧНАЯ ФУНКЦИЯ");

    return (
        <button className="buttonR active"
                onClick={buttonClicked}
                // onMouseEnter={enterClick}
                // onDoubleClick={() => console.log("она уже внутри лежит")}
                // Инлайн способ
        >{children} </button>
    )
}