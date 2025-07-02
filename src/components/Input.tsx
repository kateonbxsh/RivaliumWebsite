export default function Input({ className, ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {

    return <input
        {...props}
        className={
            "secondary-text bg-zinc-100/[0.8] text-zinc-600 placeholder-zinc-800/[0.5] text-xs sm:text-sm md:text-lg p-2 border border-zinc-800/[0.6] focus:outline-none focus:border-sky-400"
            + " " + className
        }
    />

}