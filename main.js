document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Проверка критических элементов
    if (!content) {
        console.error('❌ Элемент #content не найден в HTML!');
        return;
    }
    if (navLinks.length === 0) {
        console.error('❌ Нет элементов .nav-link в меню!');
        return;
    }

    // Содержимое разделов сайта
    const sections = {
        home: `
            <section class="section active">
                <div class="container">
                    <h2>Профессиональная юридическая помощь <br>
                    по всей России   </h2>
                    <p>Защита ваших прав и интересов в суде и на переговорах.</p>
                    <button class="btn" id="openModalBtn">Записаться на консультацию</button>
                </div>
                    <footer class="footer">
                        <h4>Контакты</h4>
                        <ul>
                            <li><strong>Телефон:</strong> +7 (909) 806-63-79</li>
                            <li><strong>Email:</strong>  igorbasitch@yandex.ru</li>
                            <li><strong>Режим работы:</strong> Пн–Сб 9:00–20:00</li>
                        </ul>
                    </footer>                
            </section>
        `,
        about: `
            <section class="section">
                <div class="container">
                    <h3>Об адвокате</h3>
                    <div class="about-content">
                        <img src="https://lh3.googleusercontent.com/rd-d/ALs6j_GlP_RuyWdwESXh4skvvMHx78InpwsrLgxWfO0eCka3xUTxjxvIf1VyoftgkcTuSdD3cGti5gK3d9yqKYvj55c926-f8xXlGFxUmCVI4G_1U8myz7zUVuU-7euivh3ByBqIIfUWthFm87eiaow3XtC5FA7r1foNQrTVnDSvtIPIg6Fg6yE5QrRrJFDiBQ_DMeACwvsn12Vz9XuTBYTSf96vUJeoOIEdTfOrUHpajUbaHp2OaXhisQimFQPG_McBj0Qw9-jdhDxesSotHvCpkGLh7PTsa6yN0pU8JDihSS8uh8m2ia8SaXxa9HfLyUCCwTfgah0rla8TQX9Qx0JuYaf14KDM3aTj2Hljrw97nA55qMhVklXdpkaOrZjQSGVzy07CFguS9lZDKBY9iO3oLJbzM2VY_dSn60OYqQzoaag9TJzd8VZxYJMkwohr9m0owCxmyYJl8IEWcYAmHMRPda6PcR11hjrMVNqtMmxE9jHXbngl3RLpir49wrbnYc0cNyx7z10BkY8RpIq_R-T1Fewq5NnHF7_IoUTVyvXLO1VtkEqrXE2P9fFzRjbsKiKxJi0ORZlD2uvT4fqb360kAkT8u8GA42aJsKKRtY1bza4i5nG7IERgLOaNcLjQb8r3HTqDSSuhJbkBrXiBLWGvzV2Nfhez38kBsHcYSGnF1YKq6BNlTwsNlydI2wuxr1gKFLu6NSZ7mRDBxDC8_0wxJktUz-BfxwHJv_N4b4dmEMJkfYTAQfdLSAZ5Z6K-5ZFYqZwkOXT27-xe8HrPIpF9WKLK0t6lP4Upq6C7jKwPmPsToiJIeIJc5lBtkBJaFOETsPggJkwTPZFtK9ENG3zEfMftfyLQ2o2VCb3tnIXDQP6FLTxBibK4sVv05SY0TNCCZQcrI8e1ydKLDsDDgnAq2GIcDWEGOyLYQwMRQol6uEeZ4Ri_pOxzM5J32kMJ6NunGqJ8TET5-BDPE0BQU4pCaHJ3fdw11SaaNz6zsvAb9J-w9vVeDkKLJUqWDNiyWVMVddWBZsg5QtRGSNfQttH8nEZH8Qn5s38v0Qe6_FJF0t-khPMkh5fU4R4WIn2oxFiiSWxbeQM=w2560-h1282?auditContext=prefetch" 
                        alt="Фото адвоката" class="profile-img" >
                        <div class="text-about">
                            <p>Я, Басич Игорь Дмитриевич - опытный адвокат с 35‑ти летним юридическим стажем. Специализируюсь на уголовном, гражданском, семейном, административном, трудовом и жилищном праве.</p>
                            <ul class="qualifications">
                                <li>Высшее юридическое образование</li>
                                <li>1992–2004 — работа в следственном отделе МВД РФ</li>
                                <li>Адвокатская деятельность с 2005 года</li>
                                <li>Регистрационный номер в едином государственном реестре адвокатов —  *****</li>
                                <li>Удостоверение №*****</li>
                            </ul>
                        </div>
                    </div>
                    <footer class="footer">
                        <h4>Контакты</h4>
                        <ul>
                            <li><strong>Телефон:</strong> +7 (909) 806-63-79</li>
                            <li><strong>Email:</strong>  igorbasitch@yandex.ru</li>
                            <li><strong>Режим работы:</strong> Пн–Сб 9:00–20:00</li>
                        </ul>
                    </footer>                    
                </div>
            </section>
        `,
        services: `
            <section class="section">
                <div class="container">
                    <h3>Услуги</h3>
                    <div class="services-grid">
                        <div class="service-card">
                            <h4>Уголовные дела</h4>
                            <p>Защита на следствии и в суде. Представление интересов потерпевшей стороны. Апелляции. Досудебное урегулирование</p>
                        </div>
                        <div class="service-card">
                            <h4>Гражданские споры</h4>
                            <p>Консультации по гражданскому законодательству, представительство в судах всех инстанций, обжалование судебных решений </p>
                        </div>
                        <div class="service-card">
                            <h4>Семейное право</h4>
                            <p>Развод, алименты, раздел совместно нажитого имущества, установление и оспаривание отцовства, опека над детьми</p>
                        </div>
                        <div class="service-card">
                            <h4>Административное право</h4>
                            <p>Защита интересов граждан при привлечении к административной ответственности, оспаривание административных штрафов и иных наказаний</p>
                        </div>
                        <div class="service-card">
                            <h4>Трудовое право</h4>
                            <p>Защита при незаконном увольнении и дисциплинарных взысканиях, взыскание невыплаченной зарплаты, компенсаций, пособий</p>
                        </div>
                        <div class="service-card">
                            <h4>Военное право</h4>
                            <p>Консультация по вопросам военного законодательства, представительство в военных судах, оспаривание решений командования</p>
                        </div>
                    </div>
                    <footer class="footer">
                        <h4>Контакты</h4>
                        <ul>
                            <li><strong>Телефон:</strong> +7 (909) 806-63-79</li>
                            <li><strong>Email:</strong>  igorbasitch@yandex.ru</li>
                            <li><strong>Режим работы:</strong> Пн–Сб 9:00–20:00</li>
                        </ul>
                    </footer>                    
                </div>
            </section>
        `,
        cases: `
            <section class="section">
                <div class="container">
                    <h3>Примеры дел</h3>
                    <div class="cases-grid">
                        <div class="case-item">
                            <h4>Гражданские споры</h4>
                            <a href="https://lazo--hbr.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=23055718&delo_id=1540005&new=0&text_number=1">Признание договора купли-продажи транспортного средства недействительным и применение последствий недействительности сделки</a>
                        </div>
                        <div class="case-item">
                            <h4>Гражданские споры</h4>
                            <a href="https://lazo--hbr.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=23052932&delo_id=1540005&new=0&text_number=1">Взыскание стоимости восстановительного ремонта жилого помещения</a>
                        </div>
                        <div class="case-item">
                            <h4>Семейные споры</h4>
                            <a href="https://lazo--hbr.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=case&case_id=14095620&case_uid=62dd7dd9-ef4b-47cd-86d6-084fcb562a7b&delo_id=1540005&new=">Раздел совместно нажитого имущества супругов</a>
                        </div>
                        <div class="case-item">
                            <h4>Жилищные споры</h4>
                            <a href="https://zheleznodorozhny--hbr.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=23432667&delo_id=1540005&new=0&text_number=1">Прекращение права пользования и выселение из жилого помещения</a>
                        </div>
                        <div class="case-item">
                            <h4>Гражданские споры</h4>
                            <a href="https://lazo--hbr.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=23051499&delo_id=1540005&new=0&text_number=1">Взыскание материального ущерба, причиненного в результате дорожно-транспортного происшествия</a>
                        </div>
                        <div class="case-item">
                            <h4>Уголовное дело</h4>
                            <a href="https://lazo--hbr.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=23056101&delo_id=1540006&new=0&text_number=1">Условное осуждение по статьям ч. 2 ст. 228 УК РФ, ч. 1 ст. 264.1 УК РФ.</a>
                        </div>
                    </div>
                    <footer class="footer">
                        <h4>Контакты</h4>
                        <ul>
                            <li><strong>Телефон:</strong> +7 (909) 806-63-79</li>
                            <li><strong>Email:</strong>  igorbasitch@yandex.ru</li>
                            <li><strong>Режим работы:</strong> Пн–Сб 9:00–20:00</li>
                        </ul>
                    </footer>                    
                </div>
            </section>
        `
    };

    // Переключение разделов
    function showSection(sectionId) {
        if (!sections[sectionId]) {
            console.error(`❌ Раздел "${sectionId}" не найден в объекте sections!`);
            return;
        }

        // Снимаем класс active со всех ссылок
        navLinks.forEach(link => link.classList.remove('active'));

        // Добавляем active текущей ссылке
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        } else {
            console.warn(`⚠️ Ссылка с data-section="${sectionId}" не найдена!`);
        }

        // Обновляем контент
        content.innerHTML = sections[sectionId];

        // Инициализируем модальное окно (если есть кнопка)
        initModal();
    }

    // Обработчики кликов по меню
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Показываем главную страницу при загрузке
    showSection('home');

    // Инициализация модального окна
    function initModal() {
        const modalBtn = document.getElementById('openModalBtn');
        if (!modalBtn) {
            console.warn('⚠️ Кнопка #openModalBtn не найдена (возможно, раздел не загружен)');
            return;
        }

        // Создаём модальное окно (если ещё не создано)
        let modal = document.getElementById('consultationModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'consultationModal';
            modal.className = 'modal';

            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h3>Запись на консультацию</h3>
                    <form id="consultationForm" class="consultation-form">
                        <div class="form-group">
                            <label for="name" class="required">ФИО</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="required">Телефон</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="message" class="required">Тема консультации</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Отправить заявку</button>
                        <div class="success-message">Заявка отправлена! Мы свяжемся с вами.</div>
                    </form>
                </div>
            `;

            document.body.appendChild(modal);
        }

        const closeBtn = modal.querySelector('.close');
        const form = document.getElementById('consultationForm');
        const successMessage = modal.querySelector('.success-message');

        // Открытие модального окна
        modalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        // Закрытие по крестику
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            successMessage.style.display = 'none';
            form.reset(); // Очищаем поля
        });

        // Закрытие при клике вне окна
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                successMessage.style.display = 'none';
                form.reset();
            }
        });

        // Отправка формы
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Проверка валидности
            if (!form.checkValidity()) {
                alert('Заполните все поля!');
                return;
            }

            // Собираем данные
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Отправка через Email
            emailjs.send("service_6w9jy17", "template_gahleo9", data)
                    .then(() => {
                        // Показываем сообщение об успехе
                        successMessage.style.display = 'block';

                        // Очищаем поля формы
                        form.reset();

                        // Через 3 секунды закрываем модальное окно
                        setTimeout(() => {
                            modal.style.display = 'none';
                            successMessage.style.display = 'none';
                        }, 3000);
                    })
                    .catch((error) => {
                        console.error('❌ Ошибка отправки:', error);
                        alert('Произошла ошибка при отправке. Попробуйте ещё раз или свяжитесь по телефону.');
                    });
            });
        }

    // Инициализация EmailJS (замените YOUR_USER_ID на ваш реальный ID)
    emailjs.init("WyriUZli-kydnePGL");

    // Дополнительные меры безопасности:
    // 1. Блокируем повторную отправку во время обработки
    let isSending = false;
    form.addEventListener('submit', (e) => {
        if (isSending) {
            e.preventDefault();
            return;
        }
        isSending = true;
        // ... остальной код отправки ...
        // В конце: isSending = false;
    });

    // 2. Добавляем индикатор загрузки (опционально)
    const btnSubmit = form.querySelector('.btn-submit');
    form.addEventListener('submit', () => {
        btnSubmit.textContent = 'Отправляется...';
        btnSubmit.disabled = true;
    });
});