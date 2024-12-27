import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

export const metadata = {
    title: 'Next.js Course',
    description: 'A course on Next.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <head>
                <title>{metadata.title}</title>
                <meta name='description' content={metadata.description} />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
