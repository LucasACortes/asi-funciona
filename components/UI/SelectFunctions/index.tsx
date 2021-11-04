import type { FunctionComponent } from 'react'

interface Props {
    functions: string[]
}

const SelectFunctions: FunctionComponent<Props> = ({ functions }) => {
    return (
        <select>
            {functions.map(fn => 
                <option key={fn}>{fn}</option>
            )}
        </select>
    )
}

export default SelectFunctions