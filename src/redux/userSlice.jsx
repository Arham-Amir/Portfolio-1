import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'portfolio-dessign',
  initialState: {
    userInfo: {
      'name': 'Arham Amir',
      'detail': "I build things for the web.",
      'description': "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at EpochClan.",
      'email': 'arhamamir424@gmail.com',
      'github': 'https://github.com/Arham-Amir',
      'instagram': 'https://www.instagram.com/arhammmm_amir/',
      'linkedin': 'https://www.linkedin.com/in/arham-amir-51151b1bb/',
    },
    about: {
      'detail': [
        "Hello! My name is Arham, and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to make an e-commerce website for our family business. It turns out that my interest in web development taught me a lot about HTML, CSS & JS!",
        "Fast-forward to today, and I've had the privilege of working at an research center and a start-up. My main focus these days is building accessible, human-centered products at EpochClan for a variety of clients.",
        "I also recently completed freelancing projects, which helped me cover more in-depth concepts of various web technologies and explore the strengths of these technologies.",
      ],
    },
    skills: {
      "HTML": 90,
      "CSS": 90,
      "Tailwind-CSS": 90,
      "mySql": 80,
      "c++": 80,
      "Python": 60,
      "JavaScript (ES6+)": 75,
      "React": 75,
      "Next.js": 75,
      "Git": 80,
      "GitHub": 80,
      "Firebase-Database": 85,
      "Vercel": 85,
      "Webflow": 85,
    },
    experiences: [
      {
        'name': 'Epoch Clan',
        'role': 'Junior Software Engineer',
        'duration': 'May 2023 - Present',
        'description': [
          "Spearheaded the development of a React-based Weather Forecasting App, showcasing advanced web development proficiency. The application seamlessly integrates live data, providing users with accurate and up-to-date weather information.",
          "Contributed significantly to the creation of a News App using React, ensuring precise live data display and enhancing user experience.",
          "Demonstrated expertise in project management by efficiently handling diverse company projects. Resolved real-time web project tickets with precision, leveraging the Next.js framework for seamless issue resolution."
        ]
      },
      {
        'name': 'TechnoGenics',
        'role': 'Software Engineer Intern',
        'duration': 'August - November 2021',
        'description': [
          "Successfully executed a medium-level machine learning project to classify tweets, showcasing a high level of Python proficiency in the implementation of machine learning algorithms.",
          "Independently developed a basic online store using Django during the internship, honing web development skills and demonstrating the ability to work autonomously.",
          "Actively participated in code reviews and implemented feedback, contributing to enhanced code quality in both machine learning and web development projects."
        ]
      },
      {
        'name': 'Fiver',
        'role': 'Freelancer',
        'duration': 'August 2021 - Present',
        'description': [
          "Completed a diverse range of freelance web projects, underscoring versatility in tackling different challenges and requirements.",
          "Developed a customized high-level web application for a construction group in Pakistan. The application features a comprehensive cost calculator, providing accurate estimates on land sizes and areas. It incorporates up-to-date pricing information, thereby enhancing efficiency in construction planning."
        ]
      }
    ],
    mainProjects: [
      {
        'name': 'Promo Developers',
        'imageLink': "/mainProject2.png",
        'description': 'A comprehensive cost calculator, offering accurate estimates for various land sizesand areas. It includes up-to-date pricing information for materials and labor, enhancing efficiency in construction planning. Users get construction rates for any land size with one click.',
        'techAndTools': ['Next.js', 'Tailwind-CSS', 'Firebase-Database', 'DaisyUI'],
        'githubLink': 'https://github.com/Arham-Amir',
        'projectLink': 'https://www.promodevelopers.com/',
      },
      {
        'name': 'Promo Brick',
        'imageLink': "/mainProject1.png",
        'description': 'An online marketplace offering premium-quality bricks for purchase, catering to customers across Pakistan. International shipping options are also available for customers outside Pakistan.',
        'techAndTools': ['Next.js', 'Tailwind-CSS', 'Firebase-Database', 'DaisyUI'],
        'githubLink': 'https://github.com/Arham-Amir',
        'projectLink': 'https://www.promobrick.com/',
      },
      {
        'name': 'Weather App',
        'imageLink': "/mainProject3.png",
        'description': `Designed a responsive weather forecast website displaying current conditions and five-day predictions. Users can search for weather in any location, save favorites for easy access.`,
        'techAndTools': ['ReactJS', 'Tailwind-CSS', 'OpenWeatherMap-API'],
        'githubLink': 'https://github.com/Arham-Amir',
        'projectLink': 'https://weatherapp-da0c1.web.app/',
      },
    ],
    miniProjects: [
      {
        "title": "Promo Garlic",
        "description": "A website dedicated to keeping garlic clients updated with the latest processing information and providing comprehensive details about G1 garlic in Pakistan.",
        "tech": ['Next.js', 'Tailwind-CSS', 'DaisyUI'],
        'link': "https://www.promogarlic.com/"
      },
      {
        "title": "Promo Group",
        "description": "A SPW to showcase all the businesses of a promo group, offering services in Pakistan and worldwide",
        "tech": ['Next.js', 'Tailwind-CSS', 'DaisyUI'],
        'link': "https://www.promogroup.com.pk/"
      },
      {
        "title": "News App",
        "description": "To stay updated on trending news across all topics, find out what's trending.",
        "tech": ['Next.js', 'Tailwind-CSS', 'DaisyUI'],
        'link': "https://github.com/Arham-Amir/News-App"
      },
      {
        "title": "Sentiment-Analysis-of-Tweets",
        "description": "The website gives you a tweet-by-tweet analysis under three categories (Political, Sports, Entertainment) and displays the result on a pie chart. You can do analysis on any number of tweets you want.",
        "tech": ["Python", "Django", "ML"],
        'link': "https://github.com/Arham-Amir/Sentiment-Analysis-of-Tweets"
      },
      {
        "title": "PhoneHub",
        "description": "This a phone related website where you can find the phone you need. You can see all the phones launched by any brand here & have a look on their detailed specifications also order it too.",
        "tech": ["Python", "Django", "JavaScript"],
        'link': "https://github.com/Arham-Amir/PhoneHub"
      },
      {
        "title": "Responsive-Calculator",
        "description": "Build a responsive calculator with day & night modes to practice basic DOM operations and javascript",
        "tech": ["HTML", "CSS", "JS"],
        'link': "https://arham-amir.github.io/Responsive-Calculator/"
      },
      {
        "title": "Spitfire Home Design",
        "description": "A static website for home builder to showcase their services to the world.",
        "tech": ["HTML", "SCSS"],
        'link': "https://arham-amir.github.io/HomeDesignProject/"
      },
    ]
  },
  reducer: {},
})

export default userSlice.reducer
