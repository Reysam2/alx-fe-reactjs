import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["Posts"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      console.log(res.data);
      return res.data;
    },
     keepPreviousData: true,
     staleTime: 10000,
     refetchOnWindowFocus: true,
     cacheTime: 300000,
      
  });

  const fetchPosts = () => {
     refetch()
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong: {error.message || "Unknown error"}</p>;

  return (
    <div className="w-[100%] h-[100%] bg-gray-300 grid grid-cols-2 place-items-center gap-x-2 gap-y-7 p-2">
      <div>
        <button onClick={fetchPosts} className="border p-[0.5rem_1.6rem] hover:text-amber-200 hover:bg-amber-950 transition-all duration-200 ease-in-out active:scale-90">
          Refresh
        </button>
      </div>
      {data &&
        data.map((post) => (
          <div
            className="w-70 h-70 border flex flex-col items-center justify-around p-4 hover:shadow-2xl hover:drop-shadow-2xl"
            key={post.id}
          >
            <h1 className="text-amber-950">{post.title}</h1>
            <p className="text-amber-600">{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default PostsComponent;
