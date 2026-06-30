const content = document.getElementById("content");

sections.forEach(section => {

    const sectionElement = document.createElement("section");

    const title = document.createElement("h2");

    title.textContent = section.title;

    sectionElement.appendChild(title);

    section.items.forEach(item => {

        const article = document.createElement("article");

        const h3 = document.createElement("h3");

        h3.textContent = item.title;

        const image = document.createElement("img");

        image.src = item.image;

        image.alt = item.title;

        image.loading = "lazy";

        article.appendChild(h3);

        article.appendChild(image);

        sectionElement.appendChild(article);

    });

    content.appendChild(sectionElement);

});