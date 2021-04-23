import React from 'react'
import styles from './events.module.scss'
import Status from '../Status/Status'
import EventFind from './EventFind'
import SliderButtons from '../Slider/SliderButtons'
function Events() {
    const data = [
        {
            status: 'Online',
            title: 'Конференция по лечению тяжелых форм акне изотретиноином',
            text:
                'Спикерами конференции станут такие «звезды» косметологии, как Ольга Катханова, Евгений Асеев, Сергей Ахтямов, Марина Дунаевская, Римма Минасьян, Ирина Кошелева и многие другие, которые смогут передать ценные знания всем участникам конференции.',
            date: '17 - 25 января 2018',
            place: 'Институт Прикладной Эстетики «Лаки Хаус», Ростов-на-Дону',
        },
        {
            status: 'Offline',
            title:
                'Акне. Лечение и базовый уход. VIII Научно-практическая конференция дерматовенерологов и косметологов',
            text:
                'Акне является одним из наиболее часто встречающихся заболеваний в практике врача дерматовенеролога и косметолога. Широкая распространенность заболевания, его значительное влияние на качество жизни больных обусловливают необходимость разработки…',
            date: '17 - 25 января 2018',
            place: 'Институт Прикладной Эстетики «Лаки Хаус», Ростов-на-Дону',
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}> Мероприятия </h2>
                <SliderButtons className={styles.buttonsContainer} />
            </div>
            <ul className={styles.eventsList}>
                {data.map((item) => {
                    return (
                        <li className={styles.event}>
                            <Status className={styles.eventStatus}>
                                {' '}
                                {item.status}
                            </Status>
                            <h3 className={styles.eventTitle}> {item.title}</h3>
                            <p className={styles.text}>{item.text}</p>
                            <EventFind />
                        </li>
                    )
                })}
                {/* <li className={styles.event}>
                    <Status className={styles.eventStatus}> Online</Status>
                    <h3 className={styles.eventTitle}>
                        {' '}
                        Конференция по лечению тяжелых форм акне изотретиноином
                    </h3>
                    <p className={styles.text}>
                        Спикерами конференции станут такие «звезды»
                        косметологии, как Ольга Катханова, Евгений Асеев, Сергей
                        Ахтямов, Марина Дунаевская, Римма Минасьян, Ирина
                        Кошелева и многие другие, которые смогут передать ценные
                        знания всем участникам конференции.
                    </p>
                    <EventFind />
                </li>
                <li className={styles.event}>
                    <Status className={styles.eventStatus}> Offline </Status>
                    <h3 className={styles.eventTitle}>
                        {' '}
                        Акне. Лечение и базовый уход. VIII Научно-практическая
                        конференция дерматовенерологов и косметологов
                    </h3>
                    <p className={styles.text}>
                        {' '}
                        Акне является одним из наиболее часто встречающихся
                        заболеваний в практике врача дерматовенеролога и
                        косметолога. Широкая распространенность заболевания, его
                        значительное влияние на качество жизни больных
                        обусловливают необходимость разработки…
                    </p>
                    <EventFind />
                </li> */}
            </ul>
        </div>
    )
}

export default Events
