interface ExperienceCardType {
    title: string
    descriptionTitle: string
    description: string
}

interface ExperienceDialogType {
    company: string
    role: string
    period: string
}

interface ExperienceType {
    card: ExperienceCardType,
    dialog: ExperienceDialogType,
    image: {
        path: string,
        alt: string,
    },
    webpage: string,
}