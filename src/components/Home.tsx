import { Description } from "./Description"
import Image from '../assets/profile-pic.png'
import { ProfilePicture } from "./ProfilePicture"

export function Home() {
    return (
        <section
            id="home"
            className="w-full pt-32 px-4 flex items-center justify-between"
        >
            <Description />
            <ProfilePicture source={Image} />
        </section>
    )
}