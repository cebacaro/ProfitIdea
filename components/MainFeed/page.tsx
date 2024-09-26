// app/ideas/page.tsx
import React from "react";
import Stripe from "@/components/stripe/page";
import { getData } from "@/app/actions"; // Ensure the import path matches your actual project structure
import { getCategories } from "@/app/actions"; // Ensure the import path matches your actual project structure

const Page = async () => {
  try {
    // Fetch data directly from the server action
    const ideas = await getData();
    const categories = await getCategories();
    console.log(ideas); // Log the ideas to inspect the structure if needed

    return (
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1>Ideas List</h1>
          <ul>
            {ideas.map((idea: any, index: number) => (
              <li key={idea.idea_id || index} className="mb-4">
                <h2 className="font-bold">{idea.title}</h2>
                <p className="text-gray-700">{idea.contents}</p>
              </li>
            ))}
          </ul>
          <ul>
            {categories.map((categories: any, index: number) => (
              <li key={categories.categories_id || index} className="mb-4">
                <h2 className="font-bold">{categories.id}</h2>
                <p className="text-gray-700">{categories.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Stripe />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in page component:", error);
    return <div>Error loading ideas. Please try again later.</div>;
  }
};

export default Page;
