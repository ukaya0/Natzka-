import { FC } from 'react'
import Item from './item'

interface Props {
    strings: {
        [key: string]: {}
    }
}

const List: FC<Props> = ({ strings }) => (
    <>
        {Object.keys(strings).map((s) => {
            return (
                <ul key={s}>
                    <Item name={s}>
                        {Object.keys(strings[s]).length ? <List strings={strings[s]} /> : null}
                    </Item>
                </ul>
            )
        })}
    </>
)

export default List