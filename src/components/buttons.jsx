function Button({ value, setDiff, diff }) {
  return (
    <div
      className={`button ${diff === value ? 'chosenOne' : ''}`}
      id={value}
      onClick={() => {
        setDiff(value)
      }}
    >
      {value}
    </div>
  )
}

export default Button
