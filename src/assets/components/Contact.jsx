import React, { useState } from "react";
import Swal from "sweetalert2";

import { motion } from "framer-motion";

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
      <h1 className="my-10 text-center text-2xl lg:text-6xl">Contactez-moi</h1>
      <form
        className="flex flex-col items-center m-auto w-full lg:w-1/2 px-4"
        onSubmit={onSubmit}
      >
        <div style={{ display: "none" }}>
          <label>Ne pas remplir ce champ</label>
          <input
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="my-4 lg:text-xl">
            Nom et Prénom <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nom et Prénom"
            required
            className="my-2 p-2 border border-zinc-400 rounded-xl lg:text-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="my-4 lg:text-xl">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            placeholder="Adresse email"
            name="email"
            required
            className="my-2 p-2 border border-zinc-400 rounded-xl lg:text-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="my-4 lg:text-xl">Entreprise</label>
          <input
            type="name"
            placeholder="Nom de votre entreprise"
            name="entreprise"
            className="my-2 p-2 border border-zinc-400 rounded-xl lg:text-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="my-4 lg:text-xl">
            Votre message <span className="text-red-600">*</span>
          </label>
          <textarea
            type="message"
            placeholder="Ecrivez votre message ici..."
            name="message"
            required
            className="text-start my-2 p-2 border border-zinc-400 rounded-xl h-40 lg:text-lg"
          />
        </div>
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
