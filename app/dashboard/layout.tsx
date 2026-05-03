export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <section> 
            <aside>
                <h2>Dashboard Sidebar</h2>
                <ul>
                    <li>Overview</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </aside>
        <div>
            {children}
        </div>
        </section>
    )
}