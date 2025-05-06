import Button from "./Button/Button.jsx";

export default function TabsSection( { active, onChange }) {
    return(
        <section>
            <Button
                isActive={active === 'main'} // это текущая вкладка (feedback или main)
                onClick={() => onChange('main')} // будет true только у выбранной кнопки
                // onChange — это setTab из App.jsx
            >
                Главная
            </Button>
            <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
        </section>
    )
}