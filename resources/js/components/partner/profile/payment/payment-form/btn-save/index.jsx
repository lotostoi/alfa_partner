import { Button } from "@alfalab/core-components/button";

export default function ({ allDocs, className }) {
    return !allDocs ? (
        <Button
            block={false}
            size="s"
            view="primary"
            className={className}
        >
            Сохранить
        </Button>
    ) : null;
}
