import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type StaticPageProps = {
    title: string
    description: string
    sections?: Array<{
        title: string
        content: string
    }>
    links?: Array<{
        href: string
        label: string
    }>
    children?: ReactNode
}

export function StaticPage({ title, description, sections = [], links = [], children }: StaticPageProps) {
    return (
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Link>

                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">CrazyGames</p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">{description}</p>

                {sections.length > 0 && (
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {sections.map(section => (
                            <section key={section.title} className="rounded-2xl border border-border/70 bg-background/60 p-5">
                                <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.content}</p>
                            </section>
                        ))}
                    </div>
                )}

                {links.length > 0 && (
                    <div className="mt-10 flex flex-wrap gap-3">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/70"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}

                {children}
            </div>
        </div>
    )
}
