import { CalendarInput } from "@alfalab/core-components/calendar-input";

export default function ({ allDocs, className, contractDate }) {
    return allDocs ? (
        <div className={className}>
            <CalendarInput defaultValue="30.12.2005" block mobileMode />
        </div>
    ) : null;
}
