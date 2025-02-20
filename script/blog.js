const blogPostData = [

    {
        image: "images/blog/patato-group.webp",
        title: "Patato Group",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/fruit-basket.webp",
        title: "Fruit Basket",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/green-capsicum.png",
        title: "Green Capsicum",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/cow.webp",
        title: "Cow",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/sliced-cucumber.webp",
        title: "Sliced Cucumber",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/stacked-oranges.webp",
        title: "Stacked Oranges",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/tomatos-greens.webp",
        title: "Tomatos Greens",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/halloween.png",
        title: "Halloween",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"      
    },
    {
        image: "images/blog/coffee-bean.webp",
        title: "Coffee Bean",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    },
    {
        image: "images/blog/tomatos-on-farm.webp",
        title: "Tomatos On Farm",
        headline: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
        link: "Read More ➡"
    }
]


function createBlogPost (blogData) {
    let blogPost = document.querySelector('.blog-wrapper');
    blogPost.innerHTML = '';

    if (blogData && blogData.length > 0) {
        let htmlString = '';

        blogData.forEach(data => {
            htmlString += `
                <div class="blog-container">

                    <div class="blog-img">
                        <img src="${data.image}" alt="${data.title}">
                    </div>

                    <div class="blog-content">
                        <p>${data.headline}</p>
                        <a href="#">${data.link}</a>
                    </div>

                </div>
            `;
        });
        blogPost.innerHTML = htmlString;
    } else {
        console.log("No data exist.")
    }
}

createBlogPost(blogPostData)