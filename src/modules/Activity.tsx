import React from 'react';

const Activity: React.FC = () => {
    const activities = [
        { user: 'John Doe', action: 'completed task', target: 'Q4 Financial Review', time: '2 hours ago' },
        { user: 'Sarah K.', action: 'created project', target: 'Nova Retail E-commerce', time: '5 hours ago' },
        { user: 'Mike R.', action: 'updated status', target: 'Security Audit', time: 'Yesterday' },
        { user: 'John Doe', action: 'added comment to', target: 'Axium Studio Rebrand', time: 'Yesterday' },
        { user: 'System', action: 'deployed version', target: 'v1.0.4-beta', time: '2 days ago' },
    ];

    return (
        <div>
            <header className="mb-xxl">
                <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Audit</span>
                <h1 className="mt-sm">Activity Log</h1>
            </header>

            <div className="luxury-card">
                <div className="flex flex-col gap-lg">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-lg border-b border-color pb-lg last:border-0 last:pb-0">
                            <div style={{ width: 8, height: 8, backgroundColor: 'white', marginTop: 6 }}></div>
                            <div className="flex flex-col gap-xs">
                                <div style={{ fontSize: '0.9rem' }}>
                                    <span style={{ fontWeight: 800 }}>{activity.user}</span>
                                    <span className="text-muted"> {activity.action} </span>
                                    <span style={{ fontWeight: 600 }}>{activity.target}</span>
                                </div>
                                <span className="text-muted" style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700 }}>{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activity;
