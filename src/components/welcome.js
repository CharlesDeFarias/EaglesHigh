const Welcome = () => (
  <div id="wrapper1">
    <div id="welcome" className="container">
      <div className="title">
        <h2>Hire a company that truly loves painting and cares about quality</h2>
        <span className="byline">Eagles High is committed to providing you with quality painting that you'll never regret. </span>
      </div>
      <div className="content">
        <p><strong>Eagles High Painting, Inc</strong> is a family owned painting company that has been in business since {/*TODO: put in date*/}. We have always strived to provide quality work that will never be regretted and always come highly recommended. Thus far, our business has survived only by word of mouth and as such, has always depended deeply on our customers satisfaction.

          Need something painted but don't want to spend an arm and a leg? You've found the right company!
        </p>

        <a href="#" className="button">Contact us now for a free cost estimate</a>
          {/* TODO put in link for button */}
      </div>
    </div>
  </div>
  );

export default Welcome;