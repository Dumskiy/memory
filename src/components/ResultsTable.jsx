export function ResultsTable({ current, results }) {
    const sortedResults = [...results, { name: 'Ваш результат', stepsCount: current }]
        .sort((a, b) => a.stepsCount - b.stepsCount);

    return (
        <table className="result-table">
            <thead>
                <tr className="result-table__row">
                    <th>Место</th>
                    <th>Имя</th>
                    <th>Шаги</th>
                </tr>
            </thead>
            <tbody>
                {sortedResults.map(({ name, stepsCount }, i) => (
                    <tr key={name} className={`result-table__row ${stepsCount === current ? 'result-table__row--active' : ''}`}>
                        <td>{i + 1}</td>
                        <td>{name}</td>
                        <td>{stepsCount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
