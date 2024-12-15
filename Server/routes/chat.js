const router = require("express").Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const data = require("../TrainingData/Data");



// ----------------------------------------------------
//-----------------------google api----------------------
//----------------------------------------------------
const genAI = new GoogleGenerativeAI(process.env.Google_API_KEY);



let chatInstance;
async function run(string) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const chatHistory = [
    {
      role: "user",
      parts: data,
    },
    {
      role: "model",
      parts: ["Hi! I can answer your questions or generate creative text formats. What would you like to do?"],
    },
  ];
  // console.log(chatData_All[chatData_All.length - 1]);
  try{
    chatInstance = model.startChat({
      history: chatHistory
      ,
      generationConfig: {
        maxOutputTokens: 400,
      },
    });
    const result = await chatInstance.sendMessage(string);
    const response = await result.response;
    const text = response.text();
    return text;
  }
  catch(err){
    console.log(err);
    return "Im crafted to delierver the chat instance for career guidance only";
  }
  // console.log("model is loaded successfully");
}


router.post("/", async (req, res) => {
    console.log(req.body.message);
    let result = await run(req.body.message);
	res.send({result:result});
});

module.exports = router;
