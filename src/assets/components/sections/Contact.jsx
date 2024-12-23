import { motion } from "framer-motion";
import Title from "../basics/Title";

import FormElement from "../basics/FormElement";

import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (honeypot) {
      setResult("Erreur : Formulaire détecté comme spam.");
      return;
    }

    setResult("Envoi en cours...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "Merci !",
        text: "Votre message a bien été envoyé et je vous recontacte dès que possible !",
        icon: "success",
      });
    } else {
      console.log("Erreur", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      id="contact"
      className="pt-20 pb-4"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      <Title title="Contactez-moi" />
      <form
        className="flex flex-col items-center m-auto w-full lg:w-1/2 px-4"
        onSubmit={onSubmit}
      >
        <FormElement
          label="Ne pas remplir ce champ"
          type="text"
          name="honeypot"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
        <FormElement
          label="Nom et prénom"
          type="text"
          placeholder="Nom et Prénom"
          name="name"
          required="required"
        />
        <FormElement
          label="Email"
          type="email"
          placeholder="Adresse email"
          name="email"
          required="required"
        />
        <FormElement
          label="Entreprise"
          type="name"
          placeholder="Nom de votre entreprise"
          name="entreprise"
        />
        <FormElement
          label="Votre message"
          type="message"
          placeholder="Ecrivez votre message ici..."
          name="message"
          required
        />
        <div className="flex items-center w-full">
          <button
            className="border border-zinc-400 rounded-xl p-3 bg-purple-400 text-white font-medium my-4 text-xl w-full"
            type="submit"
          >
            Contactez-moi
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
