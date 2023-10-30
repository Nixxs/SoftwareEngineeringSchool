function addCard(title, text, imageUrl) {
    // clone the template
    const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
    // populate the template
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = text;
    template.querySelector(".card-img-container").innerHTML = `<img src="${imageUrl}" alt="car image" width="200"/>`;
    // include the populated template into the page
    document.querySelector("#card-list").appendChild(template);
}

// exercise 2
const data = [
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
    { 
        car: "Toyota Hilux", 
        description: "The Toyota Hilux is a series of light commercial vehicles produced and marketed by the Japanese automobile manufacturer Toyota", 
        image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/2023-Hilux-GRS-SAL-alt.png" 
    },
];

for (let record in data) {
    let titleValue = data[record].car;
    let textValue = data[record].description;
    let imageUrl = data[record].image;
    addCard(titleValue, textValue, imageUrl);
}