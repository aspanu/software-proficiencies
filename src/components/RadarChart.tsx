import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { ProficiencyLevel } from '../skills';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler);

interface RadarChartProps {
    proficiencyLevels: ProficiencyLevel[];
}

const RadarChart: React.FC<RadarChartProps> = ({ proficiencyLevels }) => {
    const categories = [
        'Server Fundamentals',
        'Web Development Practices',
        'Security',
        'Database Design & Management',
        'API Design & Integration',
        'Cloud & Infrastructure',
        'Team Leadership & Architecture',
    ];

    // Count selected skills per category
    const dataCounts = categories.map((category) => {
        return proficiencyLevels.reduce((count, level) => {
            return (
                count +
                level.skills.filter((skill) => skill.category === category && skill.selected).length
            );
        }, 0);
    });

    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Skill Proficiency',
                data: dataCounts,
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                borderColor: 'rgba(40, 167, 69, 1)',
                pointBackgroundColor: 'rgba(40, 167, 69, 1)',
                pointBorderColor: '#fff',
            },
        ],
    };

    return <Radar data={data} />;
};

export default RadarChart;
