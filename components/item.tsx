import { FC, ReactNode, useState } from 'react'

interface Props {
    name: string
    children: ReactNode
}

const Item: FC<Props> = ({ name, children }) => {
    const [showChildren, setShowChildren] = useState(false)
    return (
        <>
            <li onClick={() => setShowChildren(prevState => !prevState)} style={{ cursor: children ? 'pointer' : 'default', listStyleType: children ? showChildren ? 'disclosure-open' : 'disclosure-closed' : 'none' }}>{name}</li>
            {showChildren ? children : null}
        </>
    )
}

export default Item