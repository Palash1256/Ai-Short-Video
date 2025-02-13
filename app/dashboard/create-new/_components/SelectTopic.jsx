"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const SelectTopic = ({onUserSelect}) => {
    
  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Historical Facts",
    "Bed Time Story",
    "Motivational Story",
    "Fun-Facts",
  ];

  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Content</h2>
      <p className="text-gray-500">What is topic of your vedio?</p>
      <Select onValueChange={(value) => {setSelectedOption(value)
        value!='Custom Prompt' && onUserSelect('topic',value)
      }}>
        <SelectTrigger className="w-full mt-2 p- text-lg">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        {/* <SelectContent>
          {options.map((item, index) => {
            <SelectItem value={item} key={index}>{item}</SelectItem>;
          })}
        </SelectContent> */}
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedOption == "Custom Prompt" && 
      <Textarea className='mt-3 ' 
      onChange={(e)=>onUserSelect('topic',e.target.value)}
       placeholder="write prompt on which you want to generate video"/> }
    </div>
  );
};

export default SelectTopic;
