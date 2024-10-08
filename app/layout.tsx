import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from "./../components/Footer/Footer"
import Navbar from "./../components/Navbar/Navbar"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
 
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar/>
              {children}
      <Footer/>
           </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
