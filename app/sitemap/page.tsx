import Link from 'next/link'
import { StaticPage } from '@/components/common/StaticPage'

const sitemapLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms and Conditions' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/search', label: 'Search' },
    { href: '/wishlist', label: 'Wishlist' },
    { href: '/profile', label: 'Profile' },
]

export default function SitemapPage() {
    return (
        <StaticPage
            title="Sitemap"
            description="Find the main pages on the site in one place. Every item below opens a working route."
            sections={[]}
        >
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sitemapLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </StaticPage>
    )
}
