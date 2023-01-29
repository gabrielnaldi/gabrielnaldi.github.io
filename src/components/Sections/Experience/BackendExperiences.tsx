import Fade from 'react-reveal/Fade';
import { frontendExperiencesList } from '../../../utils/experiences';
import { ExperienceElement } from './ExperienceElement';

export function BackendExperiences() {
    return (
        <Fade right>
            <div className="bg-card rounded-3xl flex flex-col gap-8 items-center py-6 px-4 border border-transparent hover:border-main duration-300">
                <div className="">
                    <h2 className="text-main text-lg font-semibold -tracking-wide">
                        Backend Development
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-h-[250px] overflow-y-auto over">
                    {frontendExperiencesList.map(experience => {
                        return (
                            <ExperienceElement key={experience.title} title={experience.title} level={experience.level} />
                        )
                    })}
                </div>
            </div>
        </Fade>
    )
}