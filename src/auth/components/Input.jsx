
export const Input = ({placeholder, value, name, type, required=true, autoComplete='', onChange, isValid, showErrors = false}) => {
  return (
    <input
     placeholder={placeholder}
     value={value}
     name={name}
     type={type}
     autoComplete={autoComplete}
     onChange={onChange}
     className={`transition-all duration-200 ease-in-out flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ${isValid || !showErrors ? 'border-input bg-background ring-primary' : 'bg-background_error ring-error'}  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}/>
  )
}
