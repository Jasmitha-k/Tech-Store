'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.imageContainer}>
        <img 
          src="/images/download.jpg" 
          alt="Electronic Device" width ='50'
          style={styles.deviceImage}
        />
      </div>
      <div style={styles.infoContainer}>
        <p style={styles.infoText}>
          At Our Electronics Store, we offer the latest and greatest gadgets and electronic devices to help improve your life. 
          Whether you're looking for the latest headphones, smartphones, laptops, or smartwatches, we have everything you need to stay ahead of the curve.
        </p>
        <p style={styles.infoText}>
          Browse our wide range of products and enjoy amazing deals and fast shipping. Start shopping now and experience top-notch customer service!
        </p>
        <Link href="/blogpost/some-slug/about" passHref>
          <button style={styles.exploreButton}>
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  imageContainer: {
    marginBottom: '50px',
  },
  deviceImage: {
    width: '100%',
    maxWidth: '1000px', 
    height: 'auto',
    borderRadius: '8px',
  },
  infoContainer: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  infoText: {
    fontSize: '1.2em',
    marginTop: '10px',
    lineHeight: '1.6',
    color: '#333',
  },
  exploreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2em',
  },
};

export default HomePage;
