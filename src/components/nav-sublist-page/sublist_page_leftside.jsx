import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Typography from "@/components/ui/typography";

import React from "react";
import { cn } from "@/lib/utils";

function NavSublistPageLeftSide({ heading }) {
  return (
    <div className="flex flex-col gap-y-3 text-black w-[20%]">
      <Typography size="2xl" className="pb-3">
        {heading}
      </Typography>
      {/* 1st accordion */}
      <div className="border rounded-md px-4 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Sort By</AccordionTrigger>
            <hr />
            <AccordionContent className="pt-2">
              Sort Results By
            </AccordionContent>
            <AccordionContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Popular Descending" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="popularity aescending">
                    Popularity Ascending
                  </SelectItem>
                  <SelectItem value="popularity descending">
                    Popularity Descending
                  </SelectItem>
                  <SelectItem value="rating ascending">
                    Rating Ascending
                  </SelectItem>
                  <SelectItem value="rating descending">
                    Rating Descending
                  </SelectItem>
                  <SelectItem value="release date ascending">
                    Release Date Ascending
                  </SelectItem>
                  <SelectItem value="release date descending">
                    Release Date Descending
                  </SelectItem>
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* 2nd accordion */}
      <div className="border rounded-md px-4 shadow-sm">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Filter</AccordionTrigger>
            <hr />
            <AccordionContent className="text-gray-700 pt-2">
              Show me
            </AccordionContent>
            <AccordionContent>
              <ToggleGroup type="multiple" className="flex flex-col">
                <ToggleGroupItem value="everything">Everything</ToggleGroupItem>
                <ToggleGroupItem value="moviesihaventseen">
                  Movies I Haven't Seen
                </ToggleGroupItem>
                <ToggleGroupItem value="moviesihaveseen">
                  Movies I Have Seen{" "}
                </ToggleGroupItem>
              </ToggleGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default NavSublistPageLeftSide;