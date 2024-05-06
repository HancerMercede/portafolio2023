import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { Store } from "react-notifications-component";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const OnClear = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Store.addNotification({
            title: "Information",
            type: "info",
            message: "The massage send successfully 👌",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated animate__fadeIn"],
            animationOut: ["animate__animated animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          OnClear();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h3 className={styles.SectionTitle} id="Contact">
        Contact
      </h3>
      <div className={styles.container}>
        <form className={styles.contact_form} onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            name="user_name"
            placeholder="your name..."
            value={name}
            onChange={(env) => setName(env.target.value)}
          />
          <input
            type="text"
            name="user_email"
            placeholder="your email..."
            value={email}
            onChange={(env) => setEmail(env.target.value)}
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="your message..."
            maxLength={250}
            value={message}
            onChange={(env) => setMessage(env.target.value)}
          />
          <button type="submit" name="send" value="send">
            SEND
          </button>
        </form>
      </div>
    </>
  );
};
