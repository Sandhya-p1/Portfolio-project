import { tmdb } from "@/assets/config/tmdb-client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Loader2 } from "lucide-react";
import Typography from "../ui/typography";
import SubListMoviesCollection from "./sublistmoviescollection";

function SublistMoviesNowPlayingGallery() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["nowplayinggallery"],
    queryFn: async () =>
      tmdb.get("/movie/now_playing").then((res) => res.data.results),
  });
  console.log(movies);
  if (isLoading)
    return (
      <div className="flex gap-x-1 items-center">
        <Loader2 className="animate-spin" />
        <Typography size="h3">Loading</Typography>
      </div>
    );
  return (
    <div className="w-[70%]">
      <SubListMoviesCollection movies={movies} />
    </div>
  );
}

export default SublistMoviesNowPlayingGallery;