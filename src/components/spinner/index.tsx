export function Spinner(){
    return (
        <div className="w-16 h-16">
            <div className="w-full h-full p-1 border-[3px] border-[#162534] rounded-full border-t-white border-b-firstColor animate-rotate-slow">
                <div className="w-full h-full border-[3px] border-[#162534] rounded-full border-t-firstColor border-b-white animate-rotate-fast" />
            </div>
        </div>
    )
}