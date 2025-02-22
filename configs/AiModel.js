const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

    export const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "Write a script to generate 30 seconds video on topic :Interesting historical story along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Okay, I can help you with that! Here's a JSON format script outlining a 30-second video on an interesting historical story, broken down into scenes with corresponding AI image prompts designed for a realistic style.  The story I've chosen is the \"Great Emu War\" in Australia.\n\n```json\n[\n  {\n    \"scene\": 1,\n    \"duration\": 3,\n    \"imagePrompt\": \"Wide shot of the Australian outback in 1932. Dry, dusty landscape. A flock of emus in the distance, moving towards cultivated wheat fields.  Realistic, high-resolution photograph, bright daylight.\",\n    \"contentText\": \"In 1932, Australia faced an unusual enemy...\"\n  },\n  {\n    \"scene\": 2,\n    \"duration\": 4,\n    \"imagePrompt\": \"Close-up of emus eating and trampling wheat crops. Focus on the damage being done. Use natural lighting and a slightly low angle to emphasize the scale of the birds and the destruction. Realistic photo, shallow depth of field.\",\n    \"contentText\": \"...Emus!  They were destroying valuable wheat crops...\"\n  },\n  {\n    \"scene\": 3,\n    \"duration\": 3,\n    \"imagePrompt\": \"Group of Australian farmers standing in a wheat field, looking distressed and helpless. They are wearing typical 1930s farming attire. The destroyed wheat is visible around them. Realistic, overcast lighting, medium shot.\",\n    \"contentText\": \"...Leaving farmers desperate.\"\n  },\n  {\n    \"scene\": 4,\n    \"duration\": 5,\n    \"imagePrompt\": \"An old military truck with a Lewis machine gun mounted on the back driving through the outback. Two soldiers wearing military uniforms are riding in the truck. Dust kicking up from the tires. Realistic, action shot, medium distance.\",\n    \"contentText\": \"The solution? Military intervention!\"\n  },\n  {\n    \"scene\": 5,\n    \"duration\": 4,\n    \"imagePrompt\": \"Close-up of a Lewis machine gun firing. Emus scattering in the background, some falling. Realistic, action shot, fast shutter speed to capture the motion blur. Dust and feathers in the air.\",\n    \"contentText\": \"The 'Great Emu War' began...\"\n  },\n  {\n    \"scene\": 6,\n    \"duration\": 4,\n    \"imagePrompt\": \"Wounded or dead emu lying on the ground. Soldier in the background looking frustrated. Sunlight is harsh. A depiction of the bleakness of the war. Realistic, somewhat somber tone, close-up.\",\n    \"contentText\": \"...But the emus proved surprisingly resilient.\"\n  },\n  {\n    \"scene\": 7,\n    \"duration\": 3,\n    \"imagePrompt\": \"Newspaper headline: 'Emu War Ends in Defeat for Military'. Farmers standing in the background, looking resigned. Realistic, recreation of a 1930s newspaper, desaturated colors.\",\n    \"contentText\": \"The 'war' ended in an embarrassing defeat...\"\n  },\n  {\n    \"scene\": 8,\n    \"duration\": 4,\n    \"imagePrompt\": \"Emu standing triumphantly on a hill overlooking wheat fields.  Symbolic image of the emus' victory. Golden hour lighting. Realistic, majestic pose.\",\n    \"contentText\": \"...for the military!\"\n  }\n]\n```\n\n**Explanation:**\n\n*   **JSON Format:** The data is structured as a JSON array of objects. Each object represents a scene in the video.\n*   **`scene`:**  The scene number (1-8).\n*   **`duration`:** The length of the scene in seconds.  The total duration adds up to 30 seconds.\n*   **`imagePrompt`:**  A detailed text prompt for an AI image generator. The prompt specifies the scene's content, setting, time of day, camera angle, and desired style (realistic, high-resolution photograph). I tried to provide sufficient detail to give an AI generator enough information to create a compelling and consistent visual narrative.  I also added detail regarding lighting and camera shots to enhance the realism.\n*   **`contentText`:**  The text that will be displayed on the screen during that scene (as a voiceover or caption). This provides context for the visuals.\n\n**How to Use This:**\n\n1.  **Copy the JSON code** into a text file and save it with a `.json` extension (e.g., `emu_war_script.json`).\n2.  **Use an AI Video Generator:** There are various AI video generation tools available online. Some popular options are RunwayML, Pika Labs, or similar tools.\n3.  **Feed the Image Prompts to the AI:** You can either manually copy and paste each `imagePrompt` into the AI image generator, or if the AI tool has an API, you can write a script to automatically feed the prompts and generate the images.\n4.  **Edit and Assemble:** Once you have the images, use a video editing program (like Adobe Premiere Pro, DaVinci Resolve, or even a free option like OpenShot) to arrange the images in the correct order, add the `contentText` as text overlays, and add music and sound effects.\n\n**Important Considerations:**\n\n*   **AI Image Generator Quality:** The quality of the final video will heavily depend on the AI image generator you use. Experiment with different generators and prompts to get the best results.\n*   **Prompt Engineering:**  Fine-tune the `imagePrompt` text to get the exact look and feel you want. Be specific about the details.\n*   **Aspect Ratio:** Ensure the AI image generator creates images with the correct aspect ratio for video (typically 16:9).\n*   **Consistency:**  Pay attention to the visual style of the generated images to maintain consistency throughout the video.\n*   **Music and Sound Effects:** Adding appropriate music and sound effects will significantly enhance the video's impact.\n\nI hope this helps you create your video! Let me know if you have any more questions.\n" },
                ],
            },
        ],
    });
