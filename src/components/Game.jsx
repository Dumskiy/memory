import { useGame } from '../use-game.js';
import { Modal } from './Modal.jsx';
import { Cards } from './Cards.jsx';
import { Progress } from './Progress.jsx';

export function Game({ images = [], onShowResults, gameType }) {

    const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    } = useGame(images);

    return (
        <section className="game container">
            <Progress
                value={finishedItems.length / 2}
                max={images.length / 2}
                stepsCount={stepsCount}
            />
            <Cards
                images={images}
                gameType={gameType}
                finishedItems={finishedItems}
                checkItems={checkItems}
            />
            {isWin && <Modal onShowResults={onShowResults} stepsCount={stepsCount}/>}
        </section>
    );
}
