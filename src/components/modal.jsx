export function Modal({ onShowResults, stepsCount }) {

    const handleResultsClick = () => {
        onShowResults(stepsCount);
    };

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <h3 className="modal__caption">Победа!</h3>
                <p className="modal__description">Теперь давайте узнаем результаты этой партии</p>
                <button className="modal__button button" type="button" onClick={handleResultsClick}>
                    <span>Показать результаты</span>
                </button>
            </div>
        </div>
    );
}
