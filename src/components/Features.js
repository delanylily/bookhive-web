import React from "react";
import { FaBook, FaSearch, FaBookOpen, FaComments } from "react-icons/fa";

const Features = () => {
  const featuresList = [
    {
      id: 1,
      icon: <FaBook />,
      title: "Discover & Connect",
      description:
        "Browse books near you and easily like or pass on titles that catch your eye.",
    },
    {
      id: 2,
      icon: <FaSearch />,
      title: "Smart Filters",
      description:
        "Refine your search by category, language, or the distance of book owners to find exactly what you're looking for.",
    },
    {
      id: 3,
      icon: <FaBookOpen />,
      title: "Seamless Book Listing",
      description:
        "Instantly add books to your collection using the Google Books API—just search by title, and the details fill in automatically!",
    },
    {
      id: 4,
      icon: <FaComments />,
      title: "In-App Chat",
      description:
        "When there's a match, chat directly with the book owner to arrange your exchange effortlessly.",
    },
  ];

  return (
    <div className="container">
      <h2>App Features</h2>
      <div className="features-grid">
        {featuresList.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">
              <span
                className="feature-emoji"
                style={{ marginRight: "10px", fontSize: "1.5rem" }}
              >
                {feature.emoji}
              </span>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div
        className="app-showcase"
        style={{
          marginTop: "5rem",
          textAlign: "center",
          padding: "3rem",
          backgroundColor: "var(--secondary-color)",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "#333", fontSize: "2rem" }}>
          Swipe, Swap and Save
        </h3>
        <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
          Available on iOS and Android devices
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#download-ios"
            className="btn"
            style={{
              backgroundColor: "var(--primary-color)",
              padding: "1rem 2rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Download for iOS
          </a>
          <a
            href="#download-android"
            className="btn"
            style={{
              backgroundColor: "var(--primary-color)",
              padding: "1rem 2rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Download for Android
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
