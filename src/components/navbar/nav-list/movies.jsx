import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:underline">
          Movies
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/moviespopular"> Popular</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to="/moviesnowplaying"> Now Playing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/moviesupcoming"> UpComing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/moviestoprated">Top Rated</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default Movies;
