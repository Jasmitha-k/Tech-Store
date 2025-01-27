import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.contactContainer}>
        <h1>Contact Us</h1>
        <div style={styles.contactInfo}>
          <p><strong>Email:</strong> <a href="mailto:contact@website.com">contact@website.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1234567890">+91 1234322265</a></p>
          
          <div style={styles.socialLinks}>
            <p><strong>Follow Us:</strong></p>
            <p>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a> | 
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.link}> Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',  
    margin: 0,
  },
  contactContainer: {
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px', 
  },
  contactInfo: {
    fontSize: '1.2em',
  },
  socialLinks: {
    marginTop: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  }
};

export default ContactPage;
