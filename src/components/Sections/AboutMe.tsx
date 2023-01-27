import AboutPicture from '../../assets/aboutPicture.jpg'
import { Card } from '../Card';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export function AboutMe() {
    return (
        <section id="about" className="w-full py-6 flex flex-col items-center justify-center gap-6 px-4">
            <Fade bottom>
                <div className="flex flex-col justify-center items-center">
                    <span className="text-zinc-400">Get to Know</span>
                    <h2 className="text-main font-medium text-2xl">About me</h2>
                </div>
            </Fade>
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
                    <Fade right>
                        <div className="grid grid-cols-3 gap-5">
                            <Card icon='medal' title='Experience' subtitle='2+ Years&nbsp;working' />
                            <Card icon='start' title='Projects' subtitle='20+ Completed' />
                            <Card icon='users' title='Clients' subtitle='10+ National' />
                        </div>
                    </Fade>
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