// ExeCom.js
import React from 'react';
import './ExeCom.css';

const ExeCom = () => {
    const members = [
        { name: 'Hanna Elza John', role: 'SB Chair', image: '/assets/images/execom/HANNA ELZA JOHN.jpg' },
        { name: 'Pranav Vinoy', role: 'SB Secretary', image: '/assets/images/execom/Pranav Vinoy.jpg' },
        { name: 'Amrutha R Nair', role: 'SB Vice Chair', image: '/assets/images/execom/Amrutha Nair.jpg' },
        { name: 'Abhinav S Vijayan', role: 'SB Treasurer', image: '/assets/images/execom/Abhinav S Vijayan.jpg' },
        { name: 'Chackochan Jose', role: 'Webmaster', image: '/assets/images/execom/Chackochan Jose.jpg' },
        { name: 'Bifin James', role: 'Webmaster', image: '/assets/images/execom/Bifin James.jpg' },
        { name: 'Anamika KP', role: 'SB Joint Secretary', image: '/assets/images/execom/ANAMIKA K P.jpg' },
        { name: 'Anand P S', role: 'Membership Development Coordinator', image: '/assets/images/execom/Anand.JPG' },
        { name: 'Dwarakesh T Babu', role: 'Electronic Communications Coordinator', image: '/assets/images/execom/Dwarakesh.jpg' },
        { name: 'Milan George Mathew', role: 'Electronic Communications Coordinator', image: '/assets/images/execom/Milan Mathew.jpg' },
        { name: 'Kripa Anna Thomas', role: 'Social Media Manager', image: '/assets/images/execom/Kripa.jpeg' },
        { name: 'Harikrishnan Ashok', role: 'Program Coordinator', image: '/assets/images/execom/Harikrishnan Ashok.jpg' },
        { name: 'Rohith K M', role: 'Technical Coordinator', image: '/assets/images/execom/ROHITH KM.jpg' },
        { name: 'Noyal K Raju', role: 'Projects and Lab Coordinator', image: '/assets/images/execom/Noyal1.jpeg' },
        { name: 'Colin Jimmy', role: 'CS Chair', image: '/assets/images/execom/Colin Jimmy.jpg' },
        { name: 'Ronal Shoey George', role: 'CS Secretary', image: '/assets/images/execom/Ronal George.jpg' },
        { name: 'Silda Sholly', role: 'ComSoc Chair', image: '/assets/images/execom/Silda.JPG' },
        { name: 'Shraddha Sasikumar', role: 'ComSoc Secretary', image: '/assets/images/execom/Shraddha Sasikumar.jpg' },
        { name: 'Mathew Vinu Benny', role: 'RAS Chair', image: '/assets/images/execom/Mathew Vinu Benny.jpg' },
        { name: 'Neha Savy', role: 'RAS Secretary', image: '/assets/images/execom/Neha Savy.jpg' },
        { name: 'Akhil Sebastian', role: 'PES Chair', image: '/assets/images/execom/Akhil Sebastian.jpg' },
        { name: 'Jes Gigo', role: 'PES Secretary', image: '/assets/images/execom/JesGigo.jpg' },
        { name: 'Amritha M', role: 'IAS Chair', image: '/assets/images/execom/Amritha M.jpg' },
        { name: 'Ameena R', role: 'IAS Secretary', image: '/assets/images/execom/Ameena.jpg' },
        { name: 'Anu Anil', role: 'IE/PELS Jt. Chapter Chair', image: '/assets/images/execom/Anu Anil.jpg' },
        { name: 'Jyothika Vinod', role: 'IE/PELS Jt. Chapter Secretary', image: '/assets/images/execom/Jyothika Vinod.jpg' },
        { name: 'Oliviya Jain', role: 'SPS Chair', image: '/assets/images/execom/Oliviya Jain.jpg' },
        { name: 'Naveen Prasad', role: 'SPS Secretary', image: '/assets/images/execom/Naveen Prasad.jpg' },
        { name: 'Nandhana M J', role: 'WiE Affinity Group Chair', image: '/assets/images/execom/Nandhana M J.jpg' },
        { name: 'Nandana Jolly', role: 'WiE Affinity Group Secretary', image: '/assets/images/execom/NandanaJolly.jpg' },
        { name: 'Siyadh M N', role: 'SIGHT Chair', image: '/assets/images/execom/SIYADH M N.jpg' },
        { name: 'Sian Lee', role: 'SIGHT Secretary', image: '/assets/images/execom/Sian Lee.jpg' }
      ];
      
  return (
    <section className="exe-com">
      <h2>
        Exe<span>Com</span>
      </h2>
      <div className="card-container">
        {members.map((member, index) => (
          <div className="card" key={index}>
            <img src={member.image} alt="Person" />
            <div className="overlay">
              <p className="name">{member.name}</p>
              <p className="role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExeCom;
