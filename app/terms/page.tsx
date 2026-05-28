import { StaticPage } from '@/components/common/StaticPage'

export default function TermsPage() {
    return (
        <StaticPage
            title="Terms and Conditions"
            description="These terms describe how you may use the CrazyGames website and the content available through it."
            sections={[
                {
                    title: 'Use of the site',
                    content: 'Please use the site lawfully and respect the content, branding, and any applicable third-party rights.',
                },
                {
                    title: 'Availability',
                    content: 'The site and its game listings may change or be unavailable at any time without prior notice.',
                },
            ]}
            links={[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/disclaimer', label: 'Disclaimer' },
            ]}
        />
    )
}
