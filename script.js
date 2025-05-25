const items = [
    {
        "title": "Network On",
        "year": 2023,
        "description": "Worked as lead designer on multi-year campaign about broadband internet. Created a broad range of designs from social media graphics to animated video bumpers to event swag and signage.",
        "tags": [
            "Branding",
            "Motion Design",
            "Events",
            "Publication Design"
        ],
        "images": [
            "images/network1.jpg",
            "images/network2.jpg",
            "images/network3.jpg",
            "images/network4.jpg",
            "images/network5.jpg"
        ]
    },
    {
        "title": "FPF New York Times Ad",
        "year": 2023,
        "description": "Created crossword puzzle concept for a New York Times ad celebrating the winners of an FPF Award. I drew upon my crossword hobby to design the puzzle, creating an on-theme mini puzzle, as well as laying out the rest of the ad and creating the accompanying animated digital ads for a science section takeover.",
        "tags": [
            "Advertisment",
            "Print Design",
            "Motion Design"
        ],
        "images": [
            "images/ces1.jpg",
            "images/ces2.jpg",
            "images/ces3.jpg"
        ]
    },
    {
        "title": "Client One Pagers",
        "year": 2025,
        "description": "Worked with a broad range of clients to create engaging one pagers that effectively communicated their messages in fun and exciting ways, while keeping their established brand identities strong.",
        "tags": [
            "Print Design",
            "Typography",
            "Illustration"
        ],
        "images": [
            "images/ces1.jpg",
            "images/ces2.jpg",
            "images/ces3.jpg"
        ]
    },
    {
        "title": "Bukoballad Twitch Identity",
        "year": 2022,
        "description": "Worked with client to design a brand identity to work with Illustrated avatar. Created collection of illustrated assets to ensure flexible screen coverage for privacy, an animated “panic button” animation, and a consultation session to set up custom css for the chat box.",
        "tags": [
            "Branding",
            "Social Media",
            "Illustration"
        ],
        "images": [
            "images/ces1.jpg",
            "images/ces2.jpg",
            "images/ces3.jpg"
        ]
    },
    {
        "title": "CES 2020",
        "year": 2020,
        "description": "Branding project around CES. The new logo combines a globe and sharp typography to showcase the global and cutting-edge nature of the exhibits. The patterns on the signage and posters are taken from circuitboards.",
        "tags": [
            "Branding",
            "UI Design",
            "Print Design",
            "Wayfinding"
        ],
        "images": [
            "images/ces1.jpg",
            "images/ces2.jpg",
            "images/ces3.jpg"
        ]
    },
    {
        "title": "All My Friends Are Losers: A Diary of Gen-Z Cringe",
        "year": 2021,
        "description": "To create this book, I looked at the ways in which 2010s internet culture and fandom has influenced the lives of my friends to celebrate the \"cringe\" eras of our lives, instead of hiding them away and pretending they do not exist.",
        "tags": [
            "Publication Design",
            "Typography",
            "Photo Collage"
        ],
        "images": [
            "images/ces1.jpg",
            "images/ces2.jpg",
            "images/ces3.jpg"
        ]
    },
    {
        "title": "Almanack",
        "year": 2021,
        "description": "Almanack is a newspaper themed around dystopia and the breakdown of civilization shown through the breakdown of the grid and the processing of the images.",
        "tags": [
            "Publication Design",
            "Typography",
            "Photo Editing"
        ],
        "images": [
            "images/ces1.jpg",
            "images/ces2.jpg",
            "images/ces3.jpg"
        ]
    },
    {
        "title": "Seedy Characters",
        "year": 2020,
        "description": "Seedy Characters' goal is to take the pretentiousness out of organic food and give shoppers new to healthy snacks a friendly face in organic food. The brand's visuals are inspired by old spy comics and film noir.",
        "tags": [
            "Branding",
            "Logo Design",
            "Pattern Design"
        ],
        "images": [
            "images/ces1.jpg",
            "images/ces2.jpg",
            "images/ces3.jpg"
        ]
    }
    // {
    //     "title": "HK Temirtau",
    //     "year": 2020,
    //     "description": "HK Temirtau is a Kazakh hockey team whose rebrand draws on constructivist design while retaining their original color palette and eagle head from their logo. It combines this with a halftone, street poster grit.",
    //     "tags": [
    //         "Branding",
    //         "Logo Design",
    //         "Poster Design"
    //     ],
    //     "images": [
    //         "images/ces1.jpg",
    //         "images/ces2.jpg",
    //         "images/ces3.jpg"
    //     ]
    // },
    // {
    //     "title": "Museum of Enthusiast Keyboards",
    //     "year": 2021,
    //     "description": "To create branding for this imaginary museum, I researched the history of the Enthusiast keyboard. Building and collecting custom keyboards became a hobby starting in the 80s and 90s. MEK's branding reflects the history without anchoring it too heavily in the past.",
    //     "tags": [
    //         "Branding",
    //         "Logo Design",
    //         "Print Design"
    //     ],
    //     "images": [
    //         "images/ces1.jpg",
    //         "images/ces2.jpg",
    //         "images/ces3.jpg"
    //     ]
    // },
    // {
    //     "title": "Cringefest",
    //     "year": 2021,
    //     "description": "Cringefest is an imaginary convention based on my research for All My Friends Are Losers that focuses on internet art and the old, cringe eras of the internet. The branding leans into the digital nature of the art and the diy collage techniques in the genre.",
    //     "tags": [
    //         "3D Modelling",
    //         "Branding",
    //         "Poster & Print Design"
    //     ],
    //     "images": [
    //         "images/ces1.jpg",
    //         "images/ces2.jpg",
    //         "images/ces3.jpg"
    //     ]
    // }
];

// i think this so the script doesn't start until the page loads?
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#projectContainer');

    //create all of the elements
    items.forEach(item => {
        // project wrapper
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        // project text container
        const textDiv = document.createElement('div');
        textDiv.className = 'projecttext';

        // title
        const title = document.createElement('h3');
        title.className = 'title';
        title.textContent = item.title;

        // year
        // const year = document.createElement('p');
        // year.className = 'year';
        // year.textContent = `Year: ${item.year}`;

        // description
        const desc = document.createElement('p');
        desc.className = 'description';
        desc.textContent = item.description;

        // tags
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'projecttags';
        item.tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'tag';
            tagEl.textContent = tag;
            tagsDiv.appendChild(tagEl);
        });

        // add elements to text container
        textDiv.appendChild(title);
        // textDiv.appendChild(year);
        textDiv.appendChild(desc);
        textDiv.appendChild(tagsDiv);

        // images
        const imagesDiv = document.createElement('div');
        imagesDiv.className = 'projectimages';
        item.images.forEach(src => {
            const img = document.createElement('img');
            img.className = 'projectthumb';
            img.src = src;
            img.alt = item.title;
            imagesDiv.appendChild(img);
        });

        // assemble all parts
        projectDiv.appendChild(textDiv);    // add the text block
        projectDiv.appendChild(imagesDiv); // add the image block

        // add project to container
        container.appendChild(projectDiv);
    });


});