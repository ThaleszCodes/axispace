import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div>
            <header className="mb-xxl">
                <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Overview</span>
                <h1 className="mt-sm">Dashboard</h1>
            </header>

            <div className="grid gap-lg" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div className="luxury-card">
                    <h2 className="text-accent">Overdue</h2>
                    <div className="mt-lg">
                        <p className="text-muted">No urgent items requiring immediate attention.</p>
                    </div>
                </div>

                <div className="luxury-card">
                    <h2>Due Today</h2>
                    <div className="mt-lg flex flex-col gap-md">
                        <div className="flex justify-between items-center border-b border-color pb-sm">
                            <span style={{ fontWeight: 600 }}>Q4 Financial Review</span>
                            <span className="text-muted" style={{ fontSize: '0.75rem' }}>17:00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-color pb-sm">
                            <span style={{ fontWeight: 600 }}>Client Onboarding</span>
                            <span className="text-muted" style={{ fontSize: '0.75rem' }}>18:30</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span style={{ fontWeight: 600 }}>Server Migration</span>
                            <span className="text-muted" style={{ fontSize: '0.75rem' }}>22:00</span>
                        </div>
                    </div>
                </div>

                <div className="luxury-card">
                    <h2>Priority</h2>
                    <div className="mt-lg">
                        <p className="text-muted">High-level operational objectives for this week.</p>
                        <ul className="mt-md flex flex-col gap-sm" style={{ listStyle: 'none' }}>
                            <li className="flex items-center gap-sm">
                                <div style={{ width: 4, height: 4, backgroundColor: 'white' }}></div>
                                <span style={{ fontSize: '0.85rem' }}>Finalize Axium Studio Rebrand</span>
                            </li>
                            <li className="flex items-center gap-sm">
                                <div style={{ width: 4, height: 4, backgroundColor: 'white' }}></div>
                                <span style={{ fontSize: '0.85rem' }}>Deploy Axispace Beta</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
