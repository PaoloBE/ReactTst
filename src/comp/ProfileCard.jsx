import {useState} from 'react'

export default function ProfileCard({names, username, initFollow = false}) {
    const [isFollow, setFollow] = useState(initFollow);
    const [isHover, setHover] = useState(false);
    const txtBttn = !isFollow ? 'Seguir' : isHover? 'Dejar de seguir' : 'Siguiendo'
    const classBttn = isFollow ? 'cardBttn cardBttnF' : 'cardBttn cardBttnUF'

    return (
        <article className="articleBody">  
            <header>
                <img src={`https://unavatar.io/github/${username}`} alt="Profile Image" />
            </header>
            <div>
                <strong>{names}</strong>
                <span>@{username}</span>
            </div>
            <aside>
                <button onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}
                onClick={() => setFollow(!isFollow)}
                className={classBttn}>{txtBttn}</button>
            </aside>
        </article>        
    )
}
