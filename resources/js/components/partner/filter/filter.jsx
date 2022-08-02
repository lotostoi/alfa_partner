import style from "./style.module.scss";

import {useState} from "react";

import { Button } from "@alfalab/core-components/button";
import { Select } from "@alfalab/core-components/select";
import { Input } from '@alfalab/core-components/input';
import { Divider } from '@alfalab/core-components/divider';
import { CalendarInput } from '@alfalab/core-components/calendar-input';
import { CalendarRange } from '@alfalab/core-components/calendar-range';
import {toggleFilter} from "../../../store/actions/filterActions";

const optionsProduct = [
    { key: '1', content: 'Дебетовая карта' },
    { key: '2', content: 'Кредитная карта' },,
];
const optionsLanding = [
    { key: '1', content: 'Лендинг1' },
    { key: '2', content: 'Лендинг2' },,
];
const optionsOffer = [
    { key: '1', content: 'Оффер1' },
    { key: '2', content: 'Оффер2' },,
];
const optionsLink = [
    { key: '1', content: 'Ссылка1' },
    { key: '2', content: 'Ссылка2' },,
];
const optionsReestr = [
    { key: '1', content: 'Реестр1' },
    { key: '2', content: 'Реестр2' },,
];
const optionsType = [
    { key: '1', content: 'Тип1' },
    { key: '2', content: 'Тип2' },,
];
const optionsStatus = [
    { key: '1', content: 'Статус1' },
    { key: '2', content: 'Статус2' },,
];
const optionsTA = [
    { key: '1', content: 'ЦД1' },
    { key: '2', content: 'ЦД2' },,
];
const optionsFee = [
    { key: '1', content: 'Вознаграждение1' },
    { key: '2', content: 'Вознаграждение2' },,
];
const optionsBlockLink = [
    { key: '1', content: 'Да' },
    { key: '2', content: 'Нет' },,
];


export default function ({type = 'orders'}) {
    const [valueFrom, setValueFrom] = useState({ value: '', date: null });
    const [valueTo, setValueTo] = useState({ value: '', date: null });

    return (
        <div className={style.filter}>
            {type !== 'orders'
                // Заявки
                ?
                <div className={style.filter_inputs}>
                    <Input label='ID заявки'
                           name='order_id'
                           size='m'
                           className='mt-2'
                           block={true}
                    />
                    <label className={[style.calendar_range_label, 'mt-2'].join(' ')}>Дата заявки от/до</label>
                    <CalendarRange
                        valueFrom={valueFrom.value}
                        valueTo={valueTo.value}
                        calendarPosition='popover'
                        onChange={({ valueFrom, valueTo, dateFrom, dateTo }) => {
                            setValueFrom({ value: valueFrom, date: dateFrom });
                            setValueTo({ value: valueTo, date: dateTo });
                        }}
                    />
                    <label className={[style.calendar_range_label, 'mt-2'].join(' ')}>Дата ЦД от/до</label>
                    <CalendarRange
                        valueFrom={valueFrom.value}
                        valueTo={valueTo.value}
                        calendarPosition='popover'
                        onChange={({ valueFrom, valueTo, dateFrom, dateTo }) => {
                            setValueFrom({ value: valueFrom, date: dateFrom });
                            setValueTo({ value: valueTo, date: dateTo });
                        }}
                    />
                    <Input label='WEB_ID'
                           name='web_id'
                           size='m'
                           className='mt-2'
                           block={true}
                    />
                    <Input label='CLICK_ID'
                           name='click_id'
                           size='m'
                           className='mt-2'
                           block={true}
                    />

                    <Select options={optionsProduct}
                            placeholder='Не выбрано'
                            label='Продукт'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsOffer}
                            placeholder='Не выбрано'
                            label='Оффер'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsLink}
                            placeholder='Не выбрано'
                            label='Ссылка'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsLanding}
                            placeholder='Не выбрано'
                            label='Лендинг'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsReestr}
                            placeholder='Не выбрано'
                            label='Реестр выплат'
                            block={true}
                            className='mt-2'
                    />

                    <Divider />

                    <Select options={optionsType}
                            placeholder='Не выбрано'
                            label='Тип'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsStatus}
                            placeholder='Не выбрано'
                            label='Статус'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsTA}
                              placeholder='Не выбрано'
                              label='Целевое действие'
                              block={true}
                              className='mt-2'
                    />
                    <Select options={optionsFee}
                            placeholder='Не выбрано'
                            label='Вознаграждение'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsBlockLink}
                            placeholder='Не выбрано'
                            label='Ссылка заблокирована'
                            block={true}
                            className='mt-2'
                    />
                    <Input label='platformID'
                           name='platform_id'
                           size='m'
                           className='mt-2 mb-3'
                           block={true}
                    />
                </div>
                :
                // Блокировки
                <div className={style.filter_inputs}>
                    <CalendarInput label='Дата начала блокировки'
                                   block={true} />
                    <CalendarInput label='Дата удаления'
                                   block={true}
                                   className='mt-2'
                    />

                    <Divider />

                    <Select options={optionsProduct}
                            placeholder='Выберите продукт'
                            label='Продукт'
                            block={true}
                            className='mt-2'
                    />
                    <Select options={optionsLanding}
                            placeholder='Не выбрано'
                            label='Лендинг'
                            block={true}
                            className='mt-2'
                    />
                    <Input label='WEB_ID'
                           name='web_id'
                           size='m'
                           className='mt-2'
                           block={true}
                    />
                    <Input label='INPUT_ID'
                           name='input_id'
                           size='m'
                           className='mt-2'
                           block={true}
                    />
                    <Select options={optionsLanding}
                            placeholder='Не выбрано'
                            label='Тип нарушения'
                            block={true}
                            className='mt-2'
                    />
                </div>
            }

            <div className={style.filter_btns}>
                <Button
                    type="button"
                    view="primary"
                    size="xs"
                    block={true}
                >
                    Применить
                </Button>
                <Button
                    type="button"
                    view="tertiary"
                    size="xs"
                    block={true}
                    className="mt-1"
                >
                    Сбросить
                </Button>
            </div>
        </div>
    );
}
