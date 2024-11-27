// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// i-Sommelier components
import MKBox from "components/MKBox";

// i-Sommelier examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import logo from "assets/images/logo.png";
import colors from "assets/theme/base/colors";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          {/* Left Section: Four DefaultInfoCards */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="wine_bar"
                  title="First Project: iSommelier App"
                  description="Transform your wine experience with iSommelier—a personalized recommendation app powered by advanced AI and expert oenology. Designed to help users find the perfect wine pairing for any occasion, the app enhances the way people enjoy and discover wines globally."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="lightbulb"
                  title="What’s Next?"
                  description="At InnoTech Solutions, we are more than a tech company—we are a hub for innovation. As we continue to grow, our commitment to creating impactful solutions that address societal challenges remains unwavering. Stay tuned for our upcoming projects that aim to make the world a better, more connected place."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="group"
                  title="Let's Innovate Together!"
                  description="Join us on this journey to a better tomorrow. Whether you're a business looking for transformative tech solutions or an individual seeking innovative products, InnoTech Solutions is here to help."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="email"
                  title="Contact Us"
                  description="Ready to take the next step? Reach out to our team and learn how InnoTech Solutions can make an impact on your business or daily life."
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Right Section: CenteredBlogCard */}
          <Grid item xs={12} lg={4}>
            <CenteredBlogCard
              image={logo}
              description="Introducing i-Sommelier, the revolutionary app that transforms your wine experience. Powered by advanced AI and expert oenology, i-Sommelier provides personalized wine recommendations tailored to your taste and occasion. Whether you're a seasoned wine lover or just beginning your journey, our app makes selecting the perfect bottle effortless, ensuring every sip is a memorable one."
              action={{
                type: "external",
                route: "https://www.innotechsolutions.com/isommelier",
                color: "info",
                label: "Learn More",
              }}
              bgColor={colors.background.default}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;