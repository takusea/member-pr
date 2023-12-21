type Props = {
  step: string,
  children: string
}

function Header(props: Props) {
  return (
    <>
      <div>
        <div>Step { props.step }</div>
        <h1>{ props.children }</h1>
      </div>
    </>
  )
}

export default Header
