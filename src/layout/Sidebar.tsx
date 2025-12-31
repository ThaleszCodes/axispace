import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    CheckSquare,
    Briefcase,
    History,
    Settings,
    LogOut,
    ChevronDown,
    Plus,
    User
} from 'lucide-react';

interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center gap-md p-md cursor-pointer transition-all duration-300 ${active
                    ? 'bg-white text-black'
                    : 'text-muted hover:text-white hover:bg-graphite'
                }`}
            style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}
        >
            <Icon size={18} strokeWidth={active ? 2.5 : 2} />
            <span>{label}</span>
        </Link>
    );
};

const Sidebar: React.FC = () => {
    const [showCompanyMenu, setShowCompanyMenu] = useState(false);
    const [currentCompany, setCurrentCompany] = useState('AXIUM STUDIO');

    const companies = ['AXIUM STUDIO', 'NEBULA LABS', 'QUANTUM OPS'];

    return (
        <aside className="h-full flex flex-col border-r border-color" style={{ width: 'var(--sidebar-width)', backgroundColor: 'var(--black)', flexShrink: 0, position: 'relative' }}>
            {/* Company Switcher */}
            <div
                className="p-lg border-b border-color flex items-center justify-between cursor-pointer hover:bg-graphite transition-colors"
                onClick={() => setShowCompanyMenu(!showCompanyMenu)}
            >
                <div className="flex flex-col">
                    <span style={{ fontSize: '0.65rem', color: '#666', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Workspace</span>
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--white)' }}>{currentCompany}</span>
                </div>
                <ChevronDown size={16} className={`text-muted transition-transform duration-300 ${showCompanyMenu ? 'rotate-180' : ''}`} />
            </div>

            {/* Company Dropdown */}
            {showCompanyMenu && (
                <div
                    className="absolute left-0 w-full bg-black border-b border-color z-50 shadow-2xl"
                    style={{ top: '81px' }}
                >
                    {companies.map(company => (
                        <div
                            key={company}
                            className="p-md hover:bg-graphite cursor-pointer transition-colors flex items-center justify-between"
                            onClick={() => {
                                setCurrentCompany(company);
                                setShowCompanyMenu(false);
                            }}
                        >
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: company === currentCompany ? 'white' : '#888' }}>{company}</span>
                            {company === currentCompany && <div style={{ width: 6, height: 6, backgroundColor: 'white' }}></div>}
                        </div>
                    ))}
                    <div className="p-md border-t border-color hover:bg-graphite cursor-pointer transition-colors flex items-center gap-sm text-muted">
                        <Plus size={14} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>New Workspace</span>
                    </div>
                </div>
            )}

            {/* Navigation */}
            <nav className="flex-grow py-md">
                <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/" />
                <SidebarItem icon={CheckSquare} label="Tasks" to="/tasks" />
                <SidebarItem icon={Briefcase} label="Projects" to="/projects" />
                <SidebarItem icon={History} label="Activity" to="/activity" />
            </nav>

            {/* Footer */}
            <div className="mt-auto border-t border-color">
                <div className="p-md flex items-center gap-md">
                    <div className="flex items-center justify-center bg-white text-black" style={{ width: 32, height: 32, fontWeight: 800, fontSize: '0.75rem' }}>
                        JD
                    </div>
                    <div className="flex flex-col">
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white' }}>John Doe</span>
                        <span style={{ fontSize: '0.65rem', color: '#666', fontWeight: 700, textTransform: 'uppercase' }}>Admin</span>
                    </div>
                </div>
                <div className="flex items-center gap-md p-md text-muted hover:text-white hover:bg-graphite cursor-pointer transition-all duration-300" style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    <Settings size={18} />
                    <span>Settings</span>
                </div>
                <div className="flex items-center gap-md p-md text-muted hover:text-white hover:bg-graphite cursor-pointer transition-all duration-300" style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    <LogOut size={18} />
                    <span>Logout</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
