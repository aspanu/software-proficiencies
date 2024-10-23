import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Plugin,
} from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Title);

interface RadarChartProps {
    selectedSkillsByLevel: {
        level: string;
        skills: {
            index: number;
            name: string;
            category: string;
        }[];
    }[],
    chartSize: number;
}

const RadarChart: React.FC<RadarChartProps> = ({ selectedSkillsByLevel, chartSize }) => {
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        // Calculate scaling factors
        const scaleFactor = chartSize / 300; // Assuming 300x300 is the base size
        const labelFontSize = 9 * scaleFactor; // Adjust label size
        const tickFontSize = 6 * scaleFactor; // Adjust tick size
        const paddingValue = 1 * scaleFactor; // Adjust padding

        // Set options dynamically
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Backend Proficiency by Category',
                    font: {
                        size: 18 * scaleFactor,
                        weight: 'bold',
                    },
                },
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.2)',
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.3)',
                        lineWidth: 1.8 * scaleFactor,
                    },
                    pointLabels: {
                        font: {
                            size: labelFontSize,
                            weight: 'bold',
                        },
                        color: '#1e1e1e',
                        padding: paddingValue,
                    },
                    ticks: {
                        stepSize: maxLevel / 2,
                        display: true,
                        color: '#1e1e1e',
                        font: {
                            size: tickFontSize,
                            weight: 'bold',
                        },
                        backdropColor: 'rgba(255, 255, 255, 0.8)',
                        callback: (value: any) => {
                            if (value === maxLevel / 2) return 'Advanced';
                            if (value === maxLevel) return 'Expert';
                            return '';
                        },
                        z: 10,
                    },
                    suggestedMin: 0,
                    suggestedMax: 4,
                },
            },
        });
    }, [chartSize]);

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
        return selectedSkillsByLevel.reduce((count, level) => {
            return (
                count +
                level.skills.filter((skill) => skill.category === category).length
            );
        }, 0);
    });

    const maxLevel = 5; // Define the maximum level, pegged to expert-level proficiency

    const data = {
        labels: categories,
        datasets: [
            {
                label: 'Skill Proficiency',
                data: dataCounts,
                backgroundColor: 'rgba(40, 167, 69, 0.6)', // Increased opacity for better readability
                borderColor: 'rgba(40, 167, 69, 0)', // No border
                borderWidth: 0, // Remove border line
                pointBackgroundColor: 'rgba(40, 167, 69, 0)', // No dots
                pointBorderColor: 'rgba(40, 167, 69, 0)', // No border for points
                pointRadius: 0, // Remove dots entirely
            },
        ],
    };

    // Custom Plugin to add shading
    const backgroundShadingPlugin: Plugin<'radar'> = {
        id: 'customBackgroundShading',
        beforeDraw: (chart) => {
            const { ctx, scales } = chart;
            const rScale = scales.r as RadialLinearScale; // Type cast to RadialLinearScale

            if (rScale) {
                const centerX = rScale.xCenter;
                const centerY = rScale.yCenter;
                const drawingArea = (rScale as any).drawingArea; // Access drawingArea using type assertion
                const stepValue = drawingArea / maxLevel;

                const startAngle = rScale.getIndexAngle(0) + Math.PI / 12 - 0.05; // Start angle of the radar chart

                // Get the number of points/categories in the radar chart
                const numPoints = rScale.chart.data.labels ? rScale.chart.data.labels.length : 0;

                // Function to draw shading between two radii
                const drawShading = (outerRadius: number, color: string) => {
                    if (numPoints === 0) return; // If there are no points, exit the function

                    ctx.beginPath();
                    ctx.fillStyle = color;

                    // Move to the starting position of the first point at outer radius
                    for (let i = 0; i < numPoints; i++) {
                        const angle = startAngle + rScale.getIndexAngle(i % numPoints);

                        // Calculate the position for the outer radius
                        const xOuter = centerX + Math.cos(angle) * outerRadius;
                        const yOuter = centerY + Math.sin(angle) * outerRadius;

                        if (i === 0) {
                            // Move to the starting point for the first section
                            ctx.moveTo(xOuter, yOuter);
                        } else {
                            // Draw a line connecting to the next point
                            ctx.lineTo(xOuter, yOuter);
                        }
                    }

                    // Close the path after looping through all points
                    ctx.closePath();
                    ctx.fill();
                };

                // Draw shading for "Advanced" area (from level 2.5 to 3.75)
                drawShading(stepValue * 3.75, 'rgba(173, 216, 230, 0.4)'); // Light blue

                // Draw shading for "Expert" area (from level 3.75 to maxLevel)
                drawShading(stepValue * maxLevel, 'rgba(221, 160, 221, 0.4)'); // Light purple

                // Clear the inner-most section with a white fill
                drawShading(stepValue * 2.5, 'rgba(255, 255, 255, 1)'); // Clear center up to Advanced level

            }
        },
    };

    // Register the plugin with Chart.js
    Chart.register(backgroundShadingPlugin);

    return <div style={{ width: `${chartSize}px`, height: `${chartSize}px` }}>
        <Radar data={data} options={chartOptions} />;
    </div>

};

export default RadarChart;
