
export const Button = ({children, colorPrimary = true, onClick}) => {
  return (
    <button onClick={onClick} className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${colorPrimary ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-white text-primary hover:bg-white/90'}   h-10 px-4 py-2 w-full`}>
        {children}
    </button>
  )
}
