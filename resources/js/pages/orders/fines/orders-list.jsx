import {useState, useMemo} from "react";

import style from "./style.module.scss";

// import { Button } from "@alfalab/core-components/button";
// import { FormatXlsSWhiteIcon } from '@alfalab/icons-classic/FormatXlsSWhiteIcon';
// import { FilterMIcon } from '@alfalab/icons-glyph/FilterMIcon';
// import { CloseCircleMBlackIcon } from '@alfalab/icons-classic/CloseCircleMBlackIcon';
// import { SettingsCompactSIcon } from '@alfalab/icons-glyph/SettingsCompactSIcon';
import { InfoSIcon } from '@alfalab/icons-classic/InfoSIcon';
import { Table } from '@alfalab/core-components/table';
import { Typography } from '@alfalab/core-components/typography';



const data = [
    {
        id: 1,
        date: '20.01.2021',
        type: 'Реферальная программа',
        product: 'РКО',
        amount: '3 500 ',
        reestr: '1- 31 марта 2022 №267',
        comment: 'Реферальная программа 5 000',
    },
    {
        id: 12,
        date: '31.03.2021',
        type: 'Доплата',
        product: 'Дебетовая карта Mob',
        amount: '1 500 ',
        reestr: '1- 31 марта 2022 №267',
        comment: 'Коррекция ставок РКО декабря (1 заявка до ставки 7000)',
    },
    {
        id: 20,
        date: '06.06.2021',
        type: 'Доплата',
        product: 'Дебетовая карта Mob',
        amount: '1 500 ',
        reestr: '1- 31 марта 2022 №267',
        comment: 'Коррекция ставок РКО декабря (1 заявка до ставки 7000)',
    },
    {
        id: 7,
        date: '12.05.2021',
        type: 'Доплата',
        product: 'РКО',
        amount: '11 500 ',
        reestr: '1- 31 марта 2022 №267',
        comment: 'Коррекция ставок РКО декабря (1 заявка до ставки 7000)',
    },
    {
        id: 88,
        date: '01.03.2021',
        type: 'Доплата',
        product: 'Дебетовая карта Mob',
        amount: '1 500 ',
        reestr: '1- 31 марта 2022 №267',
        comment: 'Коррекция ставок РКО декабря (1 заявка до ставки 7000)',
    },
];

function checkStatus(status='') {
    if (!status) {
        return 'primary';
    }

    switch (status) {
        case "Заявка отменена, Фрод Новая":
            return 'negative';
        case "Карта выдана":
            return 'positive';
        default:
            return 'primary';
    }

}

export default function () {
    const [perPage, setPerPage] = useState(9);
    const [page, setPage] = useState(0);

    const handlePerPageChange = value => {
        setPage(0);
        setPerPage(value);
    };
    const handlePageChange = pageIndex => setPage(pageIndex);

    const pagesCount = Math.ceil(data.length / perPage);

    const currentPageData = useMemo(() => {
        return data.slice(page * perPage).slice(0, perPage);
    }, [data, page, perPage]);

    return (
        <div className={style.fines}>
            <div className={style.fines__table} style={{ margin: '24px 0 40px' }}>
                <Table
                    wrapper={false}
                    pagination={
                        <Table.Pagination
                            className={style['pagination_theme_light']}
                            perPage={perPage}
                            currentPageIndex={page}
                            pagesCount={pagesCount}
                            onPageChange={handlePageChange}
                            onPerPageChange={handlePerPageChange}
                            activePadding={1}
                            sidePadding={1}
                        />
                    }
                >
                    <Table.THead rowClassName={style['tr_theme_light']}>
                        <Table.THeadCell title='Дата'
                                         className={style['th_theme_light']}>
                            Дата
                        </Table.THeadCell>
                        <Table.THeadCell title='Тип'
                                         className={style['th_theme_light']}>
                            Тип
                            <InfoSIcon/>
                        </Table.THeadCell>
                        <Table.THeadCell title='Продукт'
                                         className={style['th_theme_light']}>
                            Продукт
                        </Table.THeadCell>
                        <Table.THeadCell title='Сумма'
                                         className={style['th_theme_light']}>
                            Сумма ₽
                        </Table.THeadCell>
                        <Table.THeadCell title='Реестр выплат'
                                         className={style['th_theme_light']}>
                            Реестр выплат
                        </Table.THeadCell>
                        <Table.THeadCell title='Комментарий'
                                         className={style['th_theme_light']}>
                            Комментарий
                            <InfoSIcon/>
                        </Table.THeadCell>
                    </Table.THead>
                    <Table.TBody>
                        {currentPageData.map(row => (
                            <Table.TRow key={row.id}>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.date}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.type}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.product}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.amount}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.reestr}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.comment}
                                    </Typography.Text>
                                </Table.TCell>
                            </Table.TRow>
                        ))}
                    </Table.TBody>
                </Table>
            </div>
        </div>
    );
}
