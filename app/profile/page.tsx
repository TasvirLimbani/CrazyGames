import { Header } from '@/components/layout/Header'
import { SidebarNav } from '@/components/layout/SidebarNav'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { User, Mail, Shield, LogOut } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <div className="flex flex-1">
        <SidebarNav />

        <main className="flex-1 overflow-auto">
          <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="mb-8">
              <Link href="/" className="text-primary hover:text-accent mb-6 inline-flex items-center gap-1">
                ← Back
              </Link>
              <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>

            {/* Profile Card */}
            <div className="bg-card border border-border rounded-lg p-8 mb-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground">John Doe</h2>
                  <p className="text-muted-foreground">john@example.com</p>
                  <p className="text-sm text-muted-foreground mt-2">Member since January 2024</p>
                </div>
              </div>

              <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                Edit Profile
              </Button>
            </div>

            {/* Account Settings */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email & Password
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                    <p className="text-foreground">john@example.com</p>
                  </div>
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                    Change Password
                  </Button>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Privacy & Security
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                    <span className="text-foreground">Make my profile public</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                    <span className="text-foreground">Allow notifications</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                    <span className="text-foreground">Save game progress</span>
                  </label>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Account Stats
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Games Played</p>
                    <p className="text-2xl font-bold text-primary">28</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Achievements</p>
                    <p className="text-2xl font-bold text-accent">12</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Playtime</p>
                    <p className="text-2xl font-bold text-yellow-500">42h</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <LogOut className="w-5 h-5 text-red-500" />
                  Danger Zone
                </h3>
                <p className="text-muted-foreground mb-4">Once you delete your account, there is no going back.</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Delete Account</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
