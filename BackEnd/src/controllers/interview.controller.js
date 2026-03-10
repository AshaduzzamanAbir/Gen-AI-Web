const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.services");
const interviewReportModel = require("../models/interviewReport.model");

/**
 * @description Controller to generate interview report based on userself description , job description
 */

async function generateInterviewReportController(req, res) {
  const resumeContent = await new pdfParse.PDFParse(
    Uint8Array.from(req.file.buffer),
  ).getText();
  const { selfDescription, jobDescription } = req.body;

  const interViewReportByAi = await generateInterviewReport({
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
  });

  const interviewReport = await interviewReportModel.create({
    user: req.user.id,
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
    ...interViewReportByAi,
  });

  res.status(200).json({
    message: "Interview report generated successfully",
    interviewReport,
  });
}

/**
 * @description Controller get interview  report by interviewId
 */

async function getInterviewReportByIdController(req, res) {
  const { interviewId } = req.params;

  const interviewReport = await interviewReportModel.findOne({
    _id: interviewId,
    user: req.user.id,
  });

  if (!interviewReport) {
    return res.status(404).json({
      message: "Interview Report Not Found.",
    });
  }

  res.status(200).json({
    message: "Interview Report Fetch Successfully",
    interviewReport,
  });
}

/**
 * @description Controller For Get All Interview Reports of Loggeding User
 */

async function getAllInterviewReportsController(req, res) {
  const interviewReports = await interviewReportModel
    .find({
      user: req.user.id,
    })
    .sort({ createdAt: -1 })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
    );

  res.status(200).json({
    message: "All Interview Reports Fetched Successfully",
    interviewReports,
  });
}

module.exports = {
  generateInterviewReportController,
  getInterviewReportByIdController,
  getAllInterviewReportsController,
};
