import { FC, useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledInput = styled.input`
  margin-top: 1rem;
`

const StyledSubmit = styled.input`
  margin-top: 1rem;
  width: 300px;
`

interface Props {
    setStrings: (strings: {
        [key: string]: {}
    }) => void
}

const Form: FC<Props> = ({ setStrings }) => {
    const [paths, setPaths] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const arr = paths.split(',').filter(Boolean)        
        const result = {};
    
        arr.forEach(path => {
            path.split('/').filter(Boolean).reduce((acc, value) => {
                if (!acc[value]) {
                    acc[value] = {}
                }
                
                return acc[value]
            }, result)
        });

        setStrings(result)
    }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Enter the paths separated by a comma:
        <StyledInput 
          type="text" 
          name="paths"
          placeholder="/root/test, /dev/null, /root/something/somewhere"
          onChange={(e) => setPaths(e.target.value)}
        />
      </StyledLabel>
      <StyledSubmit type="submit" />
    </StyledForm>
  )
}

export default Form