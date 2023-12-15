import getDeclension from '@dubaua/get-declension';
import { ResultsTable } from './ResultsTable.jsx';

export function Result({ stepsCount, results, onResetGame }) {

    const stepsDeclension = getDeclension({ count: stepsCount, one: 'шаг', few: 'шага', many: 'шагов' });

    return (
        <section className="result container">
            <h2 className="result__title">Лучшие результаты:</h2>
            <p className="result__steps">Вы завершили игру за <b>{stepsDeclension}</b>, так держать!</p>
            <ResultsTable current={stepsCount} results={results} />
            <p className="result__question">Хотите попробовать ещё раз?</p>
            <button onClick={onResetGame} className="result__button button" type="button">
                <span>Новая игра</span>
            </button>
        </section>
    );
}
