import style from "./style.module.scss";
import { Pagination } from "@alfalab/core-components/pagination";
import { useState } from "react";

export default function () {
    const DATA_SIZE = 20;
    const PER_PAGE = 1;

    const [page, setPage] = useState(0);

    const handlePageChange = (pageIndex) => setPage(pageIndex);

    const pagesCount = Math.ceil(DATA_SIZE / PER_PAGE);

    return (
        <div className={style.wrapper}>
            <Pagination
                hideArrows={false}
                currentPageIndex={page}
                pagesCount={pagesCount}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
