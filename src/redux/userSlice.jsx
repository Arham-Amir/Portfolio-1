import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'portfolio-dessign',
  initialState: {
    userInfo: {
      'name': 'Arham Amir',
      'detail': "I build things for the web.",
      'description': "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.",
      'email': 'arhamamir424@gmail.com',
      'github': 'https://www.github.com',
      'instagram': 'https://www.instagram.com',
      'twitter': 'https://www.twitter.com',
      'linkedin': 'https://www.linkedin.com',
      'codepen': 'https://www.codepen.com',
    },
    about: {
      'detail': [
        "Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
        "Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.",
        "I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.",
        "Here are a few technologies I’ve been working with recently:",
      ],
      'toolsAndTech': ["JavaScript (ES6+)", "TypeScript", "React", "Eleventy", "Node.js", "WordPress"],
    },
    experiences: [
      {
        'name': 'UpStatement',
        'role': 'Lead Engineer',
        'duration': 'May 2018 - Present',
        'description': [
          'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
          'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
          'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
          'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
        ]
      },
      {
        'name': 'Apple',
        'role': 'UI Engineer Co-op',
        'duration': 'July - December 2017',
        'description': [
          "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
          "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
          "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
          "Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications",
        ]
      },
      {
        'name':  'Scout Studio',
        'role': 'Developer',
        'duration': 'Spring 2016 & 2017',
        'description': [
          "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
          "Built and delivered technical solutions according to stakeholder business requirements",
        ]
      },
      {
        'name': 'Starry',
        'role': 'Software Engineer Co-op',
        'duration': 'July - December 2016',
        'description': [
          "Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS",
          "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router",
          "Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps",
        ]
      },
      {
        'name': 'MullenLowe',
        'role': 'Creative Technologist Co-op',
        'duration': 'July - December 2015',
        'description': [
          "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
          "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
          "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
        ]
      },
    ],
    mainProjects: [
      {
        'name': 'Halcyon Theme',
        'imageLink': "/mainProject1.avif",
        'description': 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
        'techAndTools': ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
        'githubLink': 'https://www.github.com',
        'projectLink': 'https://www.project.com',
      },
      {
        'name': 'Spotify Profile',
        'imageLink': "/mainProject2.avif",
        'description': 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        'techAndTools': ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
        'githubLink': 'https://www.github.com',
        'projectLink': 'https://www.project.com',
      },
      {
        'name': 'Build a Spotify Connected App',
        'imageLink': "/mainProject3.avif",
        'description': `Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
        Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.`,
        'techAndTools': ['React', 'Express', 'Spotify API', 'Styled Components'],
        'githubLink': 'https://www.github.com',
        'projectLink': 'https://www.project.com',
      },
    ],
    miniProjects: [
      {
        "title": "Integrating Algolia Search with WordPress Multisite",
        "description": "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        "tech": ["Algolia", "Wordpress", "PHP"],
        'link': "https://www.google.com"
      },
      {
        "title": "Time to Have More Fun",
        "description": "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
        "tech": ["Next.js", "Tailwind CSS", "Firebase"],
        'link': "https://www.google.com"
      },
      {
        "title": "Building a Headless Mobile App CMS From Scratch",
        "description": "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
        "tech": ["Node", "Express", "Firebase", "Vue"],
        'link': "https://www.google.com"
      },
      {
        "title": "OctoProfile",
        "description": "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
        "tech": ["Next.js", "Chart.js", "Github API"],
        'link': "https://www.google.com"
      },
      {
        "title": "Google Keep Clone",
        "description": "A simple Google Keep clone built with Vue and Firebase.",
        "tech": ["Vue", "Firebase"],
        'link': "https://www.google.com"
      },
      {
        "title": "Apple Music Embeddable Web Player Widget",
        "description": "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging",
        "tech": ["MusicKit.js", "JS", "CSS"],
        'link': "https://www.google.com"
      },
      {
        "title": "Apple Music Facebook Messenger Integration",
        "description": "Facebook Messenger chat bot extension featuring authentication and full song streaming from within the Messenger app.",
        "tech": ["Ember", "JS", "SCSS"],
        'link': "https://www.google.com"
      },
      {
        "title": "Personal Website V3",
        "description": "Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.",
        "tech": ["Jekyll", "SCSS", "JS"],
        'link': "https://www.google.com"
      },
    ]
  },
  reducer: {},
})

export default userSlice.reducer
