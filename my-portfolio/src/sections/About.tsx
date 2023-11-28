import React from 'react';

interface AboutProps {
    name: string;
    age: number;
    university: string;
    department: string;
}

const About: React.FC<AboutProps> = ({ name, age, university, department }) => {
    return (
        <div className="about-section">
            <h2>About Me</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>University: {university}</p>
            <p>Department: {department}</p>
            {/* ここに追加の情報や文を追加 */}
        </div>
    );
}

export default About;
