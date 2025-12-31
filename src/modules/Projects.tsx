import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        { name: 'Axium Studio Rebrand', client: 'Internal', status: 'Active', progress: 75 },
        { name: 'E-commerce Platform', client: 'Nova Retail', status: 'Active', progress: 40 },
        { name: 'Mobile App Design', client: 'Swift Logistics', status: 'On Hold', progress: 15 },
        { name: 'SEO Optimization', client: 'Global Tech', status: 'Active', progress: 90 },
    ];

    return (
        <div>
            <header className="mb-xxl">
                <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Delivery</span>
                <h1 className="mt-sm">Projects</h1>
            </header>

            <div className="grid gap-lg" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                {projects.map((project, index) => (
                    <div key={index} className="luxury-card flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-md">
                                <div>
                                    <span className="text-muted" style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>{project.client}</span>
                                    <h2 className="mt-xs" style={{ marginBottom: 0 }}>{project.name}</h2>
                                </div>
                                <span style={{ fontSize: '0.7rem', padding: '2px 8px', border: '1px solid #333', textTransform: 'uppercase', fontWeight: 700 }}>
                                    {project.status}
                                </span>
                            </div>
                        </div>

                        <div className="mt-xl">
                            <div className="flex justify-between items-center mb-xs">
                                <span className="text-muted" style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Progress</span>
                                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{project.progress}%</span>
                            </div>
                            <div style={{ width: '100%', height: 2, backgroundColor: '#222' }}>
                                <div style={{ width: `${project.progress}%`, height: '100%', backgroundColor: 'white' }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
