import styled from 'styled-components'

export const Name = styled.h2`
  text-transform: capitalize;
`

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`

export const StatsWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
`

export const StatsItem = styled.div`
  display: flex;
  & + & {
    margin-top: 12px;
  }
`

export const StatsParam = styled.div`
  text-transform: capitalize;
  & + & {
    margin-left: 8px;
  }
`
