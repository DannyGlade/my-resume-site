import React from 'react'
import styles from './styles.module.css'
import ContactCard from './ContactCard'
import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MdMail } from "react-icons/md";

export default function Contact() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    });

    const contacts = [
        {
            name: 'Email',
            link: 'mailto:darshannariya12@gmail.com',
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/darshan-nariya/',
        },
        {
            name: 'GitHub',
            link: 'https://github.com/dannyglade'
        }
    ]

    const handleSubmit = (event) => {
        // event.preventDefault();

        console.log(form.isValid());

        if (form.isValid()) {
            console.log(form.values);

            let mailtoLink = contacts[0].link + '?subject=' + encodeURIComponent(form.values.subject) + '&body=' + encodeURIComponent(form.values.message);

            window.open(mailtoLink, '_blank');
            form.reset();
        }


    }

    return (
        <div id='contact' className={styles.contact}>
            <div className={styles.contact__heading}>
                <h2>say hi!...</h2>
            </div>
            <div className={{}}>
                <form onSubmit={form.onSubmit(handleSubmit)} className={[styles.form__container]}>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl" >
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            name="name"
                            variant="filled"
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Your email"
                            name="email"
                            variant="filled"
                            {...form.getInputProps('email')}
                        />

                    </SimpleGrid>
                    <TextInput
                        label="Subject"
                        placeholder="Subject"
                        mt="md"
                        name="subject"
                        variant="filled"
                        {...form.getInputProps('subject')}
                    />
                    <Textarea
                        mt="md"
                        label="Message"
                        placeholder="Your message"
                        maxRows={10}
                        minRows={5}
                        autosize
                        name="message"
                        variant="filled"
                        {...form.getInputProps('message')}
                    />

                    <Group justify="center" mt="xl">
                        <Button type="submit" variant="default" size="md">
                            <MdMail style={{ scale: 1.2, marginRight: '10px' }} />
                            Send Message
                        </Button>
                    </Group>
                </form>
            </div>
            <div className={styles.contact__heading}>
                <h2>or find me here...</h2>
            </div>
            <div className={styles.contact__container}>
                {contacts.map((contact, index) => (
                    <ContactCard key={index} name={contact.name} link={contact.link} />
                ))}
            </div>

        </div>
    )
}
