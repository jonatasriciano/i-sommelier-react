

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// i-Sommelier components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// i-Sommelier examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import hornby from "assets/images/squad/hornby.jpg";
import jonatas from "assets/images/squad/jonatas.jpg";
import aline from "assets/images/squad/aline.jpg";
import josemar from "assets/images/squad/josemar.jpg";
import naomy from "assets/images/squad/naomy.jpg";
import katia from "assets/images/squad/katia.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              At InnoTech Solutions, we are driven by one core mission: to pioneer innovative tech solutions that address real-world challenges and enhance the quality of life for individuals and communities worldwide.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={hornby}
                name="Hornby Tung"
                position={{ color: "info", label: "CEO" }}
                description="With over 25 years of entrepreneurial experience, Hornby drives InnoTech with his strategic vision and ability to seize opportunities, building lasting success for the company and its clients."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={aline}
                name="Aline Silveira"
                position={{ color: "info", label: "COO" }}
                description="Aline’s extensive legal background and operational leadership ensure smooth company operations, from administrative management to human resources."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={jonatas}
                name="Jonatas Riciano Silveira"
                position={{ color: "info", label: "CIO" }}
                description="With 20 years of transforming complex tech challenges into innovative solutions, Jonatas leads our tech strategy, ensuring cutting-edge implementation."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={katia}
                name="Katia Tung"
                position={{ color: "info", label: "CAO" }}
                description="Katia's expertise in operations and team management spans over three decades, bringing excellence in organization and client engagement."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={naomy}
                name="Naomy M Tung"
                position={{ color: "info", label: "CTO" }}
                description="Naomy’s expertise in software development ensures that InnoTech remains at the forefront of technological trends, spearheading innovation."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={josemar}
                name="Josemar Barros"
                position={{ color: "info", label: "CFO" }}
                description="With a decade of financial expertise, Josemar drives our financial strategy, ensuring stability and growth."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
