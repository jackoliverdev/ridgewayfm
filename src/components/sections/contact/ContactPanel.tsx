import { SignPanel } from "@/components/ui/SignPanel";
import { contact, email, hours, phones, telHref } from "@/content/site";

const bigLink =
  "heading-text inline-flex min-h-11 max-w-full items-center text-[1.375rem] leading-[1.25] text-paper underline decoration-2 underline-offset-4";

export function ContactPanel() {
  return (
    <SignPanel fill>
      <dl className="flex flex-col gap-6">
        <div>
          <dt>{contact.panel.emailLabel}</dt>
          <dd>
            <a href={`mailto:${email}`} className={bigLink}>
              <span className="min-w-0 break-words">{email}</span>
            </a>
          </dd>
        </div>
        <div>
          <dt>{phones.serviceDesk.label}</dt>
          <dd>
            <a href={telHref(phones.serviceDesk.number)} className={bigLink}>
              {phones.serviceDesk.number}
            </a>
          </dd>
        </div>
        <div>
          <dt>{contact.panel.hoursLabel}</dt>
          <dd className="font-semibold">{hours.office}</dd>
        </div>
        <div>
          <dt>{phones.outOfHours.label}</dt>
          <dd>
            <a href={telHref(phones.outOfHours.number)} className={bigLink}>
              {phones.outOfHours.number}
            </a>
          </dd>
        </div>
      </dl>
      <p className="mt-6">{contact.panel.outOfHoursNote}</p>
      <p className="mt-auto pt-8 text-sm">{contact.panel.area}</p>
    </SignPanel>
  );
}
