import { StaticPage } from '@/components/common/StaticPage'

export default function PrivacyPage() {
    return (
        <StaticPage
            title="Privacy Policy"
            description="This page explains how the site handles browsing data, usage analytics, and basic account-related information."
            sections={[
                {
                    title: 'What we collect',
                    content: 'We may collect basic analytics, device information, and form submissions to improve the site experience.',
                },
                {
                    title: 'How it is used',
                    content: 'Data is used to maintain the service, improve performance, and support relevant site features.',
                },
            ]}
            links={[
                { href: '/terms', label: 'Terms and Conditions' },
                { href: '/disclaimer', label: 'Disclaimer' },
            ]}
        />
    )
}
