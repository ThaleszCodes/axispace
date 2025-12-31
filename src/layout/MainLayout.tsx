import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-full w-full overflow-hidden">
            <Sidebar />
            <main className="flex-grow overflow-y-auto bg-black p-xxl">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
