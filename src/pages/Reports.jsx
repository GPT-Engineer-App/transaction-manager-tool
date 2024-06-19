import { Box, Heading, Button } from "@chakra-ui/react";

const Reports = () => {
  const generateReport = () => {
    console.log("Report Generated");
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Reports</Heading>
      <Button onClick={generateReport}>Generate Report</Button>
    </Box>
  );
};

export default Reports;