export default function Card({ head, quantifier, foot } : {head: string, quantifier: string, foot: string}) {
    return (
        <div className="flex flex-col items-center justify-center relative min-h-24 border-2 rounded-xl p-5 w-full text-center aspect-[7/3] bg-black">
            <h3 className="text-xl text-center -top-4 absolute text-nowrap bg-black px-2">
                {head}
            </h3>
            <p className="text-3xl text-center font-extrabold">
                {quantifier}
            </p>
            <h4 className="text-xl -bottom-3 absolute text-nowrap bg-black px-2">{foot}</h4>
        </div>
    );
}