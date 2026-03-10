const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 0 and 100 indicating how well the candidate matches the job description",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe(
            "The technical question that can be asked in the interview",
          ),
        intention: z
          .string()
          .describe("The intention of interviewer behind ask this question"),
        answer: z
          .string()
          .describe(
            "How to answer the question, what points to cover , what approch to use for answering the question",
          ),
      }),
    )
    .describe(
      "Technical questions that can be asked in the interview along with their intention and how to answer them",
    ),
  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe(
            "The behavioral question that can be asked in the interview",
          ),
        intention: z
          .string()
          .describe("The intention of interviewer behind ask this question."),
        answer: z
          .string()
          .describe(
            "How to answer the question, what points to cover , what approch to use for answering the question",
          ),
      }),
    )
    .describe(
      "Behavioral questions that can be asked in the interview along with their intention and how to answer them",
    ),
  skillGaps: z
    .array(
      z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z
          .enum(["Low", "Medium", "High"])
          .describe(
            "The severity of this skill gap, i.e. how important it is to the candidate",
          ),
      }),
    )
    .describe(
      "List of skill gaps in the candidate's resume or profile along with this severity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .string()
          .describe("The day number in the preparation plan , string from 1 "),
        focus: z
          .string()
          .describe("The main focus of this day in the preparation plan"),
        tasks: z
          .array(z.string())
          .describe("List of tasks for this day in the preparation plan"),
      }),
    )
    .describe(
      "A day-wise preparation plan for the candidate to follow in the order to prepare for the interview",
    ),
  title: z
    .string()
    .describe(
      "The title of the job for which the interview report are the genereted",
    ),
});

async function interviewReport({ resume, selfDescription, jobDescription }) {
  const prompt = `Generate an interview report for a candidate with the following details:

  Resume: ${resume}
  Job Description: ${jobDescription}
  Self Description: ${selfDescription}`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(interviewReportSchema),
    },
  });
  console.log(response.text);
}

module.exports = interviewReport;
