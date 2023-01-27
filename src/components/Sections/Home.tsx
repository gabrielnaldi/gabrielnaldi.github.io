import { Description } from "../Description"
import Image from '../../assets/profile-pic.png'
import { ProfilePicture } from "../ProfilePicture"

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

export function Home() {
    return (
        <section
            id="home"
            className="w-full pt-32 px-4 flex items-center justify-between"
        >
            <Fade left>
                <Description />
            </Fade>
            <Zoom>
                <ProfilePicture source={Image} />
            </Zoom>
        </section>
    )
}