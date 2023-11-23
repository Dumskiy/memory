import React from 'react';
import { AppRoute } from '../settings.js';
import { GamePage } from './game-page.jsx';
import { InitialPage } from './initial-page.jsx';
import { ResultsPage } from './results-page.jsx';

export function App({ getImages, results }) {
    const [page, setPage] = React.useState(AppRoute.Initial);
    const [result, setResult] = React.useState(0);
    const [images, setImages] = React.useState([]);
    const [gameType, setGameType] = React.useState(null);

    const showResults = (stepsCount) => {
        setResult(stepsCount);
        setPage(AppRoute.Results);
    };

    const handleReset = () => {
        setPage(AppRoute.Initial);
    };

    const handleStart = (type) => {
        setImages(getImages(type));
        setGameType(type);
        setPage(AppRoute.Game);
    };

    const getPage = (route) => {
        switch (route) {
            case AppRoute.Initial:
                return <InitialPage onStart={handleStart} />;
            case AppRoute.Game:
                return <GamePage images={images} gameType={gameType} onShowResults={showResults} />;
            case AppRoute.Results:
                return (
                    <ResultsPage
                        stepsCount={result}
                        onResetGame={handleReset}
                        results={results}
                    />
                );
            default:
                return null;
        }
    };

    return getPage(page);
}
