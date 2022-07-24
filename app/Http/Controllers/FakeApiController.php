<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FakeApiController extends Controller
{
    /**
     * ответ для header страницы
     * GET request
     * количество не просмотренных тикетов 
     */
    public function getCountNotSeeTickets(Request $request)
    {
        return response()->json(['count' => 0]);
    }

    /**
     * ответ для header страницы
     * GET request
     * количество не просмотренных писем
     */
    public function getCountNotSeeNews(Request $request)
    {
        return response()->json(['count' => 25]);
    }


    /**
     * ответы раздела профиль
     * GET request
     */
    public function getUser(Request $request)
    {
        return response()->json([
            'email' => match (rand(0, 1)) {
                0 => 'lotos_toi@mail.ru',
                1 => 'alfa@mail.ru',
            },
            'allDocs' => array_rand([0, 1], 1),
            'onboardingUserType' => match (rand(0, 3)) {
                0 => 'ul',
                1 => 'fl',
                2 => 'ip',
                3 => 'se',
            },
            /** дата заключение договора(уточнить где она) */
            'contractDate' => match (rand(0, 1)) {
                0 => '30.12.2005',
                1 => '14.12.2021',
            },
            /** период оплаты(уточнить где он) */
            'paymentPeriod' => match (rand(0, 1)) {
                0 => 'week',
                1 => 'month',
            },
            'fullName' => match (rand(0, 1)) {
                0 => 'Александр Плотников',
                1 => 'ООО Рога и копыта',
            },
            'taxation' => match (rand(0, 1)) {
                0 => (string) 1,
                1 => (string) 2,
                2 => (string) 3
            },
            'onboardingUserCategory' => array_rand(['1', '2', '3'], 1),
        ]);
    }

    /**
     * ответы для раздела профиль/персональная информация
     * GET request
     */
    public function getDataForSelectsProfilePersonalInfo()
    {
        return response()->json(
            [
                'onboardingUserCategories' =>  [
                    [
                        'id' => 1,
                        'value' => 'Агрегатор',
                    ],
                    [
                        'id' => 2,
                        'value' => 'Мобильный оператор',
                    ],
                    [
                        'id' => 3,
                        'value' => 'Колл-центр',
                    ],
                    [
                        'id' => 4,
                        'value' => 'Мобильное приложение',
                    ],
                    /** и остальные */
                ],
            ]
        );
    }

    /**
     * ответы для раздела профиль/оплата
     * GET request
     */
    public function getDataForSelectsProfilePayment()
    {
        return response()->json(
            [
                /** лежит в таблицу users(onboarding_user_type) возможно имеет смысл создать отдельную таблицу  */
                'onboardingUserTypes' =>  [
                    'ul' => 'Юридическое лицо (ООО)',
                    'fl' => 'Физическое лицо',
                    'ip' => 'Индивидуальный предприниматель',
                    'se' => 'Самозанятость'
                ],
                /** таблица user_taxation */
                'taxations' =>
                [
                    [
                        'key' => (string) 1,
                        /** добавить данное поле в таблицу user_taxation */
                        'content' => 'Не указанно',
                    ],
                    [
                        'key' => (string) 2,
                        'content' => 'НПД – плачу налоги как самозанятый',
                    ],
                    [
                        'key' => (string) 3,
                        'content' => 'ОСНО - плачу все налоги (НЖС, НФДЛ)',
                    ],
                ],
                /** уточнить в какой таблице находится*/
                'paymentPeriods' => [
                    'week' => '1 неделя',
                    'month' => '1 месяц',
                ]
            ],
        );
    }
}
