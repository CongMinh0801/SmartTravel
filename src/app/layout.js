import { Inter } from 'next/font/google';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Smart Travel',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex relative">
                    <Sidebar />
                    <div className="grow">
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
