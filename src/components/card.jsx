export function Card({ item, isVisible, isFinished, onCardClick }) {
    const { id, url, description } = item;
    const className = `${isVisible ? 'card--show' : ''
        } ${isFinished ? 'card--finished' : ''
        }`;

    const handleClick = () => {
        onCardClick(id);
    };

    return (
        <li onClick={handleClick} className={`card ${className}`}>
            <div className="card__image-wrapper">
                <img className="card__image"
                    width="204" height="144"
                    src={url}
                    alt={description}
                />
            </div>
        </li>
    );
}
