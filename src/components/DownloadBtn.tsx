interface DownloadBtnProps {
    title: string;
}

export function DownloadBtn({ title }: DownloadBtnProps) {
    return (
        <button className="bg-main text-white px-5 py-2 border border-transparent text-base 
        font-medium tracking-[2px] duration-300 shadow-btnMain shadow-white hover:bg-white hover:text-main hover:shadow-btnSecondary">
            {title}
        </button>
    )
}