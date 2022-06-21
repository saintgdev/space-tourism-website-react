import styled from 'styled-components'

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: var(--ls-barlow-2);
  font-family: var(--font-barlow-2);
  font-size: 1em;
  font-weight: 400;
  display: flex;
  column-gap: 1em;
  justify-content: center;
  &::before{
    content: '${props => props.id}';
    font-weight: bold;
    opacity: .25;
  }
`

function PageTitle({ pageId, children }) {
  return (
    <Title id={pageId}>{children}</Title>
  )
}

export default PageTitle