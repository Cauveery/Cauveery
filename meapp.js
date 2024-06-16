document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for "Go to Next Page" link
    document.querySelector('.next-page').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#currently-learning').scrollIntoView({ behavior: 'smooth' });
    });

    // Hover effect for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'translateY(-5px)';
            section.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        });
        section.addEventListener('mouseout', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Load content dynamically
    const content = {
        projects: [
            {
                title: "AI Chatbot",
                description: "Developed an AI chatbot using Python and TensorFlow that helps users with tech support.",
                image: "project1.jpg",
                video: "project1-video.mp4"
            },
            {
                title: "Personal Portfolio",
                description: "Created a personal portfolio website using React, showcasing my skills and projects.",
                image: "project2.jpg",
                video: "project2-video.mp4"
            }
        ],
        work: [
            {
                title: "Software Developer Intern at TechCorp",
                description: "Worked on developing and optimizing web applications using Node.js and MongoDB.",
                image: "work1.jpg",
                video: "work1-video.mp4"
            },
            {
                title: "Freelance Web Developer",
                description: "Created dynamic and responsive websites for various clients using React and Bootstrap.",
                image: "work2.jpg",
                video: "work2-video.mp4"
            }
        ],
        funFacts: [
            {
                fact: "🌲 I love hiking and have a goal to visit every national park in the country!",
                image: "hiking.jpg",
                video: "hiking-video.mp4"
            },
            {
                fact: "✈️ Avid traveler with a knack for finding hidden gems in every city.",
                image: "travel.jpg",
                video: "travel-video.mp4"
            },
            {
                fact: "🎶 Music enthusiast with a penchant for learning new instruments.",
                image: "music.jpg",
                video: "music-video.mp4"
            },
            {
                fact: "🎨 Passionate about drawing and painting in my free time.",
                image: "drawing.jpg",
                video: "drawing-video.mp4"
            }
        ]
    };

    // Function to dynamically create sections
    function createSectionContent(sectionId, items) {
        const section = document.getElementById(sectionId);
        items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add(sectionId.slice(0, -1)); // Remove last character ('s') to get the class name
            div.innerHTML = `
                <img src="${item.image}" alt="${item.title || item.fact}" class="section-img">
                <h3>${item.title || ''}</h3>
                <p>${item.description || item.fact}</p>
                <video controls>
                    <source src="${item.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            section.appendChild(div);
        });
    }

    // Load content for projects, work, and fun facts
    createSectionContent('projects', content.projects);
    createSectionContent('work', content.work);
    createSectionContent('fun-fact', content.funFacts);
});
