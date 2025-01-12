# Zensphere - Winner at MetHacks 2023 🏆
## Inspiration💡
Imagine starving yourself, hating your body, and being reminded of the trauma everywhere you go. These are the words that haunted my everyday for years, triggers that never went away. And I’m not alone. People with body dysmorphia and eating disorders encounter this struggle daily, and what I wish I had in these dark moments was a tool to help me block triggers and roam the web in peace.


Our vision with ZenSphere is to allow those with any sort of triggers, not limited to body dysmorphia-related ones, to be able to access the web in comfort. We recognize that triggers differ between people, thus we ensure that ZenSphere supports personalization to protect everybody's mental health.


## What it does 💻
ZenSphere steps into the freshly opened webpage, takes a breath, and starts working.
It follows the following process:
1. It scrapes through every image and sentence on the page, checking if it is a potential trigger for the user (using **co.classify**)
2. It blurs all flagged images automatically, but with one click of a button, the user may reveal the image
3. All flagged text either gets blocked or described in neutral words (**co.generate**), depending on user's settings
4. ZenSphere takes a breather before the user moves on to another page, always ready to pounce on threats to the user's mental health!


## Challenges we ran into ⛰️
### co:here
Behind every great innovation are greater challenges. One major challenge we ran into was integrating our co:here API usage with our Chrome Extension frontend. Calling the API and employing it the way we desired was no easy feat, as none of us were particularly articulate with JavaScript in the backend angle.


Another notable challenge with co:here was training our own model for co.generate. We really took advantage of the training model to fit our application of the API, and worded our prompts in _a unique way_. Instead of giving a prompt like "The capital of France is ____" (Paris) we instead engineered a prompt structured as so:
```var desiredPrompt = [input through algorithm];
" '${desiredPrompt}' In one to a few words, this is a statement about"```
**BONUS:**
We also engineered a prompt that used examples within the prompt to produce much more accurate response. It ended up not making it into the final product, but it was too creative to cut out of the Devpost:
``` "[Example_1_INPUT, Example_1_OUTPUT, 
  Example_2_INPUT, Example_2_OUTPUT, 
  desiredPrompt,"```

It was our first time making a Chrome extension that edits the HTML of a page, and to add on to the challenge, we incorporated co:here's API as well!

## Accomplishments that we're proud of 🏅
- We are proud to have used the co:here platform
- The way we engineered our prompts to co.generate what we wanted was scrumptious
- We learned how to think like the NLP model
- We are proud to be able to upload our Chrome extension to the Chrome Web Store, publishing it to everybody!

## What's next for ZenSphere 🥅
- More data => better training => more accurate NLP model!
- Expand it past a Chrome extension-- make it an APP!
