import "./Button.css"

export default function Button({ children, onClick, isActive }) {
    return (
        <button
            className={`buttonR ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {children}
        {/*    Текст внутри кнопки  */}
        </button>
    );
}