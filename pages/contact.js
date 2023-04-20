import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import FooterSection from '@/components/FooterSection/FooterSection';
import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head';
import React from 'react';

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us - Ovserve Digital Solution</title> 
            </Head>
            <Navbar />
            <ContactUsSection />
            <FooterSection />
        </>
    );
};

export default contact;