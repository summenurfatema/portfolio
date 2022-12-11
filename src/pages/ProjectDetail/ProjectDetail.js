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
            "lst1": " Email & Password, Google and finally GitHub login authentication method has been added.",
            "lst2": "You should log in first to see premium offer.",
            "lst3": "You can save course details as pdf file.",
            "lst4": "Mentor's information also available here.",
            "lst5": "By getting premium offer you  will get many facilities including discount.",
            "live": "https://eloquent-elf-d6f868.netlify.app",
            "git": "https://github.com/summenurfatema/learning_bee_client_a10",
            "server": "https://github.com/summenurfatema/learning_bee_server_a10"

        },
        {
            "id": 2,
            "projectName": "Quizee",
            "img1": q1,
            "img2": q2,
            "img3": q3,
            "lst1": "You can participate quiz program with Quizee.",
            "lst2": "There are 4 categories' quizzes available. These are React, JavaScript, CSS and Git.",
            "lst3": "Correct answer is hidden behind an eye icon (beside every question).",
            "lst4": "Rechart has been used in this project.",
            "lst5": "In the Static route,You can see how many quizes are available in every topic.",
            "live": "https://majestic-longma-703fb9.netlify.app",
            "git": "https://github.com/summenurfatema/quiz_a9",
            "server": ""

        },


        {
            "id": 3,
            "projectName": "Furnica",
            "img1": f1,
            "img2": f2,
            "img3": f3,
            "lst1": "Email & Password and Google login authentication method has been added.",
            "lst3": "You can buy product and save products in your wishlist.",
            "lst4": "As a seller you can add product for selling.",
            "lst5": "Seller can advertise their products,which will be shown at Home page.",
            "lst2": "You can be a member as Seller or Buyer.",
            "live": "https://furnica-client.web.app/login",
            "git": "https://github.com/summenurfatema/furnica_client_a12",
            "server": "https://github.com/summenurfatema/furnica_server_a12"

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