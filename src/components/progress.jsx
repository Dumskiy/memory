export function Progress({ value, max, stepsCount }) {
    return (
        <div className="progress">
            <div className="progress__wrapper">
                <div className="progress__bar" style={{ width: `${value / max * 100}%` }}></div>
            </div>
            <p className="progress__result">Открыто {value} / {max}</p>
            <p className="progress__steps">Шаг {stepsCount}</p>
        </div>
    );
}
