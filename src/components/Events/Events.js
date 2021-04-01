import React from 'react'
import styles from './events.module.scss'
import Shedule from '../../assets/ldate@3x.png'
import Place from '../../assets/lplace@3x.png'
function Events() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}> Мероприятия </h2>
                <div className={styles.buttonsContainer}>
                    <button className={styles.slideButton}> &#5176;</button>
                    <button className={styles.slideButton}> &#5171;</button>
                </div>
            </div>
            <ul className={styles.eventsList}>
                <li className={styles.event}>
                    <div className={styles.eventStatus}> Online</div>
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
                    <ul className={styles.findList}>
                        <li className={styles.findItem}>
                            <img src={Shedule} className={styles.icon} />
                            <p className={styles.eventFind}>
                                17 - 25 января 2018
                            </p>
                        </li>
                        <li className={styles.findItem}>
                            <img src={Place} className={styles.icon} />
                            <p className={styles.eventFind}>
                                Институт Прикладной Эстетики «Лаки Хаус»,
                                Ростов-на-Дону
                            </p>
                        </li>
                    </ul>
                </li>
                <li className={styles.event}>
                    <p className={styles.eventStatus}> Offline</p>
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
                    <ul className={styles.findList}>
                        <li className={styles.findItem}>
                            <img src={Shedule} className={styles.icon} />
                            <p className={styles.eventFind}>
                                17 - 25 января 2018
                            </p>
                        </li>
                        <li className={styles.findItem}>
                            <img src={Place} className={styles.icon} />
                            <p className={styles.eventFind}>
                                Институт Прикладной Эстетики «Лаки Хаус»,
                                Ростов-на-Дону
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Events
