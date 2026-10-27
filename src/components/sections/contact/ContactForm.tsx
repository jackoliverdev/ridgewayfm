"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contact } from "@/content/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const controlClass =
  "mt-2 block h-12 w-full rounded-[4px] border border-rule bg-mist px-3 font-[inherit] text-ink";

const textareaClass =
  "mt-2 block w-full rounded-[4px] border border-rule bg-mist p-3 font-[inherit] text-ink";

type Values = {
  name: string;
  organisation: string;
  email: string;
  site: string;
  need: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  need?: string;
  message?: string;
};

type Confirmation = {
  firstName: string;
  email: string;
};

const emptyValues: Values = {
  name: "",
  organisation: "",
  email: "",
  site: "",
  need: "",
  message: "",
};

function applyToken(template: string, token: string, value: string) {
  return template.split(token).join(value);
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-sm text-error">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const needRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function update(field: keyof Values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = values.name.trim();
    const emailValue = values.email.trim();
    const need = values.need.trim();
    const message = values.message.trim();
    const nextErrors: Errors = {};

    if (!name) {
      nextErrors.name = contact.form.name.error;
    }

    if (!emailValue || !emailPattern.test(emailValue)) {
      nextErrors.email = contact.form.email.error;
    }

    if (!need) {
      nextErrors.need = contact.form.need.error;
    }

    if (!message) {
      nextErrors.message = contact.form.message.error;
    }

    setErrors(nextErrors);

    if (nextErrors.name) {
      nameRef.current?.focus();
      return;
    }

    if (nextErrors.email) {
      emailRef.current?.focus();
      return;
    }

    if (nextErrors.need) {
      needRef.current?.focus();
      return;
    }

    if (nextErrors.message) {
      messageRef.current?.focus();
      return;
    }

    setConfirmation({
      firstName: name.split(/\s+/)[0] ?? "",
      email: emailValue,
    });
  }

  function handleAnother() {
    setValues({ ...emptyValues });
    setErrors({});
    setConfirmation(null);
  }

  if (confirmation) {
    return (
      <div role="status">
        <h2>
          {applyToken(
            contact.form.confirmationHeading,
            "{first name}",
            confirmation.firstName,
          )}
        </h2>
        <p className="mt-4">
          {applyToken(
            contact.form.confirmationBody,
            "{email}",
            confirmation.email,
          )}
        </p>
        <button
          type="button"
          onClick={handleAnother}
          className="mt-6 inline-flex min-h-11 items-center text-ridgeway underline decoration-2 underline-offset-4"
        >
          {contact.form.another}
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="mt-0">
        <label htmlFor="contact-name" className="block text-ink">
          {contact.form.name.label}
        </label>
        <input
          ref={nameRef}
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={controlClass}
        />
        <FieldError id="contact-name-error" message={errors.name} />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-organisation" className="block text-ink">
          {contact.form.organisation.label}
        </label>
        <input
          id="contact-organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          value={values.organisation}
          onChange={(event) => update("organisation", event.target.value)}
          aria-describedby="contact-organisation-hint"
          className={controlClass}
        />
        <p id="contact-organisation-hint" className="mt-2 text-sm text-ink-soft">
          {contact.form.organisation.hint}
        </p>
      </div>

      <div className="mt-6">
        <label htmlFor="contact-email" className="block text-ink">
          {contact.form.email.label}
        </label>
        <input
          ref={emailRef}
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={controlClass}
        />
        <FieldError id="contact-email-error" message={errors.email} />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-site" className="block text-ink">
          {contact.form.site.label}
        </label>
        <input
          id="contact-site"
          name="site"
          type="text"
          value={values.site}
          onChange={(event) => update("site", event.target.value)}
          className={controlClass}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-need" className="block text-ink">
          {contact.form.need.label}
        </label>
        <select
          ref={needRef}
          id="contact-need"
          name="need"
          required
          value={values.need}
          onChange={(event) => update("need", event.target.value)}
          aria-invalid={errors.need ? true : undefined}
          aria-describedby={errors.need ? "contact-need-error" : undefined}
          className={controlClass}
        >
          <option value="">{contact.form.need.placeholder}</option>
          {contact.form.need.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError id="contact-need-error" message={errors.need} />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-message" className="block text-ink">
          {contact.form.message.label}
        </label>
        <textarea
          ref={messageRef}
          id="contact-message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={textareaClass}
        />
        <FieldError id="contact-message-error" message={errors.message} />
      </div>

      <div className="mt-6">
        <Button type="submit">{contact.form.submit}</Button>
      </div>
    </form>
  );
}
