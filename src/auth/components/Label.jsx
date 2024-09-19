
export const Label = ( {children, htmlFor, textWhite = false}) => {
  return (
    <label
    htmlFor={htmlFor}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${textWhite ? 'text-white' : ''}`}>
        {children}
    </label>
)
}