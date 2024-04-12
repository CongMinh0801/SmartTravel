import { Inter } from 'next/font/google';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import './globals.css';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Smart Travel',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex">
                    <Sidebar />
                    <div className="grow pl-16 lg:pl-0">
                        <div className="content bg-white">
                            <Header />
                            <div>{children}</div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
