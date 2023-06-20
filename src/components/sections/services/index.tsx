import { SectionTitle } from "../section-title";
import { RiPagesLine } from 'react-icons/ri'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { BiServer } from 'react-icons/bi'
import { ServiceItem } from "./service-item";

export function ServicesSection() {
    return (
        <section id='services' className="min-h-section py-16">
            <div className="">
                <SectionTitle title="My services" subtitle="What I" postSubtitle="do" />
                <div className="mb-8">
                    <p className="text-center text-textColor">
                        Take a look at the next list. It illustrates some of the services I've developed over the years.
                    </p>
                </div>
                <ul className="grid gap-8 grid-cols-auto-300 justify-evenly">
                    <ServiceItem title='Web Developer' description="Development of customized web pages with the most up-to-date technologies and frameworks." icon={_ => <RiPagesLine size={48} fill="#9336B4" />} />
                    <ServiceItem title='Back-end Developer' description="Development of Node servers and databases with the most up-to-date frameworks and ORMs." icon={_ => <BiServer size={48} fill="#9336B4" />} />
                    <ServiceItem title='Services & APIs' description="Development of customized microservices that meet customer needs. In addition to APIs that follow all REST guidelines." icon={_ => <MdOutlineMiscellaneousServices size={48} fill="#9336B4" />} />
                </ul>
            </div>
        </section>
    )
}