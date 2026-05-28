import Link from 'next/link'
import {
    Facebook,
    Instagram,
    Linkedin,
    PencilRuler,
    Search,
    Twitter,
    User,
    Heart,
    LayoutGrid,
    ShieldCheck,
    FileText,
} from 'lucide-react'

const aboutLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/sitemap', label: 'Sitemap' },
]

const socialLinks = [
    { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
    { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
    { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
]

export function Footer() {
    return (
        <footer className="mt-10 bg-[linear-gradient(180deg,#1f5ef5_0%,#1752ee_100%)] text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/10 px-6 py-6 backdrop-blur-sm lg:px-8">
                    <p className="text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
                        CrazyGames is your one-stop online gaming platform where you can play games online for free with zero downloads.
                        Enjoy a growing library of browser games across popular categories like sports, shooting, strategy, arcade, and
                        multiplayer games. Each game is powered by HTML5 technology, ensuring fast performance and smooth gameplay on any
                        device.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1752ee] shadow-lg shadow-black/10">
                                <span className="text-sm font-black tracking-wide">CG</span>
                            </div>
                            <h3 className="text-3xl font-extrabold tracking-tight">CrazyGames</h3>
                        </div>
                        <p className="mt-6 max-w-md text-base leading-8 text-white/90">
                            Play thousands of free online games instantly without download or registration on desktop, mobile, tablets,
                            and iPads.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold">About</h4>
                        <nav className="mt-6 flex flex-col gap-4 text-lg text-white/95">
                            {aboutLinks.map(link => {

                                return (
                                    <Link key={link.href} href={link.href} className="inline-flex items-center gap-3 transition-colors hover:text-white/80">
                                        <span >{link.label}</span>
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold">Follow Us</h4>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {socialLinks.map(link => {
                                const Icon = link.icon
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-base font-semibold text-[#1752ee] transition-transform hover:-translate-y-0.5 hover:bg-white/95"
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{link.label}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/20 pt-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="text-sm text-white/85">Copyright © {new Date().getFullYear()} CrazyGames</div>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-white/85">
                            <Link href="/disclaimer" className="transition-colors hover:text-white">
                                Disclaimer
                            </Link>
                            <Link href="/terms" className="transition-colors hover:text-white">
                                Terms and conditions
                            </Link>
                            <Link href="/privacy" className="transition-colors hover:text-white">
                                Privacy policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
