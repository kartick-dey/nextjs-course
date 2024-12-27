import React from 'react';

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
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
