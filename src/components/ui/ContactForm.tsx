"use client";

import { FormEvent, useState } from "react";
import { serviceOptions } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [trap, setTrap] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (trap) return;
    const data = new FormData(event.currentTarget);
    const required = ["name", "email", "service", "message"];
    const hasMissing = required.some((field) => !String(data.get(field) || "").trim());

    if (hasMissing) {
      setState("error");
      return;
    }

    setState("loading");
    window.setTimeout(() => {
      setState("success");
      event.currentTarget.reset();
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <input className="hidden" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      <label>
        Nombre
        <input name="name" type="text" required placeholder="Tu nombre" />
      </label>
      <label>
        Empresa
        <input name="company" type="text" placeholder="Nombre de la empresa" />
      </label>
      <label>
        Correo electrónico
        <input name="email" type="email" required placeholder="correo@empresa.com" />
      </label>
      <label>
        Teléfono
        <input name="phone" type="tel" placeholder="+58" />
      </label>
      <label>
        Tipo de servicio
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Selecciona una opción
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Mensaje
        <textarea name="message" required placeholder="Cuéntanos qué necesitas mejorar, conectar o automatizar." />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        Acepto que NetworX Solutions utilice esta información para responder mi solicitud.
      </label>
      <button type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Enviando..." : "Solicitar una consulta"}
      </button>
      {state === "success" && <p className="form-message success">Solicitud preparada. Conecta una API o correo para recibirla.</p>}
      {state === "error" && <p className="form-message error">Revisa los campos requeridos antes de enviar.</p>}
    </form>
  );
}
