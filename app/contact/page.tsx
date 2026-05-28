import { StaticPage } from '@/components/common/StaticPage'

export default function ContactPage() {
    return (
        <StaticPage
            title="Contact Us"
            description="Reach out with support questions, partnership ideas, or feedback about the game catalog and site experience."
            sections={[
                {
                    title: 'Support',
                    content: 'For game listing issues, broken links, or content questions, use this page to start the conversation.',
                },
                {
                    title: 'Business',
                    content: 'For partnerships, sponsorships, or general business inquiries, this is the best route to get in touch.',
                },
            ]}
            links={[
                { href: '/about', label: 'About Us' },
                { href: '/sitemap', label: 'Sitemap' },
            ]}
        />
    )
}
