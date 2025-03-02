import { useState } from "react";

export function TwitterFollowCard({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const buttonMessage = isFollowing ? 'Siguiendo' : 'Seguir';
    const followClass = isFollowing ? 'tw-followCard-button following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCardHeader">
                <img src = {`https://unavatar.io/${userName}`} alt="avatar" />
                <div className="tw-followCardHeaderInfo">
                    <h2>{children}</h2>
                    <h2>@{userName}</h2>
                </div>
            </header>
            <aside className="tw-followCardAsideButton">
                <button className={followClass} onClick={handleClick}>
                    <span className="tw-followCard-button-text">{buttonMessage}</span>
                    <span className="tw-followCard-button-stop-following">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}