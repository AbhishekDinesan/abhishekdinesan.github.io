import { useState, useEffect } from "react";
import { HStack, Text, Box, Spinner, Icon } from "@chakra-ui/react";
import { FaStar, FaCodeBranch, FaCircle } from "react-icons/fa";
import "../styles/GitHubStats.css";

const GitHubStats = ({ repoUrl }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!repoUrl) {
      setLoading(false);
      return;
    }

    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/\.]+)/);
    if (!match) {
      setLoading(false);
      return;
    }

    const [, owner, repo] = match;

    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          language: data.language,
          languageColor: getLanguageColor(data.language),
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching GitHub stats:", err);
        setError(true);
        setLoading(false);
      });
  }, [repoUrl]);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      "C++": "#f34b7d",
      Java: "#b07219",
      React: "#61dafb",
      CSS: "#563d7c",
      HTML: "#e34c26",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#ffac45",
    };
    return colors[language] || "#888";
  };

  if (loading) {
    return (
      <HStack gap={2} className="github-stats-loading">
        <Spinner size="xs" />
        <Text fontSize="xs" color="fg.muted">
          Loading stats...
        </Text>
      </HStack>
    );
  }

  if (error || !stats) {
    return null;
  }

  return (
    <HStack 
      className="github-stats"
      gap={{ base: 3, md: 4 }} 
      flexWrap="wrap"
      fontSize={{ base: "xs", md: "sm" }}
      color="fg.muted"
    >
      {/* Language */}
      {stats.language && (
        <HStack gap={1} className="github-stat-item">
          <Icon color={stats.languageColor} className="language-dot">
            <FaCircle size={10} />
          </Icon>
          <Text>{stats.language}</Text>
        </HStack>
      )}

      {/* Stars */}
      <HStack gap={1} className="github-stat-item">
        <Icon className="github-icon">
          <FaStar size={12} />
        </Icon>
        <Text>{stats.stars}</Text>
      </HStack>

      {/* Forks */}
      <HStack gap={1} className="github-stat-item">
        <Icon className="github-icon">
          <FaCodeBranch size={12} />
        </Icon>
        <Text>{stats.forks}</Text>
      </HStack>
    </HStack>
  );
};

export default GitHubStats;

