import PageHeader from "./common/pageHeader";
const About = () => {
  return (
    <PageHeader
      title="About Us"
      description={
        <>
          <h3>Welcome to our Electrical Products Store!</h3>
          <p className="fs-4 fw-bolder">
            {" "}
            At <strong>powerfull</strong>, we are passionate about providing
            high-quality electrical products to our customers. You must register
            to enjoy a shopping experience.
          </p>
          <p> Our mission is to pass the full-stack final project </p>{" "}
        </>
      }
    />
  );
};

export default About;
