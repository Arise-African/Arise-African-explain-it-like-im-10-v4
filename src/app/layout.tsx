import type { Metadata } from 'next'; import './globals.css';
export const metadata: Metadata = { title: 'Explain It Like I’m 10', description: 'Learn anything in simple, friendly lessons.', manifest: '/manifest.webmanifest' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
