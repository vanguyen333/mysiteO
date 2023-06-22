const Contact = () => {
  return (
    <div className="footer h-60 pt-10 mt-32 text-center">
      <form action="submit">
        <h1>
          Contact <span>me</span>
        </h1>
        <label htmlFor="name">Name: </label>
        <input className="border" type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input className="border" type="text" name="email" id="email" />
        <br />
        <label htmlFor="subject">Subject:</label>
        <input className="border" type="text" name="subject" id="subject" />
        <br />
        <label htmlFor="message">Message:</label>
        <input className="border" type="text" name="message" id="message" />
        <br />
        <button className="border bg-sky-400"> Submit</button>
      </form>
    </div>
  );
};

export default Contact;
