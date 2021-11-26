class Translate {

    constructor() {

        document.getElementById('ar').addEventListener('click', ()=> {

            this.translate('ar');

        });

        document.getElementById('en').addEventListener('click', ()=> {

            this.translate('en');

        });

        this.translate(localStorage.getItem('Language'));

    }
    translate(language) {

        if(language == 'ar') {            

            document.getElementById('colors').innerHTML = 'الألوان';
            document.getElementById('random-bg').innerHTML = 'خلفيات عشوائية';
            document.getElementById('yes').innerHTML = 'نعم';
            document.getElementById('no').innerHTML = 'لا';
            document.getElementById('bullets').innerHTML = 'إظهار الحلقات';
            document.getElementById('show').innerHTML = 'إظهار';
            document.getElementById('hide').innerHTML = 'إخفاء';
            document.getElementById('reset').innerHTML = 'إعادة تعيين';
            document.getElementById('israeli-prison').innerHTML = 'سجون الاحتلال الإسرائيلي';
            document.getElementById('stats').innerHTML = 'حقائق و أرقام';
            document.getElementById('torture').innerHTML = 'التعذيب و المعاملة السيئة';
            document.getElementById('pal-prisoners').innerHTML = 'الأسرى الفلسطينيون';
            document.getElementById('stroies').innerHTML = 'قصص الأسرى';
            document.getElementById('contact').innerHTML = 'تواصل معنا';
            document.getElementById('israeli-prison-link').innerHTML = 'سجون الاحتلال الإسرائيلي';
            document.getElementById('stats-link').innerHTML = 'حقائق و أرقام';
            document.getElementById('torture-link').innerHTML = 'التعذيب و المعاملة السيئة';
            document.getElementById('pal-prisoners-link').innerHTML = 'الأسرى الفلسطينيون';
            document.getElementById('stories-link').innerHTML = 'قصص الأسرى';
            document.getElementById('contact-link').innerHTML = 'تواصل معنا';
            document.getElementById('signin-link').innerHTML = 'تسجيل الدخول';
            document.getElementById('land-h').innerHTML = 'خلف الجدار';
            document.getElementById('land-p').innerHTML = 'منذ حرب الأيام الستة عام 1967 سجن الإحتلال الإسرائيلي أكثر من 700 ألف عربي، معظمهم بتهمة ارتكاب جرائم سياسية و الغالبية العظمى من هؤلاء الأسرى فلسطينيون، و توفي بعضهم في الاعتقال بينما لا يزال آخرون في السجون، على مر السنين تم اعتقال الآلاف، العديد منهم تحرروا، هذه بعض قصصهم';
            document.getElementById('news1').innerHTML = 'أخبار عاجلة';
            document.getElementById('p-news1').innerHTML = 'تبدأ حركة الأسير  برنامجا تصعيديا في كافة السجون يوم الجمعة المقبل';
            document.getElementById('news2').innerHTML = 'أخبار عاجلة';
            document.getElementById('p-news2').innerHTML = 'مشاركة وزارة الأسرى و المحررين في وقفة تضامنية مع الأسرى المضربين عن الطعام';
            document.getElementById('news3').innerHTML = 'أخبار عاجلة'; 
            document.getElementById('p-news3').innerHTML = 'وزارة الأسرى والمحررين تنعي وفاة وزير الأسرى السابق وصفى قبها'; 
            document.getElementById('israeli-prisons').innerHTML = 'سجون الاحتلال الإسرائيلي';
            document.getElementById('israeli-prisons-p').innerHTML = 'أقام الاحتلال الإسرائيلي العديد من معسكرات الاعتقال بعد حرب حزيران / يونيو 1967 التي احتل فيها الاحتلال الإسرائيلي الضفة الغربية، بما في ذلك القدس وقطاع غزة.';
            document.getElementById('acre-h').innerHTML = 'سجن عكا';
            document.getElementById('acre-p').innerHTML = 'يُعرف أيضًا باسم سجن عكا وهو سجن سابق ومتحف حالي في عكا ، فلسطين المحتلة.';
            document.getElementById('ayalon-h').innerHTML = 'سجن ايالون';
            document.getElementById('ayalon-p').innerHTML = 'يُعرف أيضًا باسمه القديم سجن الرملة، وهو سجن شديد الحراسة في الرملة، فلسطين المحتلة.';
            document.getElementById('ashkelon-h').innerHTML = 'سجن عسقلان المركزي';
            document.getElementById('ashkelon-p').innerHTML = 'تأسس في عهد الانتداب البريطاني كمقر قيادة الجيش البريطاني في عسقلان';
            document.getElementById('maskobiya-h').innerHTML = 'سجن المسكوبية';
            document.getElementById('maskobiya-p').innerHTML = 'يقع سجن المسكوبية شمال مدينة القدس ضمن ما يسمى بـ "الساعة الروسية".';
            document.getElementById('nafkha-h').innerHTML = 'سجن نفحة';
            document.getElementById('nafkha-p').innerHTML = 'يعتبر هذا السجن الذي يبعد 100 كلم عن مدينة بئر السبع و 200 كلم عن مدينة القدس ، من أقسى سجون الاحتلال الإسرائيلي.';
            document.getElementById('damon-h').innerHTML = 'سجن ريمون';
            document.getElementById('damon-p').innerHTML = 'تم بناء هذا السجن منذ عهد الانتداب البريطاني كمخزن للدخان';
            document.getElementById('stat-h').innerHTML = 'حقائق و أرقام';
            document.getElementById('stat-p').innerHTML = 'تشير إحصائية رسمية صادرة عن المركز الوطني الفلسطيني للمعلومات والإعلام التابع لـ "وفا" إلى أن عدد الأسرى الفلسطينيين والعرب في سجون ومعتقلات الاحتلال الإسرائيلي وصل إلى 4850 أسيرًا.';
            document.getElementById('total').innerHTML = 'العدد الإجمالي للمعتقلين السياسيين';
            document.getElementById('female').innerHTML = 'المعتقلات';
            document.getElementById('childern').innerHTML = 'الأطفال المعتقلون';
            document.getElementById('admin').innerHTML = 'المعتقلون الإداريون';
            document.getElementById('logisiative').innerHTML = 'أعضاء المجمع اللوجستي الفلسطيني';
            document.getElementById('sick').innerHTML = 'المعتقلون المرضى';
            document.getElementById('serving-life').innerHTML = 'معتقلون يقضون عقوبة سجن مدى الحياة';
            document.getElementById('serving-20').innerHTML = 'معتقلون قضوا عقوبة سجن أكثر من 20 سنة';
            document.getElementById('journalists').innerHTML = 'الصحفيون';
            document.getElementById('torture-h').innerHTML = 'التعذيب و المعاملة القاسية';
            document.getElementById('torture-p').innerHTML = 'بدأت سلطات الاحتلال بممارسة التعذيب بحق المعتقلين الفلسطينيين منذ احتلالها لفلسطين، واستخدمت عدة طرق لتعذيب المعتقلين نفسيا وجسديا.';
            document.getElementById('torture-p2').innerHTML = 'أبرز أشكال التعذيب التي تمارسها قوات الاحتلال في مختلف مراكز الاستجواب:';
            document.getElementById('pal-h').innerHTML = 'الأسرى الفلسطينيون';
            document.getElementById('pal-p').innerHTML = 'اعتقلت قوات الاحتلال الإسرائيلي قرابة (700 ألف) فلسطيني منذ الانتكاسة الفلسطينية والعربية عام 1967 وحتى بداية العام الحالي 2008 ، ويشمل هذا العدد رجال ونساء وأطفال وشيوخ من الضفة الغربية وقطاع غزة والأراضي المحتلة. في عام 1948';
            document.getElementById('zakaria-h').innerHTML = 'زكريا الزبيدي';
            document.getElementById('zakaria-p').innerHTML = 'يعتبر رمز من رموز الإنتفاضة';
            document.getElementById('zakaria-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('marwan-h').innerHTML = 'مروان البرغوثي';
            document.getElementById('marwan-p').innerHTML = 'شخصية سياسية أدانت وسجنت بتهمة القتل من قبل محكمة الاحتلال الإسرائيلي.';
            document.getElementById('marwan-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('karim-h').innerHTML = 'كريم يونس';
            document.getElementById('karim-p').innerHTML = 'أطول أسير فلسطيني قضى في سجون الاحتلال الإسرائيلي';
            document.getElementById('karim-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('nael-h').innerHTML = 'نائل البرغوثي';
            document.getElementById('nael-p').innerHTML = 'أطول أسير سياسي فلسطيني قضى في سجون الاحتلال الإسرائيلي.';
            document.getElementById('nael-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('ahmad-h').innerHTML = 'أحمد مناصرة';
            document.getElementById('ahmad-p').innerHTML = 'طفل فلسطيني من مواليد 22 كانون الثاني 2002 في بيت حنينا بالقدس المحتلة';
            document.getElementById('ahmad-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('israa-h').innerHTML = 'إسراء جعابيص';
            document.getElementById('israa-p').innerHTML = 'فلسطينية معتقلة منذ عام 2015 في سجون الاحتلال الإسرائيلي.';
            document.getElementById('israa-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('maher-h').innerHTML = 'ماهر يونس';
            document.getElementById('maher-p').innerHTML = 'ثاني أكبر أسير فلسطيني في سجون الاحتلال بعد ابن عمه عميد الأسرى كريم يونس.';
            document.getElementById('maher-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('yaqoob-h').innerHTML = 'يعقوب قادري';
            document.getElementById('yaqoob-p').innerHTML = 'أسير فلسطيني محكوم بالسجن المؤبد وخمسة وثلاثون عاما';
            document.getElementById('yaqoob-a').innerHTML = 'اقرأ المزيد';
            document.getElementById('stories-prisoners').innerHTML = 'قصص الأسرى';
            document.getElementById('story1').innerHTML = 'إن الاحتلال الإسرائيلي يفعل هذا [يسجنك] ليحولك من إنسان إلى مخلوق بالكاد على قيد الحياة. نسي شخص ما. العيش فقط للأكل والنوم';
            document.getElementById('story1-name').innerHTML = 'صالح أبو لبن';
            document.getElementById('story1-position').innerHTML = 'أسير سابق';
            document.getElementById('story2').innerHTML = 'أكره الجلوس في مواجهة الحائط. الجلوس في مواجهة الحائط يذكرني بالسجن. إنه يعني الذل وانعدام الأمن.';
            document.getElementById('story2-name').innerHTML = 'صالح أبو لبن';
            document.getElementById('story2-position').innerHTML = 'أسير سابق';
            document.getElementById('story3').innerHTML = 'أحلم بـ [السجن] ... أرى نفسي في الزنزانة ، في إضراب ، أقرأ أو أكتب. الصورة تعيش بداخلي.';
            document.getElementById('story3-name').innerHTML = 'أحمد أبو هدبة';
            document.getElementById('story3-position').innerHTML = 'أسير سابق';
            document.getElementById('contact-us').innerHTML = 'تواصل معنا';
           




        }
        else if (language == 'en') {

            document.getElementById('colors').innerHTML = 'Colors';
            document.getElementById('random-bg').innerHTML = 'Random Backgrounds';
            document.getElementById('yes').innerHTML = 'Yes';
            document.getElementById('no').innerHTML = 'No';
            document.getElementById('bullets').innerHTML = 'Show Bullets';
            document.getElementById('show').innerHTML = 'Show';
            document.getElementById('hide').innerHTML = 'Hide';
            document.getElementById('reset').innerHTML = 'Reset';
            document.getElementById('israeli-prison').innerHTML = 'Israeli Occupation Prisons';
            document.getElementById('stats').innerHTML = 'Statistics and Figures';
            document.getElementById('torture').innerHTML = 'Torture and Cruel Treatment';
            document.getElementById('pal-prisoners').innerHTML = 'Palestinian Prisoners';
            document.getElementById('stroies').innerHTML = 'Stories of Prisoners';
            document.getElementById('contact').innerHTML = 'Contact Us';
            document.getElementById('israeli-prison-link').innerHTML = 'Israeli Occupation Prisons';
            document.getElementById('stats-link').innerHTML = 'Statistics and Figures';
            document.getElementById('torture-link').innerHTML = 'Torture and cruel Treatment';
            document.getElementById('pal-prisoners-link').innerHTML = 'Palestinian Prisoners';
            document.getElementById('stories-link').innerHTML = 'Stories of Prisoners';
            document.getElementById('contact-link').innerHTML = 'Contact Us';
            document.getElementById('signin-link').innerHTML = 'Sign in';
            document.getElementById('land-h').innerHTML = 'Beyond the Walls';
            document.getElementById('land-p').innerHTML = 'Since the Six Day War in 1967, Israeli occupation has imprisoned more than 700,000 Arabs, mostly for political crimes, The vast majority of these prisoners have been Palestinian, Some died in detention, while others remain in jail, But over the years, thousands have been free, These are some of their stories.';
            document.getElementById('news1').innerHTML = 'Breaking News';
            document.getElementById('p-news1').innerHTML = 'The Captive movement will start an escalating program in all prisons next Friday';
            document.getElementById('news2').innerHTML = 'Breaking News';
            document.getElementById('p-news2').innerHTML = 'The participation of the Ministry of Prisoners and Ex-Prisoners in the Solidarity Stand with the Prisoners on Hunger Strike';
            document.getElementById('news3').innerHTML = 'Breaking News'; 
            document.getElementById('p-news3').innerHTML = 'The Ministry of Detainees and Ex-Prisoners mourns the death of the former Minister of Detainees, Wasfi Kabha'; 
            document.getElementById('israeli-prisons').innerHTML = 'Israeli Occupation Prisons';
            document.getElementById('israeli-prisons-p').innerHTML = 'Israeli occupation established many detention camps after the June 1967 war in which Israeli occupation occupied the West Bank, including Jerusalem and the Gaza Strip.';
            document.getElementById('acre-h').innerHTML = 'Acre Prison';
            document.getElementById('acre-p').innerHTML = 'Also known as Akko Prison is a former prison and current museum in Acre, occupied Palestine.';
            document.getElementById('ayalon-h').innerHTML = 'Ayalon Prison';
            document.getElementById('ayalon-p').innerHTML = 'Also known by its old name Ramla Prison is a maximum-security prison in Ramla, occupied Palestine.';
            document.getElementById('ashkelon-h').innerHTML = 'Ashkelon Central Prison';
            document.getElementById('ashkelon-p').innerHTML = 'It was established during the British Mandate era as the headquarters of the British Army command in Ashkelon';
            document.getElementById('maskobiya-h').innerHTML = 'Al-Maskobiya Prison';
            document.getElementById('maskobiya-p').innerHTML = 'Al-Maskobiya Prison is located in the northern part of the city of Jerusalem, within the so-called “Russian Clock”';
            document.getElementById('nafkha-h').innerHTML = 'Nafkha Prison';
            document.getElementById('nafkha-p').innerHTML = 'This prison, which is 100 km from the city of Beersheba and 200 km from the city of Jerusalem, is considered one of the harshest Israeli occupation prisons.';
            document.getElementById('damon-h').innerHTML = 'Damon Prison';
            document.getElementById('damon-p').innerHTML = 'This prison was built since the time of the British Mandate as a warehouse for smoke';
            document.getElementById('stat-h').innerHTML = 'Statistics and Figures';
            document.getElementById('stat-p').innerHTML = 'An official statistic issued by the Palestinian National Information and Media Center affiliated to WAFA indicates that the number of Palestinian and Arab prisoners in Israeli occupation prisons and detention centers has reached 4850.';
            document.getElementById('total').innerHTML = 'Total Number of Political Detainees';
            document.getElementById('female').innerHTML = 'Female Detainees';
            document.getElementById('childern').innerHTML = 'Children Detainees';
            document.getElementById('admin').innerHTML = 'Administrative Detainees';
            document.getElementById('logisiative').innerHTML = 'Palestinian Logisiative Coundl Members';
            document.getElementById('sick').innerHTML = 'Sick Detainees';
            document.getElementById('serving-life').innerHTML = 'Detainees Serving Life Sentences';
            document.getElementById('serving-20').innerHTML = 'Detainees Serving More than 20 Years';
            document.getElementById('journalists').innerHTML = 'Journalists';
            document.getElementById('torture-h').innerHTML = 'Torture and Cruel Treatment';
            document.getElementById('torture-p').innerHTML = 'The occupation authorities began to practice torture against Palestinian detainees since their occupation of Palestine, and used several methods to torture detainees psychologically and physically';
            document.getElementById('torture-p2').innerHTML = 'The most prominent forms of torture used by the occupation forces in the various interrogation centers:';
            document.getElementById('pal-h').innerHTML = 'Palestinian Prisoners';
            document.getElementById('pal-p').innerHTML = 'The Israeli occupation forces have arrested nearly (700,000) Palestinians since the Palestinian and Arab setback in 1967 until the beginning of this year 2008, and this number includes men, women, children and the elderly from the West Bank, Gaza Strip and the occupied territories in 1948';
            document.getElementById('zakaria-h').innerHTML = 'Zakaria Zubeidi';
            document.getElementById('zakaria-p').innerHTML = 'He is considered a "symbol of the Intifada".';
            document.getElementById('zakaria-a').innerHTML = 'Read More';
            document.getElementById('marwan-h').innerHTML = 'Marwan ElBarghouti';
            document.getElementById('marwan-p').innerHTML = 'A political figure convicted and imprisoned for murder by an Israeli occupation court.';
            document.getElementById('marwan-a').innerHTML = 'Read More';
            document.getElementById('karim-h').innerHTML = 'Karim Younis';
            document.getElementById('karim-p').innerHTML = 'The longest serving Palestinian prisoner in Israeli occupation jails';
            document.getElementById('karim-a').innerHTML = 'Read More';
            document.getElementById('nael-h').innerHTML = 'Nael Elbarghouti';
            document.getElementById('nael-p').innerHTML = 'The longest serving Palestinian political prisoner in Israeli occupation jail.';
            document.getElementById('nael-a').innerHTML = 'Read More';
            document.getElementById('ahmad-h').innerHTML = 'Ahmad Manasra';
            document.getElementById('ahmad-p').innerHTML = 'A Palestinian child, was born on January 22, 2002 in Beit Hanina, occupied Jerusalem';
            document.getElementById('ahmad-a').innerHTML = 'Read More';
            document.getElementById('israa-h').innerHTML = 'Israa Jaabis';
            document.getElementById('israa-p').innerHTML = 'The second oldest Palestinian prisoner in the prisons of the occupation, after his cousin, the dean of prisoners, Karim Younis.';
            document.getElementById('israa-a').innerHTML = 'Read More';
            document.getElementById('maher-h').innerHTML = 'Maher Younes';
            document.getElementById('maher-p').innerHTML = 'The second oldest Palestinian prisoner in the prisons of the occupation, after his cousin, the dean of prisoners, Karim Younis.';
            document.getElementById('maher-a').innerHTML = 'Read More';
            document.getElementById('yaqoob-h').innerHTML = 'Yaqoob Qadri';
            document.getElementById('yaqoob-p').innerHTML = 'A Palestinian prisoner is sentenced to two life imprisonment plus thirty-five years';
            document.getElementById('yaqoob-a').innerHTML = 'Read More';
            document.getElementById('stories-prisoners').innerHTML = 'Stories of Prisoners';
            document.getElementById('story1').innerHTML = 'The Israeli occupation do this [imprison you] in order to turn you from a human being into a creature barely alive. Someone forgotten. Living only to eat and sleep';
            document.getElementById('story1-name').innerHTML = 'Saleh Abu Laban';
            document.getElementById('story1-position').innerHTML = 'Former Prisoner';
            document.getElementById('story2').innerHTML = 'I hate to sit facing the wall. Sitting facing a wall reminds me of jail. It means humiliation and insecurity.';
            document.getElementById('story2-name').innerHTML = 'Saleh Abu Laban';
            document.getElementById('story2-position').innerHTML = 'Former Prisoner';
            document.getElementById('story3').innerHTML = 'I dream about [prison]... I see myself in the cell, on strike, reading or writing. The picture lives inside me.';
            document.getElementById('story3-name').innerHTML = 'Ahmed Abu Hedbah';
            document.getElementById('story3-position').innerHTML = 'Former Prisoner';
            document.getElementById('contact-us').innerHTML = 'Contact Us';
            document.getElementById('acre-prison-h').innerHTML = 'Acre Prison';

        }

        localStorage.setItem('Language', language);
    }
}

onload = new Translate();