import React from 'react';
import lb1 from '../../assets/images/lb1.png'
import lb2 from '../../assets/images/lb2.png'
import lb3 from '../../assets/images/lb3.png'
import q1 from '../../assets/images/q1.png'
import q2 from '../../assets/images/q2.png'
import q3 from '../../assets/images/q3.png'
import f1 from '../../assets/images/f1.png'
import f2 from '../../assets/images/f2.png'
import f3 from '../../assets/images/f3.png'
import DetailCard from './DetailCard';

const ProjectDetail = () => {
    const projectData = [
        {
            "id": 1,
            "projectName": "Learning Bee",
            "img1": lb1,
            "img2": lb2,
            "img3": lb3,
            "lst1": "",
            "lst2": "",
            "lst3": "",
            "lst4": "",
            "lst5": "",
            "live": "",
            "git": "",
            "server": ""

        },
        {
            "id": 2,
            "projectName": "Quizee",
            "img1": q1,
            "img2": q2,
            "img3": q3,
            "lst1": "",
            "lst2": "",
            "lst3": "",
            "lst4": "",
            "lst5": "",
            "live": "",
            "git": "",
            "server": ""

        },
        {
            "id": 3,
            "projectName": "Furnica",
            "img1": f1,
            "img2": f2,
            "img3": f3,
            "lst1": "",
            "lst2": "",
            "lst3": "",
            "lst4": "",
            "lst5": "",
            "live": "",
            "git": "",
            "server": ""

        },

    ]
    return (
        <div>
            {
                projectData.map(project => <DetailCard
                    project={project}></DetailCard>)
            }
        </div>
    );
};

export default ProjectDetail;