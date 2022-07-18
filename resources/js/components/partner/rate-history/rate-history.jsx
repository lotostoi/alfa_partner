import {useState, useMemo} from "react";

import style from "./style.module.scss";

import { Button } from "@alfalab/core-components/button";
import { InfoSIcon } from '@alfalab/icons-classic/InfoSIcon';
import { Table } from '@alfalab/core-components/table';
import { Typography } from '@alfalab/core-components/typography';
import { Select } from '@alfalab/core-components/select';
import { Alert } from '@alfalab/core-components/alert';
import { IconButton } from '@alfalab/core-components/icon-button';
import { ExpandDownMBlackIcon } from '@alfalab/icons-classic/ExpandDownMBlackIcon';

const data5 = [
    {
        id: 12,
        applied: '3 800.00 ₽',
        period: '1 февраля 2022 — 13 февраля 2022',
        action_amount: 'От 1 активации за 1 мес: 3800.00 ₽',
        is_done: 'Да',
    },
    {
        id: 15,
        applied: '3 400.00 ₽',
        period: '1 января 2022 — 31 января 2022',
        action_amount: 'От 1 активации за 1 мес: 3400.00 ₽',
        is_done: 'Нет',
    },
];
const dataAlfa = [
    {
        id: 28,
        applied: '3 800.00 ₽',
        period: '1 февраля 2022 — 13 февраля 2022',
        action_amount: 'От 1 активации за 1 мес: 3400.00 ₽',
        is_done: 'Да',
        type: 'Индивидуальная',
    },
];

const optionsYear = [
    { key: '1', content: '2022' },
    { key: '2', content: '2021' },,
];
const optionsProduct = [
    { key: '1', content: 'Дебетовая карта' },
    { key: '2', content: 'Кредитная карта' },,
];

export default function () {
    const [perPage5, setPerPage5] = useState(5);
    const [page5, setPage5] = useState(0);
    const [toggle5, setToggle5] = useState(true);

    const handlePerPageChange5 = value => {
        setPage5(0);
        setPerPage5(value);
    };
    const handlePageChange5 = pageIndex => setPage5(pageIndex);

    const pagesCount5 = Math.ceil(data5.length / perPage5);

    const currentPageData5 = useMemo(() => {
        return data5.slice(page5 * perPage5).slice(0, perPage5);
    }, [data5, page5, perPage5]);


    const [perPageAlfa, setPerPageAlfa] = useState(5);
    const [pageAlfa, setPageAlfa] = useState(0);
    const [toggleAlfa, setToggleAlfa] = useState(true);

    const handlePerPageChangeAlfa = value => {
        setPageAlfa(0);
        setPerPageAlfa(value);
    };
    const handlePageChangeAlfa = pageIndex => setPageAlfa(pageIndex);

    const pagesCountAlfa = Math.ceil(dataAlfa.length / perPageAlfa);

    const currentPageDataAlfa = useMemo(() => {
        return dataAlfa.slice(pageAlfa * perPageAlfa).slice(0, perPageAlfa);
    }, [dataAlfa, pageAlfa, perPageAlfa]);

    return (
        <div className={style.rate_history}>
            <div className={style.rate_history_top_group}>
                <div className={[style.rate_history_filters, 'row'].join(" ")}>

                    <div className="col-3">
                        <Select options={optionsYear}
                                placeholder='Выберите год'
                                block={true}
                        />
                    </div>
                    <div className="col-3">
                        <Select options={optionsProduct}
                                placeholder='Выберите продукт'
                                label='Продукт'
                                block={true}
                        />
                    </div>

                    <div className="col-6 d-flex">
                        <Button
                            type="button"
                            view="secondary"
                            size="xs"
                            className="ms-auto"
                        >
                            Сбросить
                        </Button>
                        <Button
                            type="button"
                            view="primary"
                            size="xs"
                            className="ms-1"
                        >
                            Применить
                        </Button>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-7 p-0'>
                        <Alert>
                            Ставки указаны для самозанятых на НПД. <br/>
                            Если у вас другая форма сотрудничества или тип налогообложения <br/>
                            — измените их в <span className="text-danger">Профиле</span>
                        </Alert>
                    </div>
                </div>
            </div>

            <div className={style.rate_history_table} style={{ margin: '24px 0 40px' }}>
                <div className={[style['rate_history_table_top_group'], 'd-flex'].join(' ')}>
                    <h2 className={style['rate_history_table_title']}>Дебетовая карта Пятерочка</h2>
                    <IconButton
                        className={[style['rate_history_table_expand'], 'ms-auto'].join(" ")}
                        view='primary'
                        icon={ExpandDownMBlackIcon}
                        onClick={() => setToggle5(!toggle5)}/>
                </div>
                {toggle5 ?
                    <Table
                        wrapper={false}
                        pagination={
                            <Table.Pagination
                                className={style['pagination_theme_light']}
                                perPage={perPage5}
                                currentPageIndex={page5}
                                pagesCount={pagesCount5}
                                onPageChange={handlePageChange5}
                                onPerPageChange={handlePerPageChange5}
                                activePadding={1}
                                sidePadding={1}
                            />
                        }
                    >
                        <Table.THead rowClassName={style['tr_theme_light']}>
                            <Table.THeadCell title='Период'
                                             className={style['th_theme_light']}>
                                Период
                            </Table.THeadCell>
                            <Table.THeadCell title='Примененная ставка'
                                             className={style['th_theme_light']}>
                                Примененная ставка
                                <InfoSIcon/>
                            </Table.THeadCell>
                            <Table.THeadCell title='Количество целевых действий'
                                             className={style['th_theme_light']}>
                                Количество целевых действий
                            </Table.THeadCell>
                            <Table.THeadCell title='Выполнен'
                                             className={style['th_theme_light']}>
                                Выполнен
                            </Table.THeadCell>
                            <Table.THeadCell width={163}
                                             className={style['th_theme_light']}>
                            </Table.THeadCell>
                        </Table.THead>
                        <Table.TBody>
                            {currentPageData5.map(row => (
                                <Table.TRow key={row.id}>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.applied}
                                        </Typography.Text>
                                    </Table.TCell>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.period}
                                        </Typography.Text>
                                    </Table.TCell>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.action_amount}
                                        </Typography.Text>
                                    </Table.TCell>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.is_done}
                                        </Typography.Text>
                                    </Table.TCell>
                                </Table.TRow>
                            ))}
                        </Table.TBody>
                    </Table>
                    : null}
            </div>

            <div className={style.rate_history_table} style={{ margin: '24px 0 40px' }}>
                <div className={[style['rate_history_table_top_group'], 'd-flex'].join(" ")}>
                    <h2 className={style['rate_history_table_title']}>Дебетовая карта Альфа карта</h2>
                    <IconButton
                        className={[style['rate_history_table_expand'], 'ms-auto'].join(" ")}
                        view='primary'
                        icon={ExpandDownMBlackIcon}
                        onClick={() => setToggleAlfa(!toggleAlfa)}
                    />
                </div>
                {toggleAlfa ?
                    <Table
                        wrapper={false}
                        pagination={
                            <Table.Pagination
                                className={style['pagination_theme_light']}
                                perPage={perPageAlfa}
                                currentPageIndex={pageAlfa}
                                pagesCount={pagesCountAlfa}
                                onPageChange={handlePageChangeAlfa}
                                onPerPageChange={handlePerPageChangeAlfa}
                                activePadding={1}
                                sidePadding={1}
                            />
                        }
                    >
                        <Table.THead rowClassName={style['tr_theme_light']}>
                            <Table.THeadCell title='Период'
                                             className={style['th_theme_light']}>
                                Период
                            </Table.THeadCell>
                            <Table.THeadCell title='Примененная ставка'
                                             className={style['th_theme_light']}>
                                Примененная ставка
                                <InfoSIcon/>
                            </Table.THeadCell>
                            <Table.THeadCell title='Количество целевых действий'
                                             className={style['th_theme_light']}>
                                Количество целевых действий
                            </Table.THeadCell>
                            <Table.THeadCell title='Выполнен'
                                             className={style['th_theme_light']}>
                                Выполнен
                            </Table.THeadCell>
                             <Table.THeadCell title='Тип ставки'
                                              width={163}
                                             className={style['th_theme_light']}>
                                Тип ставки
                            </Table.THeadCell>
                        </Table.THead>
                        <Table.TBody>
                            {currentPageDataAlfa.map(row => (
                                <Table.TRow key={row.id}>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.applied}
                                        </Typography.Text>
                                    </Table.TCell>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.period}
                                        </Typography.Text>
                                    </Table.TCell>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.action_amount}
                                        </Typography.Text>
                                    </Table.TCell>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.is_done}
                                        </Typography.Text>
                                    </Table.TCell>
                                    <Table.TCell className={style.cell_theme_light}>
                                        <Typography.Text view='primary-small' tag='span'>
                                            {row.type}
                                        </Typography.Text>
                                    </Table.TCell>
                                </Table.TRow>
                            ))}
                        </Table.TBody>
                    </Table>
                    : null}
            </div>
        </div>
    );
}
