export type Level = 'Basic' | 'Intermediate' | 'Experienced';


export interface ExperienceData {
    title: string;
    level: Level;
}

export interface LooseObject {
    [key: string]: any;
}