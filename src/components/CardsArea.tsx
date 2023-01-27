import Fade from 'react-reveal/Fade';
import { Card } from './Card';

export function CardsArea() {
    return (
        <Fade right>
            <div className="grid grid-cols-3 gap-5">
                <Card icon='medal' title='Experience' subtitle='2+ Years&nbsp;working' />
                <Card icon='start' title='Projects' subtitle='20+ Completed' />
                <Card icon='users' title='Clients' subtitle='10+ National' />
            </div>
        </Fade>
    )
}