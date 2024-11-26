// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// I-Sommelier components
import MKBox from "components/MKBox";

// I-Sommelier examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import logo from "assets/images/logos/logo.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Section 1: First Project */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={3}>
              <DefaultInfoCard
                icon="wine_bar"
                title="First Project: iSommelier App"
                description="Transform your wine experience with iSommelier—a personalized recommendation app powered by advanced AI and expert oenology. Designed to help users find the perfect wine pairing for any occasion, the app enhances the way people enjoy and discover wines globally."
              />
            </MKBox>
          </Grid>

          {/* Section 2: What's Next? */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={3}>
              <DefaultInfoCard
                icon="lightbulb"
                title="What’s Next?"
                description="At InnoTech Solutions, we are more than a tech company—we are a hub for innovation. As we continue to grow, our commitment to creating impactful solutions that address societal challenges remains unwavering. Stay tuned for our upcoming projects that aim to make the world a better, more connected place."
              />
            </MKBox>
          </Grid>

          {/* Section 3: Let's Innovate Together */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={3}>
              <DefaultInfoCard
                icon="group"
                title="Let's Innovate Together!"
                description="Join us on this journey to a better tomorrow. Whether you're a business looking for transformative tech solutions or an individual seeking innovative products, InnoTech Solutions is here to help."
              />
            </MKBox>
          </Grid>

          {/* Section 4: Contact Us */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={3}>
              <DefaultInfoCard
                icon="email"
                title="Contact Us"
                description="Ready to take the next step? Reach out to our team and learn how InnoTech Solutions can make an impact on your business or daily life."
              />
            </MKBox>
          </Grid>

          {/* Highlight: iSommelier App */}
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={logo}
              title="For the iSommelier App"
              description="Introducing iSommelier, the revolutionary app that transforms your wine experience. Powered by advanced AI and expert oenology, iSommelier provides personalized wine recommendations tailored to your taste and occasion. Whether you're a seasoned wine lover or just beginning your journey, our app makes selecting the perfect bottle effortless, ensuring every sip is a memorable one."
              action={{
                type: "external",
                route: "https://www.innotechsolutions.com/isommelier",
                color: "info",
                label: "Learn More",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;