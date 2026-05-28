import { StaticPage } from '@/components/common/StaticPage'

export default function BlogPage() {
    return (
        <StaticPage
            title="Blog"
            description="Read updates, game spotlights, platform news, and tips for discovering the best games on CrazyGames."
            sections={[
                {
                    title: 'Latest updates',
                    content: 'We share feature launches, new category additions, and curated picks for trending games.',
                },
                {
                    title: 'Guides and stories',
                    content: 'Expect simple walkthroughs, recommendations, and short articles around browser gaming.',
                },
            ]}
            links={[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
            ]}
        />
    )
}
