export default function CardContainer({ children, className } : { children: React.ReactNode, className?: string}) {
    return (
        <div className={`flex flex-row gap-4 items-center justify-around w-full my-5 px-20 ${className}`}>
            {children}
        </div>
    );
}