import Image from "next/image";

export default function Contact(){
    return(
        <div className="contact">
            <div className="contact-textbox">
                <h1 className="contact-heading">Get in Touch</h1>
                <br />
                <p>This contact form is for demonstaration purpose only. It will not send actual message.</p>
            </div>
            
            <div className="form">
                <h2 className="contact-heading2">Contact Us</h2>
                <br/>
                <form action="">
                    <label htmlFor="name">Full Name</label>
                    <br />
                    <input type="text" placeholder="Enter your Name"/>
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" placeholder="Enter your Email"/>
                    <br />
                    <br />
                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea name="message" id="message" placeholder="Your Message" rows="4"></textarea>
                    <br />
                    <br />
                    <button type="submit" className="submit">submit</button>
                </form>
            </div>
              
        </div>
    );
}