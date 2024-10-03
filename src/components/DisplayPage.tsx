import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';
import { ProficiencyLevel, proficiencyLevels, VERSION } from '../skills';
import { QRCode } from 'react-qrcode-logo';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DisplayPage: React.FC = () => {
    const [selectedSkills, setSelectedSkills] = useState<ProficiencyLevel[]>([]);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const version = params.get('v');
        const skillIndices = params.get('skills');

        if (version === String(VERSION) && skillIndices) {
            const indicesArray = skillIndices
                .split(',')
                .filter(index => index.trim() !== '') // Filter out any potential empty strings
                .map(Number)
                .filter(num => !isNaN(num)); // Ensure indices are valid numbers

            // Collect selected skills grouped by proficiency level
            const selectedSkillsByLevel = proficiencyLevels
                .map(level => ({
                    level: level.level,
                    skills: level.skills.filter(skill => indicesArray.includes(skill.index)),
                }))
                .filter(level => level.skills.length > 0); // Only keep levels that have selected skills

            setSelectedSkills(selectedSkillsByLevel);
        }
    }, [location.search]);

    const getChartData = () => {
        const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
        const counts = levels.map(level =>
            selectedSkills.find(l => l.level === level)?.skills.length || 0
        );

        return {
            labels: levels,
            datasets: [
                {
                    label: 'Skills Count',
                    data: counts,
                    backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
                },
            ],
        };
    };

    const generateShareableLink = () => {
        return window.location.href;
    };

    return (
        <div className="display-page" style={{ textAlign: 'center', color: '#f0f0f0', padding: '20px' }}>
            <h2>Your Selected Skills</h2>
            {selectedSkills.length > 0 ? (
                <>
                    <div
                        className="skills-container"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexWrap: 'wrap',
                            gap: '20px',
                        }}
                    >
                        {selectedSkills.map((level, levelIndex) => (
                            <div
                                key={levelIndex}
                                className="skill-level-column"
                                style={{
                                    backgroundColor: '#333',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    minWidth: '200px',
                                    flex: '1 1 20%', // Flex setting to try to keep columns on the same row if possible
                                }}
                            >
                                <h3>{level.level}</h3>
                                <ul className="selected-skills-list" style={{ listStyleType: 'none', padding: 0, fontSize: '1.1rem' }}>
                                    {level.skills.map((skill, skillIndex) => (
                                        <li
                                            key={skillIndex}
                                            style={{
                                                margin: '10px 0',
                                                backgroundColor: '#444',
                                                padding: '10px',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div
                        className="chart-container"
                        style={{
                            width: '60%',
                            margin: '20px auto',
                            height: '300px',
                        }}
                    >
                        <Bar
                            data={getChartData()}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        suggestedMin: 0,
                                        ticks: {
                                            precision: 0,
                                        },
                                    },
                                },
                                plugins: {
                                    legend: {
                                        display: false, // Remove legend from the chart
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className="qr-code-container" style={{ marginTop: '20px' }}>
                        <h3>Share Your Skills Summary</h3>
                        <p>Scan this code to view your skills summary or share it with others.</p>
                        <QRCode value={generateShareableLink()} size={200} />
                    </div>
                </>
            ) : (
                <p>No skills selected or unable to parse the data.</p>
            )}
        </div>
    );
};


export default DisplayPage;