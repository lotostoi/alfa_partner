import {useState, useMemo} from "react";

import style from "./style.module.scss";

import { Button } from "@alfalab/core-components/button";
import { FormatXlsSWhiteIcon } from '@alfalab/icons-classic/FormatXlsSWhiteIcon';
import { FilterMIcon } from '@alfalab/icons-glyph/FilterMIcon';
import { CloseCircleMBlackIcon } from '@alfalab/icons-classic/CloseCircleMBlackIcon';
import { SettingsCompactSIcon } from '@alfalab/icons-glyph/SettingsCompactSIcon';
import { InfoSIcon } from '@alfalab/icons-classic/InfoSIcon';
import { Table } from '@alfalab/core-components/table';
import { Typography } from '@alfalab/core-components/typography';

const data = [
    {
        id: 28,
        link: 'VKWomen30offer 162238',
        method: 'WEB_ID 13456711',
        date_block: '22.02.2021',
        date_unblock: '23.02.2021',
        type: 'Мотивированный трафик',
        proof: 'http://sa2.admon.pro/sessi...',
    },
    {
        id: 33,
        link: 'offer123',
        method: 'WEB_ID 13456711',
        date_block: '22.02.2021',
        date_unblock: 'Заблокировано',
        type: 'Мотивированный трафик',
        proof: 'http://sa2.admon.pro/sessi...',
    },
    {
        id: 37,
        link: 'offer123',
        method: 'WEB_ID 13456711',
        date_block: '22.02.2021',
        date_unblock: 'Заблокировано',
        type: 'Мотивированный трафик',
        proof: 'http://sa2.admon.pro/sessi...',
    },
    {
        id: 56,
        link: 'offer345',
        method: 'WEB_ID 13456711',
        date_block: '22.02.2021',
        date_unblock: 'Заблокировано',
        type: 'Мотивированный трафик',
        proof: 'http://sa2.admon.pro/sessi...',
    },
    {
        id: 34,
        link: 'offer1234567',
        method: 'WEB_ID 13456711',
        date_block: '22.02.2021',
        date_unblock: 'Заблокировано',
        type: 'Мотивированный трафик',
        proof: 'http://sa2.admon.pro/sessi...',
    },
    {
        id: 39,
        link: 'offer1234567',
        method: 'WEB_ID 13456711',
        date_block: '22.02.2021',
        date_unblock: 'Заблокировано',
        type: 'Мотивированный трафик',
        proof: 'http://sa2.admon.pro/sessi...',
    },
];

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
        <div className={style.orderlist}>
            <div className={style.orderlist__topgroup}>
                <div className={style.orderlist__btns}>
                    <Button
                        leftAddons={<FilterMIcon/>}
                        type="button"
                        view="tertiary"
                        size="xs"
                        className="me-3"
                    >
                        Фильтр
                    </Button>

                    <Button
                        rightAddons={<CloseCircleMBlackIcon/>}
                        type="button"
                        view="tertiary"
                        size="xs"
                        className={style.button_theme_light_bordered}
                    >
                        15 ссылок
                        <span className={style.divider}> | </span>
                    </Button>

                    <Button
                        leftAddons={<FormatXlsSWhiteIcon/>}
                        type="button"
                        view="primary"
                        size="xs"
                        className="ms-auto"
                    >
                        Экспорт в XLSX
                    </Button>
                </div>
                <div className={style.orderlist__settings}>
                    <Button
                        leftAddons={<SettingsCompactSIcon/>}
                        type="button"
                        view="tertiary"
                        size="xs"
                        className={style.button_theme_light_bordered}
                    >
                        Отображение колонок: все
                    </Button>
                </div>
            </div>

            <div className={style.orderlist__table} style={{ margin: '24px 0 40px' }}>
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
                        <Table.THeadCell title='Ссылка'
                                         className={style['th_theme_light']}>
                            Ссылка
                        </Table.THeadCell>
                        <Table.THeadCell title='Метод блокировки'
                                         className={style['th_theme_light']}>
                            Метод блокировки
                            <InfoSIcon/>
                        </Table.THeadCell>
                        <Table.THeadCell title='Дата блокировки'
                                         className={style['th_theme_light']}>
                            Дата блокировки
                        </Table.THeadCell>
                        <Table.THeadCell title='Дата снятия блокировки'
                                         className={style['th_theme_light']}>
                            Дата снятия блокировки
                        </Table.THeadCell>
                        <Table.THeadCell title='Тип нарушения'
                                         className={style['th_theme_light']}>
                            Тип нарушения
                        </Table.THeadCell>
                        <Table.THeadCell title='Доказательство'
                                         className={style['th_theme_light']}>
                            Доказательство
                            <InfoSIcon/>
                        </Table.THeadCell>
                    </Table.THead>
                    <Table.TBody>
                        {currentPageData.map(row => (
                            <Table.TRow key={row.id}>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.link}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.method}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.date_block}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.date_unblock}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.type}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.proof}
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
