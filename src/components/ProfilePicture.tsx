interface ProfilePictureProps {
    source: string;
}

export function ProfilePicture({ source }: ProfilePictureProps) {
    return (
        <div className="rounded-full max-w-[380px] overflow-hidden">
            <img src={source} alt="" className="object-fill" />
        </div>
    )
}