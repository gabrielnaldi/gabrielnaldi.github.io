import { TfiMedallAlt } from 'react-icons/tfi'
import { VscFolderActive } from 'react-icons/vsc'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { SectionTitle } from './section-title'

export const AboutSection: React.FC = () => {
    return (
        <section id='about' className="pt-16 mb-16">
            <div>
                <SectionTitle title='About me' subtitle='My' postSubtitle='Intro' />
                <ul className="flex flex-wrap justify-center items-center gap-6 mb-8 max-w-2xl mx-auto">
                    <li className='bg-containerColor flex flex-col items-center justify-center gap-1 w-full max-w-[180px] p-4 rounded-lg border-[1.4px] border-containerColor hover:cursor-default hover:border-firstColor hover:brightness-110 transition-all duration-300 box-shadow'>
                        <TfiMedallAlt size={32} fill='#9336B4' />
                        <h2 className='font-bold'>Experience</h2>
                        <p className='text-textColor'>4+ Years working</p>
                    </li>
                    <li className='bg-containerColor flex flex-col items-center justify-center gap-1 w-full max-w-[180px] p-4 rounded-lg border-[1.4px] border-containerColor hover:cursor-default hover:border-firstColor hover:brightness-110 transition-all duration-300 box-shadow'>
                        <VscFolderActive size={32} fill='#9336B4' />
                        <h2 className='font-bold'>Projects</h2>
                        <p className='text-textColor'>30+ Completed</p>
                    </li>
                    <li className='bg-containerColor flex flex-col items-center justify-center gap-1 w-full max-w-[180px] p-4 rounded-lg border-[1.4px] border-containerColor hover:cursor-default hover:border-firstColor hover:brightness-110 transition-all duration-300 box-shadow'>
                        <AiOutlineUsergroupAdd size={32} fill='#9336B4' />
                        <h2 className='font-bold'>Clients</h2>
                        <p className='text-textColor'>20+ National</p>
                    </li>
                </ul>
                <div className="flex justify-center mb-12 max-w-2xl mx-auto">
                    <p className="text-textColor text-center text-sm leading-6 md:text-left">
                        I like to describe myself as ambitious and passionate person when it comes to work.
                        I love what I do and I'm always looking for opportunities to grow.
                        That's why I constantly challenge myself and create goals. For example, in my last job, I learned Flutter to improve my technical abilities and soon I was able to lead the company Mobile Team to work with this new technology in several new projects.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a href="" className="py-4 px-6 bg-firstColor border-[1.4px] border-firstColor rounded-lg font-bold transition-colors duration-300 hover:bg-white hover:text-firstColor">Download CV</a>
                </div>
            </div>
        </section>
    )
}