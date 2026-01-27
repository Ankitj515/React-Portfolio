export function ContactForm(){
    return(
        <>
        <form action="" className="contact-form">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="Name" />
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" placeholder="Enquiry"></textarea>  
            <button className="btn">Submit</button>      
            
        </form>
        </>
    );
}