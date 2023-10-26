import React from "react";
import "./Course.css"; // Import the corresponding CSS file

const FeaturedArticles = () => {

  const articles = [
    {
      name: "The Blazing World, by Margaret Cavendish (1666)",
      description:
        "This book is arguably the first science fiction book ever written.",
      rating: 4.5,
      image:
        "https://media.wired.co.uk/photos/619b9bc86081217648e4913f/master/w_1600,c_limit/22032021_SCI-FI_01.jpg",
      authorname: "Margaret Cavendish",
    },
    {
      name: "Frankenstein, by Mary Shelley (1818)",
      description:
        "Two centuries later, it is a major ancestor of both the science fiction and horror genres, tackling huge themes like the nature of life and death, immortality and genetic engineering",
      rating: 4.8,
      image:
        "https://media.wired.co.uk/photos/619b9bcb18d3a4b1cd1e58f3/master/w_1600,c_limit/22032021_SCI-FI_08.jpg",
      authorname: "Mary Shelley",
    },
    {
      name: "Foundation, by Isaac Asimov (1951)",
      description:
        "Asimov was a prolific writer, but many of his best works are classic short stories such as Nightfall, or The Last Question, which play out like long jokes with a punchline twist at the end. In the Foundation series, he’s in another mode entirely, charting the rise and fall of empires in sweeping brush strokes",
      rating: 4.2,
      image:
        "https://media.wired.co.uk/photos/619b9bcb419aaddb4fcde3e8/master/w_1600,c_limit/22032021_SCI-FI_07.jpg",
      authorname: "Isaac Asimov",
    },
  ];
  const tutorials = [
    {
      title: "C# Course",
      description: "Best For Begginers!",
      link: "https://www.youtube.com/watch?v=gfkTfcpWqAY",
      image: "https://img.youtube.com/vi/gfkTfcpWqAY/sddefault.jpg",
      Youtube: "Freecodecamps.org",
      rating: 3.5,
    },
    {
      title: "Data Structures and Algorithms",
      description: "Best Course on YT!",
      link: "https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
      image: "https://img.youtube.com/vi/5_5oE5lgrhw/sddefault.jpg",
      Youtube: "CodeWithHarry",
      rating: 4.3,
    },
    {
      title: "React Tutorial",
      description: "Best Course on YT!",
      link: "https://www.youtube.com/watch?v=RGKi6LSPDLU&t=1013s",
      image: "https://img.youtube.com/vi/RGKi6LSPDLU/sddefault.jpg",
      Youtube: "CodeWithHarry",
      rating: 4.0,
    },
  ];

  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img
              src={article.image}
              alt={article.name}
              className="article-image"
            />
            <h3>{article.name}</h3>
            <p>{article.description}</p>
            <div className="rating">Rating:⭐️{article.rating}</div>
            <div className="author">{article.authorname}</div>
          </div>
        ))}
      </div>
      <button className="see-more-button">See More Articles</button>
      <div className="featured-tutorials">
        <h2 className="section-title">Featured Tutorials</h2>
        <div className="tutorial-list">
          {tutorials.map((tutorial, index) => (
            <div className="tutorial" key={index}>
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="tutorial-image"
              />
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <div className="rating">Rating:⭐️{tutorial.rating}</div>
              <a
                href={tutorial.link}
                className="tutorial-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Tutorial
              </a>
              <div className="author">{tutorial.Youtube}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="see-more-tutorials">See More Tutorials</button>

      <div className="newsletter-signup">
        <h2 className="section-title">Subscribe for the Newsletter</h2>
        <p>Stay updated with the latest articles and tutorials.</p>
        <form className="newsletter-form" action="/subscribe" method="POST">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="newsletter-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeaturedArticles;
