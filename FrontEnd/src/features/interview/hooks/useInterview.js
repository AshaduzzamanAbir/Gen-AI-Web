import {
  getAllInterviewReports,
  generateInterviewReport,
  generateInterviewReportById,
} from "../../auth/services/interview.api";
import { useContext } from "react";
import { InterviewContext } from "../interview.context";

export const useInterview = () => {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error("useInterview must be used within a InterviewProvider");
  }

  const { loading, report, reports, setLoading, setReport, setReports } =
    context;

  const generateReport = async ({
    jobDescription,
    selfDescription,
    resumeFile,
  }) => {
    setLoading(true);
    let response = null;
    try {
      response = await generateInterviewReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      setReport(response.interviewReport);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    return response?.interviewReport;
  };

  const getReportById = async (interviewId) => {
    setLoading(true);
    let response = null;
    try {
      response = await generateInterviewReportById(interviewId);
      console.log("API Response:", response);
      setReport(response.interviewReport);
      console.log("Report set:", response.interviewReport);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    return response?.interviewReport;
  };

  const getReports = async () => {
    setLoading(true);
    let response = null;
    try {
      const response = await getAllInterviewReports();
      setReports(response.interviewReports);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    return response?.interviewReports;
  };

  return {
    loading,
    report,
    reports,
    setLoading,
    setReport,
    setReports,
    generateReport,
    getReportById,
    getReports,
  };
};
