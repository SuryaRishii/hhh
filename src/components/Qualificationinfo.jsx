import React, { useState, useEffect } from 'react';
function QualificationInfo() {
    const [qualifications, setQualifications] = useState([]);
    useEffect(() => {
        const fetchQualifications = async () => {
            try {
                const response = await fetch("https://suryarishii.github.io/info/Education.json");
                if (!response.ok) {
                    throw new Error('Failed to fetch qualifications');
                }
                const data = await response.json();
                setQualifications(data);
            } catch (error) {
                console.error('Error fetching Qualifications:', error);
            }
        };
        fetchQualifications();
    }, []);
    return (
        <div className='container-fluid'>
            <h1 style={{ textAlign: "center", backgroundColor: " lavender", }}>Education </h1>
            <br />
            <ul className='list-group'>
                {qualifications.map((qualification, index) => (
                    <li className='list-group-item' key={index}>
                        {qualification.qualification}</li>
                ))}
            </ul>
        </div>
    );
}

export default QualificationInfo;
