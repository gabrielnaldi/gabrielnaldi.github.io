import AboutPicture from '../../assets/aboutPicture.jpg'

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { SectionHeader } from '../SectionHeader';
import { CardsArea } from '../CardsArea';

export function AboutMe() {
    return (
        <section id="about" className="overflow-hidden w-full py-6 flex flex-col items-center justify-center gap-6 px-4">

            <SectionHeader subtitle='Get to Know' title='About me' />

            <div className="w-full min-h-[390px] flex items-center justify-center gap-32">

                <Fade left>
                    <div className=''>
                        <div className='bg-main max-w-[330px] rounded-3xl'>
                            <div className="origin-center rotate-[10deg] rounded-3xl hover:rotate-[0deg] duration-500 overflow-hidden">
                                <img src={AboutPicture} alt="About picture" className='object-fit' />
                            </div>
                        </div>
                    </div>
                </Fade>

                <div className='max-w-[580px] flex flex-col gap-7'>
                    <CardsArea />
                    <Bounce right>
                        <p className='text-zinc-400 font-normal '>
                            I like to describe myself as ambitious and passionate person when it comes to work. I love what I do and I'm always looking for opportunities to grow. That's why I constantly challenge myself and create goals. For example, in my last job, I learned Flutter to improve my technical abilities and soon I was able to work with the Mobile Team in several projects.
                        </p>
                    </Bounce>
                    <Fade bottom>
                        <a className='text-white py-3 px-3 bg-main max-w-[120px] rounded-lg flex items-center justify-center border-2 border-transparent hover:bg-white hover:text-main hover:border-main duration-500' href="#contact">Let's talk</a>
                    </Fade>
                </div>
            </div>
        </section>
    );
}