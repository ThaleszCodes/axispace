import React from 'react';

const Tasks: React.FC = () => {
    const tasks = [
        { id: 1, title: 'Review Q4 Budget', status: 'In Progress', deadline: 'Dec 31', priority: 'High', responsible: 'John D.' },
        { id: 2, title: 'Update Client Portal', status: 'Pending', deadline: 'Jan 05', priority: 'Medium', responsible: 'Sarah K.' },
        { id: 3, title: 'Security Audit', status: 'Completed', deadline: 'Dec 28', priority: 'Critical', responsible: 'Mike R.' },
        { id: 4, title: 'New Hire Onboarding', status: 'Pending', deadline: 'Jan 10', priority: 'Low', responsible: 'Emma W.' },
    ];

    return (
        <div>
            <header className="mb-xxl">
                <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Operations</span>
                <h1 className="mt-sm">Tasks</h1>
            </header>

            <div className="luxury-card p-0" style={{ overflow: 'hidden' }}>
                <table className="w-full" style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr className="border-b border-color" style={{ backgroundColor: '#0A0A0A' }}>
                            <th className="p-md" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Task</th>
                            <th className="p-md" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Status</th>
                            <th className="p-md" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Deadline</th>
                            <th className="p-md" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Priority</th>
                            <th className="p-md" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666' }}>Responsible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.id} className="border-b border-color hover:bg-graphite transition-colors">
                                <td className="p-md" style={{ fontWeight: 600 }}>{task.title}</td>
                                <td className="p-md">
                                    <span style={{ fontSize: '0.7rem', padding: '2px 8px', border: '1px solid #333', textTransform: 'uppercase', fontWeight: 700 }}>
                                        {task.status}
                                    </span>
                                </td>
                                <td className="p-md text-muted" style={{ fontSize: '0.85rem' }}>{task.deadline}</td>
                                <td className="p-md">
                                    <span style={{
                                        color: task.priority === 'Critical' ? 'var(--white)' : '#888',
                                        fontWeight: task.priority === 'Critical' ? 800 : 400,
                                        fontSize: '0.85rem'
                                    }}>
                                        {task.priority}
                                    </span>
                                </td>
                                <td className="p-md text-muted" style={{ fontSize: '0.85rem' }}>{task.responsible}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;
