import { Fragment } from "react";
import { Hairline } from "@/components/ui/Hairline";
import { Section } from "@/components/ui/Section";
import { about } from "@/content/site";

export function HowWeWork() {
  return (
    <Section tone="mist">
      <h2>{about.howWeWork.title}</h2>
      <div className="mt-10 flex flex-col md:flex-row">
        {about.howWeWork.items.map((item, index) => (
          <Fragment key={item.title}>
            {index > 0 ? (
              <>
                <Hairline className="my-8 md:hidden" />
                <Hairline
                  orientation="vertical"
                  className="mx-8 hidden md:block"
                />
              </>
            ) : null}
            <div className="min-w-0 flex-1">
              <h3>{item.title}</h3>
              <p className="mt-3 min-h-[4.8em]">{item.body}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
