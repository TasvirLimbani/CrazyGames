import { StaticPage } from '@/components/common/StaticPage'

export default function DisclaimerPage() {
    return (
        <StaticPage
            title="Disclaimer"
            description="This site provides game listings and links for informational and entertainment purposes."
            sections={[
                {
                    title: 'Content accuracy',
                    content: 'Game descriptions, thumbnails, and availability may come from third-party sources and can change over time.',
                },
                {
                    title: 'External links',
                    content: 'Links to external sites are provided for convenience and are not controlled by CrazyGames.',
                },
            ]}
            links={[
                { href: '/terms', label: 'Terms and Conditions' },
                { href: '/privacy', label: 'Privacy Policy' },
            ]}
        />
    )
}
