import { StaticPage } from '@/components/common/StaticPage'

export default function AboutPage() {
    return (
        <StaticPage
            title="About Us"
            description="CrazyGames is a browser-first gaming platform built to make free online play fast, simple, and accessible on any device."
            sections={[
                {
                    title: 'What we do',
                    content: 'We collect and surface free-to-play browser games so players can jump in instantly without downloads or installs.',
                },
                {
                    title: 'Our goal',
                    content: 'We focus on lightweight, ad-friendly, high-performance game discovery that works well across desktop and mobile.',
                },
            ]}
            links={[
                { href: '/contact', label: 'Contact Us' },
                { href: '/blog', label: 'Blog' },
            ]}
        />
    )
}
