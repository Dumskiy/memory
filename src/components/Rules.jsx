import { GAME_TYPES } from '../settings.js';

export function Rules({ onStart }) {
    const handleStart = (type) => {
        onStart(type);
    };

    return (
        <section className="rules container">
            {/* <h2>Добро пожаловать!</h2> */}
            <h1 className="rules__heading">Memory — игра для тренировки визуальной памяти</h1>
            <div className="rules__panel">
                <h2 className="rules__title">Правила игры</h2>
                <ul className="rules__list">
                    <li className="rules__item">В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
                    <li className="rules__item">Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
                    <li className="rules__item">Если они совпадают – игрок забирает их и получает ещё один ход.</li>
                </ul>
            </div>
            {GAME_TYPES.map(({ type, text }) => (
                <button
                    key={type}
                    className={`rules__button rules__button--${type}`}
                    onClick={() => handleStart(type)}
                >
                    {text}
                </button>
            ))}
        </section>
    );
}
