import './JournalItem.css'
export const JournalItem = () => {
    const title = 'Vorbereitung zur Kursaktualisierung';
    const date = new Date();
    const text = 'Heute habe ich den ganzen Tag damit verbracht...'
    return (
        <div className="journal-item">
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__date">{date.toDateString()}</div>
                <div className="journal-item__text">{text}</div>
            </h2>
        </div>
    )
}
