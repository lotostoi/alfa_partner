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
        status: 'Заявка отменена, Фрод Новая',
        datetime: '22.02.2021',
        date_cd: '20.01.2021',
        click_id: '5a150e96341159967',
        type: 'Заявки',
        landing: 'Анкета Альфа-Карта с преимуществами NEW',
    },
    {
        id: 82,
        status: 'Карта активирована',
        datetime: '22.02.2021',
        date_cd: '20.01.2021',
        click_id: '5a15d0e96341159967',
        type: 'Заявки',
        landing: 'Анкета Альфа-Карта с преимуществами NEW',
        reestr: '1-31 марта 2021 №267',
        is_blocked_link: 'Нет',
        platformID: 'alfapartners_cpa_1_DC...',
        link: 'VKWomen3 #162228',
        offer: 'Кредитная карта 100 дней без процентов',
        target_action: 'Покупка/пополнение счета',
        category: 'Кредитная карта',
        total: '1 500',
    },
    {
        id: 24,
        status: 'Карта активирована',
        datetime: '22.02.2021',
        date_cd: '20.01.2021',
        click_id: '5a150e96341159967',
        type: 'Заявки',
        landing: 'Анкета Альфа-Карта с преимуществами NEW',
        reestr: '1-31 марта 2021 №267',
        is_blocked_link: 'Нет',
        platformID: 'alfapartners_cpa_1_DC...',
        link: 'VKWomen3 #162228',
        offer: 'Кредитная карта 100 дней без процентов',
        target_action: 'Покупка/пополнение счета',
        category: 'Кредитная карта',
        total: '1 500',
    },
    {
        id: 12,
        status: 'Карта выдана',
        datetime: '22.02.2021',
        date_cd: '20.01.2021',
        click_id: '5a150e96341159967',
        type: 'Заявки',
        landing: 'Анкета Альфа-Карта с преимуществами NEW',
        reestr: '1-31 марта 2021 №267',
        is_blocked_link: 'Нет',
        platformID: 'alfapartners_cpa_1_DC...',
        link: 'VKWomen3 #162228',
        offer: 'Кредитная карта 100 дней без процентов',
        target_action: 'Покупка/пополнение счета',
        category: 'Кредитная карта',
        total: '1 500',
    },
    {
        id: 22,
        status: 'Новая',
        datetime: '22.02.2021',
        date_cd: '20.01.2021',
        click_id: '5a150e96341159967',
        type: 'Заявки',
        landing: 'Анкета Альфа-Карта с преимуществами NEW',
        reestr: '1-31 марта 2021 №267',
        is_blocked_link: 'Нет',
        platformID: 'alfapartners_cpa_1_DC...',
        link: 'VKWomen3 #162228',
        offer: 'Кредитная карта 100 дней без процентов',
        target_action: 'Покупка/пополнение счета',
        category: 'Кредитная карта',
        total: '1 500',
    },
    {
        id: 32,
        status: '30.06.2022',
        datetime: '22.02.2021',
        date_cd: '20.01.2021',
        click_id: '5a150e96341159967',
        type: 'Заявки',
        landing: 'Анкета Альфа-Карта с преимуществами NEW',
        reestr: '1-31 марта 2021 №267',
        is_blocked_link: 'Нет',
        platformID: 'alfapartners_cpa_1_DC...',
        link: 'VKWomen3 #162228',
        offer: 'Кредитная карта 100 дней без процентов',
        target_action: 'Покупка/пополнение счета',
        category: 'Кредитная карта',
        total: '1 500',
    },
    {
        id: 33,
        status: '30.06.2022',
        datetime: '22.02.2021',
        date_cd: '20.01.2021',
        click_id: '5a150e96341159967',
        type: 'Заявки',
        landing: 'Анкета Альфа-Карта с преимуществами NEW',
        reestr: '1-31 марта 2021 №267',
        is_blocked_link: 'Нет',
        platformID: 'alfapartners_cpa_1_DC...',
        link: 'VKWomen3 #162228',
        offer: 'Кредитная карта 100 дней без процентов',
        target_action: 'Покупка/пополнение счета',
        category: 'Кредитная карта',
        total: '1 500',
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
    const [perPage, setPerPage] = useState(5);
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

            <div style={{ margin: '24px 0 40px' }}>
                <Table
                    className="overflow-scroll"
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
                        <Table.THeadCell title='id/id2 заявки'
                                         className={style['th_theme_light']}>
                            id/id2 заявки
                        </Table.THeadCell>
                        <Table.THeadCell title='Статус'
                                         className={style['th_theme_light']}>
                            Статус
                        </Table.THeadCell>
                        <Table.THeadCell title='Дата и время'
                                         className={style['th_theme_light']}>
                            Дата и время
                        </Table.THeadCell>
                        <Table.THeadCell title='Дата ЦД'
                                         className={style['th_theme_light']}>
                            Дата ЦД
                        </Table.THeadCell>
                        <Table.THeadCell title='CLICK_ID WEB_ID'
                                         className={style['th_theme_light']}>
                            CLICK_ID WEB_ID
                        </Table.THeadCell>
                        <Table.THeadCell title='Тип'
                                         className={style['th_theme_light']}>
                            Тип
                            <InfoSIcon/>
                        </Table.THeadCell>
                        <Table.THeadCell title='Лендинг'
                                         className={style['th_theme_light']}>
                            Лендинг
                        </Table.THeadCell>
                        <Table.THeadCell title='Реестр выплат'
                                         className={style['th_theme_light']}>
                            Реестр выплат
                        </Table.THeadCell>
                        <Table.THeadCell title='Ссылка заблокирована'
                                         className={style['th_theme_light']}>
                            Ссылка заблокирована
                        </Table.THeadCell>
                        <Table.THeadCell title='platformID'
                                         className={style['th_theme_light']}>
                            platformID
                        </Table.THeadCell>
                        <Table.THeadCell title='Ссылка'
                                         className={style['th_theme_light']}>
                            Ссылка
                        </Table.THeadCell>
                        <Table.THeadCell title='Оффер'
                                         className={style['th_theme_light']}>
                            Оффер
                        </Table.THeadCell>
                        <Table.THeadCell title='Целевое действие'
                                         className={style['th_theme_light']}>
                            Целевое действие
                        </Table.THeadCell>
                        <Table.THeadCell title='Категория заявки'
                                         className={style['th_theme_light']}>
                            Категория заявки
                        </Table.THeadCell>
                        <Table.THeadCell title='Начислено'
                                         className={style['th_theme_light']}>
                            Начислено ₽
                        </Table.THeadCell>
                    </Table.THead>
                    <Table.TBody>
                        {currentPageData.map(row => (
                            <Table.TRow key={row.id}>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.id}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'
                                                     color={checkStatus(row.status)}>
                                        {row.status}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.datetime}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.date_cd}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.click_id}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.type}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.landing}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.reestr}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.is_blocked_link}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.platformID}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.link}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.offer}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.target_action}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.category}
                                    </Typography.Text>
                                </Table.TCell>
                                <Table.TCell className={style.cell_theme_light}>
                                    <Typography.Text view='primary-small' tag='span'>
                                        {row.total}
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
