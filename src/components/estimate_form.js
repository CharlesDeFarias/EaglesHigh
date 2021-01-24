const EstimateForm = () => (
  <div id="wrapper2">
    <div id="newsletter" className="container">
      <div className="title">
        <h2>Request a free estimate</h2>
        <span className="byline">Want to know the low-cost of our high-quality service? Send us your contact and as much information as possible.</span></div>
      <div className="content">
        <form method="post" action="#">
          <div className="row half">
            <div className="6u">
              <input type="text" className="text" name="name" placeholder="Your Name"/>
            </div>
            <div className="6u">
              <input type="text" className="text" name="email" placeholder="Email"/>
              {/*add field for number, add field for indicating preferred method of contact, add button for requesting estimate through facebook or instagram*/}
            </div>
          </div>
          <div className="row half">
            <div className="12u">
              <textarea name="message" placeholder="Any details you can share about the job"/>
            </div>
          </div>
          <div className="row">
            <div className="12u">
              <a href="#" className="button submit">Send estimate request</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default EstimateForm;