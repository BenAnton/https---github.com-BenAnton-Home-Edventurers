import SideBar from "../components/Forum-Components/Sidebar";
import "../pages/Community.css";
import Feed from "../components/Forum-Components/Feed";
import { useState } from "react";

const testCategories = [
  "All",
  "General Discussion",
  "Unschooling",
  "Nature",
  "Hygge",
  "Unschooling",
  "Montessori",
  "Waldorf",
  "Child-Led-Learning",
];

function Community() {
  const [selectedCategory, setSelectedCategory] = useState(testCategories[0]);

  return (
    <div className="forum-cont">
      <SideBar
        testCategories={testCategories}
        onSelectedCategory={setSelectedCategory}
      />
      <Feed category={selectedCategory} />
    </div>
  );
}

export default Community;
