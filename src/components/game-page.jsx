import React from 'react';
import { useGame } from '../use-game.js';
import { Modal } from './modal.jsx';
import { Grid } from './grid.jsx';
import { Progress } from './progress.jsx';

export function GamePage({ images = [], onShowResults, gameType }) {

    const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    } = useGame(images);

    const handleResultsClick = () => {
        onShowResults(stepsCount);
    };

    return (
        <section className="game container">
            <Progress value={finishedItems.length / 2} max={images.length / 2} />
            <div className="steps">Шаг {stepsCount}</div>
            <Grid
                images={images}
                gameType={gameType}
                finishedItems={finishedItems}
                checkItems={checkItems}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">Победа!</h3>
                    <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
                    <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
                </Modal>
            )}
        </section>
    );
}
